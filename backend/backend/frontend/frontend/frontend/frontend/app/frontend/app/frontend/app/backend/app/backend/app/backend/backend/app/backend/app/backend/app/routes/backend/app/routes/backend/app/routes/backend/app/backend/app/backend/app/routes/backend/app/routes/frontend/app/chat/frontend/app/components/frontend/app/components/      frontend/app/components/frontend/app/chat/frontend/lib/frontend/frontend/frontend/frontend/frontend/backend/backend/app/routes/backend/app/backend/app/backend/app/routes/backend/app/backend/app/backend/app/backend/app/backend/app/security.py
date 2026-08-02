import secrets
import hashlib
from datetime import datetime


class SecurityManager:

    def __init__(self):
        self.created_at = datetime.utcnow()


    def generate_key(self, length: int = 32):

        return secrets.token_hex(
            length
        )


    def hash_data(self, data: str):

        return hashlib.sha256(
            data.encode()
        ).hexdigest()


    def check_health(self):

        return {
            "security": "active",
            "started": self.created_at
        }


security_manager = SecurityManager()
