from wms.database.base import MainBase

from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship

import uuid

class ModelUser(MainBase):
    """
    User Model
    """

    __tablename__ = "users"

    id = Column("id", String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    username = Column("username", String, unique=True)
    password = Column("password", String)
    first_name = Column("first_name", String)
    last_name = Column("last_name", String)
    email = Column("email", String)
    permission_id = Column("permission", String(36), ForeignKey("permissions.id"))
