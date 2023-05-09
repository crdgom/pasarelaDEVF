import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class status extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_estatus: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "status_pkey",
        unique: true,
        fields: [
          { name: "id_estatus" },
        ]
      },
    ]
  });
  }
}
