from wms.database.base import MainBase
from wms.database.models.main.user import ModelUser

from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship

import uuid

class ModelPermission(MainBase):
    """
    Permission Model
    """

    __tablename__ = "permissions"

    id = Column("id", String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column("name", String)
    level = Column("level", Integer)

    users = relationship(ModelUser, backref="permission")
