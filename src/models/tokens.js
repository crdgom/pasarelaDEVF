import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tokens extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_token: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    token: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    expired_at: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    creado: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    card_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'cards',
        key: 'id_card'
      }
    }
  }, {
    sequelize,
    tableName: 'tokens',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tokens_pkey",
        unique: true,
        fields: [
          { name: "id_token" },
        ]
      },
    ]
  });
  }
}
