from typing import Union

from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding


class AESEncryption:

    @staticmethod
    def decode_and_strip(decrypted_data: bytes) -> str:
        return ''.join(character for character in decrypted_data.decode() if character.isprintable())

    @classmethod
    def decrypt(cls, hex_key: str, hex_iv: str, data: str, raw: bool = False) -> Union[str, bytes]:
        key = bytes.fromhex(hex_key)
        iv = bytes.fromhex(hex_iv)
        cipher = Cipher(algorithms.AES(key), modes.CBC(iv))
        decryptor = cipher.decryptor()
        decrypted_data = decryptor.update(
            bytes.fromhex(data)) + decryptor.finalize()
        return decrypted_data if raw else cls.decode_and_strip(decrypted_data)

    @ classmethod
    def encrypt(cls, key: str, iv: str, data: str, raw: bool = False) -> Union[str, bytes]:
        padder = padding.PKCS7(128).padder()
        padded_data = padder.update(data)
        padded_data += padder.finalize()
        cipher = Cipher(algorithms.AES(key), modes.CBC(iv))
        encryptor = cipher.encryptor()
        encrypted_data = encryptor.update(padded_data) + encryptor.finalize()
        return encrypted_data.hex()
