from cryptography import fernet

def create_public_key():
    key = fernet.Fernet.generate_key()
    return key

def encrypt_data(key, data):
    token = fernet.Fernet.encrypt(key, data)
    return token

def decrypt_data(key, token):
    data = fernet.Fernet.decrypt(key, token)
    return data

        