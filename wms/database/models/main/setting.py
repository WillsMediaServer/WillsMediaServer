from wms.database.base import MainBase

from sqlalchemy import Column, String, Text

import uuid

class ModelSetting(MainBase):
    """
    Setting Model
    """

    __tablename__ = "settings"

    id = Column("id", String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column("name", String)
    description = Column("description", Text)
    category = Column("category", String)
    value = Column("value", Text)
