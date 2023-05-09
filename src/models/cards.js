import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class cards extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_card: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    card_holder: {
      type: DataTypes.STRING(180),
      allowNull: false
    },
    card_number: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    expiration_date: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    card_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cards',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cards_pkey",
        unique: true,
        fields: [
          { name: "id_card" },
        ]
      },
    ]
  });
  }
}
