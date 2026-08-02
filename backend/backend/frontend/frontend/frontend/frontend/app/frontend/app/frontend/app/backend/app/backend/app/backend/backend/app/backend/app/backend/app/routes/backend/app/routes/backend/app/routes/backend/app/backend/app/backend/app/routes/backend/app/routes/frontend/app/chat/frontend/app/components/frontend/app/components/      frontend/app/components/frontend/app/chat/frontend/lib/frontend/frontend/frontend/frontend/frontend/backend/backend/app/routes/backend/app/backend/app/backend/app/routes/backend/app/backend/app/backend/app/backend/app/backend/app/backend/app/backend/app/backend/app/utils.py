import re
from datetime import datetime


def clean_text(text: str):

    if not text:
        return ""

    return re.sub(
        r"\s+",
        " ",
        text
    ).strip()



def generate_title(text: str):

    cleaned = clean_text(text)

    if len(cleaned) <= 40:
        return cleaned

    return cleaned[:40] + "..."



def current_time():

    return datetime.utcnow()



def validate_email(email: str):

    pattern = (
        r"^[\w\.-]+@[\w\.-]+\.\w+$"
    )

    return bool(
        re.match(
            pattern,
            email
        )
    )
