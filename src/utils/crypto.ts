import CryptoJS from 'crypto-js';

const ITERATIONS = 100000;
const KEY_SIZE = 256 / 32;

export interface EncryptedData {
  ciphertext: string;
  salt: string;
  iv: string;
}

export const generateSalt = (): string => {
  return CryptoJS.lib.WordArray.random(128 / 8).toString();
};

export const deriveKey = (password: string, salt: string): CryptoJS.lib.WordArray => {
  return CryptoJS.PBKDF2(password, salt, {
    keySize: KEY_SIZE,
    iterations: ITERATIONS,
  });
};

export const encrypt = (message: string, password: string): EncryptedData => {
  const salt = generateSalt();
  const key = deriveKey(password, salt);
  const iv = CryptoJS.lib.WordArray.random(128 / 8);

  const encrypted = CryptoJS.AES.encrypt(message, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return {
    ciphertext: encrypted.toString(),
    salt: salt,
    iv: iv.toString(),
  };
};

export const decrypt = (
  encryptedData: EncryptedData,
  password: string
): string | null => {
  try {
    const key = deriveKey(password, encryptedData.salt);
    const decrypted = CryptoJS.AES.decrypt(encryptedData.ciphertext, key, {
      iv: CryptoJS.enc.Hex.parse(encryptedData.iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Decryption failed:', error);
    return null;
  }
};