from wms.database.base import MainBase

from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.orm import relationship

import uuid

class ModelUser(MainBase):
    """
    User Model
    """

    __tablename__ = "users"

    id = Column("id", String(36), primary_key=True, default=uuid.uuid4)
    username = Column("username", String(64), unique=True)
    first_name = Column("first_name", String(64))
    last_name = Column("last_name", String(64))
    email = Column("email", String(64))
    permission_id = Column("permission", String(36), ForeignKey("permissions.id"))
