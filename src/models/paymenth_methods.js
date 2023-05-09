import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class paymenth_methods extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_paymenthm: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    transaction_fee: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    transaction_limit: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'paymenth_methods',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "paymenth_methods_pkey",
        unique: true,
        fields: [
          { name: "id_paymenthm" },
        ]
      },
    ]
  });
  }
}
