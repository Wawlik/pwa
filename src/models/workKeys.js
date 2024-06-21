export default class workKeys {
    constructor(crypto, btoa) {
      this.crypto = crypto;
      this.oneUseKey = null;
      this.oneUseSingKey = null;
      this.btoa = btoa;
    }
    async #generateKey(settingKey, keyUsage) {
      const keyPair = await this.crypto.subtle.generateKey(
        settingKey,
        true,
        keyUsage
      );
      return keyPair;
    }
    getUUIDSession() {
      return this.crypto.randomUUID();
    }
    async getOneUseKey() {
      this.oneUseKey = await this.#generateKey(
        {
          name: "RSA-OAEP",
          modulusLength: 2048,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: "SHA-256"
        },
        ["encrypt", "decrypt"]
      );
      const exportKey = await this.#exportCryptoKey(this.oneUseKey.publicKey);
      return exportKey;
    }
    async getOneUseSignKey() {
      this.oneUseSingKey = await this.#generateKey(
        {
          name: "RSASSA-PKCS1-v1_5",
          modulusLength: 2048,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: "SHA-256"
        },
        ["sign", "verify"]
      );
      const exportKeyPublic = await this.#exportCryptoKey(
        this.oneUseSingKey.publicKey
      );
      const exportKeyPrivate = await this.#exportPrivateCryptoKey(
        this.oneUseSingKey.privateKey
      );
      return { exportKeyPublic, exportKeyPrivate };
    }
    async #exportCryptoKey(key) {
      const exported = await this.crypto.subtle.exportKey("spki", key);
      const exportedAsString = this.#ab2str(exported);
      const exportedAsBase64 = window.btoa(exportedAsString);
      const pemExported = exportedAsBase64;
      return pemExported;
    }
    async #exportPrivateCryptoKey(key) {
      const exported = await this.crypto.subtle.exportKey("pkcs8", key);
      const exportedAsString = this.#ab2str(exported);
      const exportedAsBase64 = window.btoa(exportedAsString);
      const pemExported = exportedAsBase64;
      return pemExported;
    }
    #getMessageEncoding(text) {
      let enc = new TextEncoder();
      return enc.encode(text);
    }
    async #importPublicKey(key, algoritm, keyUsing) {
      const binaryDerString = window.atob(key);
      const binaryDer = this.#str2ab(binaryDerString);
      return await this.crypto.subtle.importKey(
        "spki",
        binaryDer,
        {
          name: "RSA-OAEP",
          hash: "SHA-256"
        },
        true,
        [keyUsing]
      );
    }
    async encryptMessage(
      text,
      key,
      algoritm = {
        name: "RSA-OAEP",
        hash: "SHA-256"
      }
    ) {
      const ObjectKey = await this.#importPublicKey(key, algoritm, "encrypt");
      const encryptedStringBase64 = await this.#chunkingStringEncode(
        text,
        ObjectKey,
        algoritm
      );
      return encryptedStringBase64;
    }
    async decryptData(ciphertext) {
      const buffers = await this.#chunkingStringDecode(ciphertext);
      return buffers.join("");
    }
    async #chunkingStringDecode(text) {
      const chunkSize = 256;
      const buffers = [];
      let stringDecodeAll = window.atob(text);
      for (let i = 0; i < stringDecodeAll.length; i += chunkSize) {
        let stringDecode = stringDecodeAll.substr(i, chunkSize);
        const enc = this.#str2ab(stringDecode);
        const decrypt = await this.crypto.subtle.decrypt(
          { name: "RSA-OAEP" },
          this.oneUseKey.privateKey,
          enc
        );
        buffers.push(this.#ab2str(decrypt));
      }
      return buffers;
    }
    async #chunkingStringEncode(text, key, algoritm) {
      const chunkSize = 190;
      const buffers = [];
      const encodeString = this.#getMessageEncoding(text);
      for (let i = 0; i < encodeString.length; i += chunkSize) {
        let encodedChunk = encodeString.subarray(i, i + chunkSize);
        const ciphertextChunk = await this.crypto.subtle.encrypt(
          algoritm,
          key,
          encodedChunk
        );
        buffers.push(new Uint8Array(ciphertextChunk));
      }
      let mergedArray = new Uint8Array(buffers.length * 256);
      let offset = 0;
      buffers.forEach(item => {
        mergedArray.set(item, offset);
        offset += item.length;
      });
      const strChunk = this.#ab2str(mergedArray);
      const exportedAsBase64Chunk = window.btoa(strChunk);
      return exportedAsBase64Chunk;
    }
    async #importPrivateKey(key) {
      const binaryDerString = window.atob(key);
      // convert from a binary string to an ArrayBuffer
      const binaryDer = this.#str2ab(binaryDerString);
      return await this.crypto.subtle.importKey(
        "pkcs8",
        binaryDer,
        {
          name: "RSASSA-PKCS1-v1_5",
          hash: "SHA-256"
        },
        true,
        ["sign"]
      );
    }
    async signMessage(text, key) {
      const privatKey = await this.#importPrivateKey(key);
      let encoded = this.#getMessageEncoding(text);
      const ciphertext = await this.crypto.subtle.sign(
        {
          name: "RSASSA-PKCS1-v1_5",
          hash: "SHA-256"
        },
        privatKey,
        encoded
      );
      const str = this.#ab2str(ciphertext);
      const exportedAsBase64 = window.btoa(str);
      return exportedAsBase64;
    }
    #ab2str(buf) {
      return String.fromCharCode.apply(null, new Uint8Array(buf));
    }
    #str2ab(str) {
      const buf = new ArrayBuffer(str.length);
      const bufView = new Uint8Array(buf);
      for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
      }
      return buf;
    }
  }
  