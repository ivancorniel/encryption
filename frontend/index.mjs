import crypto from 'crypto';
import { readFile } from 'node:fs/promises';

try {
  const file_private_key = new URL('../private-key.pem', import.meta.url);
  const privateKey = await readFile(file_private_key, { encoding: 'utf8' });

  const file_encrypted_key = new URL('../encrypted_key.txt', import.meta.url);
  const key = await readFile(file_encrypted_key, { encoding: 'utf8' });

  const decryptedData = crypto.privateDecrypt(
    {
      key: Buffer.from(privateKey),
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    Buffer.from(key, 'base64'),
  );
  const decrypt = decryptedData.toString('utf-8');
  const [symetric_key, iv] = decrypt.split(',');

  function hexToBytes(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
      bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
  }

  console.log(hexToBytes(symetric_key))
  console.log(hexToBytes(iv))

} catch (err) {
  console.error(err.message);
}


