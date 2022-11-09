import os
from symetric_encryption.aes_encryption import AESEncryption
from asymetric_encryption.asymetric_encryption import *


def main():

    with open('../secret_file.txt', 'rb') as file:
        secret_message = file.read()

    with open('../encrypted_file.txt', 'wb') as file:
        symetric_key = os.urandom(32)
        iv = os.urandom(16)
        encrypted_message = AESEncryption.encrypt(
            symetric_key, iv, secret_message)
        file.write(encrypted_message.encode())

    print(symetric_key)
    print(iv)
    symetric_key_and_iv = f'{symetric_key.hex()},{iv.hex()}'
    print(symetric_key_and_iv)

    public_key, private_key = generate_keys(2048)

    public_pem, private_pem = serialize_keys(public_key, private_key)
    with open('../private-key.pem', 'wb') as file:
        file.write(private_pem)

    encrypted_key = encrypt_message(public_key, symetric_key_and_iv)

    with open('../encrypted_key.txt', 'wb') as file:
        file.write(encrypted_key.encode())

    print(encrypted_key)


if __name__ == '__main__':
    main()
