import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class clients extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_client: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    contract_end: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    clabe: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'clients',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "clients_pkey",
        unique: true,
        fields: [
          { name: "id_client" },
        ]
      },
    ]
  });
  }
}
