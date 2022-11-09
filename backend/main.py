import os
from symetric_encryption.aes_encryption import AESEncryption
from asymetric_encryption.asymetric_encryption import *



def main():
    
    with open('secret_file.txt', 'rb') as file:
        secret_message = file.read()

    with open('encrypted_file.txt', 'wb') as file:
        symetric_key = os.urandom(32)
        iv = os.urandom(16)
        encrypted_message = AESEncryption.encrypt(symetric_key, iv, secret_message)
        file.write(encrypted_message.encode())

    symetric_key_and_iv = f'{symetric_key.hex()},{iv.hex()}'

    public_key, private_key = generate_keys(2048)

    encrypted_key = encrypt_message(public_key, symetric_key_and_iv)

    print(encrypted_key)




if __name__ == '__main__':
    main()
