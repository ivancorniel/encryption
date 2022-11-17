import { readFile } from 'node:fs/promises';
import crypto from 'crypto';


try {
  const file_private_key = new URL('../private-key.pem', import.meta.url);
  const privateKey = await readFile(file_private_key, { encoding: 'utf8' });

  const file_decrypt_key = new URL('../encrypted_key.txt', import.meta.url);
  const key = await readFile(file_decrypt_key, { encoding: 'utf8' });

  const file_encrypted = new URL('../encrypted_message.txt', import.meta.url);
  const message = await readFile(file_encrypted, { encoding: 'utf8' });



  const decryptedData = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    Buffer.from(key, 'base64'),

  );

  const decryptKeyandIv = decryptedData.toString("utf-8");
  const [symetric_key, iv] = decryptKeyandIv.split(',');

  const decrypt = ((symetric_key, iv, encrypted_secret) => {
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(symetric_key, 'hex'), Buffer.from(iv, 'hex'));
    decipher.setAutoPadding(false);
    let plaintext = decipher.update(encrypted_secret, 'hex', 'utf-8');
    return plaintext
  });

  console.log(decrypt(symetric_key, iv, message))


} catch (err) {
  console.error(err.message);
}


