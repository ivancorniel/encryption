from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import padding 
from cryptography.hazmat.primitives import hashes, serialization


def generate_keys(key_size):
    private_key = rsa.generate_private_key(public_exponent=65537, key_size=key_size, backend=default_backend)
    public_key = private_key.public_key()
    return public_key, private_key

def serialize_keys(public_key, private_key):
    public_pem = public_key.public_bytes(encoding=serialization.Encoding.PEM, format=serialization.PublicFormat.SubjectPublicKeyInfo)
    private_pem = private_key.private_bytes(encoding=serialization.Encoding.PEM, format=serialization.PrivateFormat.PKCS8, encryption_algorithm=serialization.NoEncryption())
    return public_pem, private_pem

def download_keys(public_key_pem, private_key_pem):
    with open('public_key.pem', 'wb') as public_key_file:
        public_key_file.write(public_key_pem)

    with open('private_key.pem', 'wb') as private_key_file:
        private_key_file.write(private_key_pem)

def load_keys(public_key, private_key):
    with open(public_key, 'rb') as public_key_file:
        public_key = serialization.load_pem_public_key(public_key_file.read(), backend=default_backend)

    with open(private_key, 'rb') as private_key_file:
        private_key = serialization.load_pem_private_key(private_key_file.read(), password=None, backend=default_backend)

    return public_key, private_key

def encrypt_message(public_key, message):
    return public_key.encrypt(
        message.encode(),
        padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
        ))
    




