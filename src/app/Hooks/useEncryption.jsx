'use client'

import { useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';

const useEncryption = (key) => {
  const encrypt = (data) => {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
    return encodeURIComponent(encrypted);
  };

  const decrypt = (encryptedData) => {
    try {
      const decrypted = CryptoJS.AES.decrypt(decodeURIComponent(encryptedData), key);
      return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      console.error('Error decrypting data:', error);
      return null;
    }
  };

  return { encrypt, decrypt };
};

export default useEncryption;
