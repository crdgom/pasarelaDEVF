import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class orders extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_order: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    exchange_rate: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    expedition_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    geolocation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    version: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    bank_transmitter: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bank_receptor: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    concept: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    charges: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    recurrency: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    token_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tokens',
        key: 'id_token'
      }
    },
    client_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'clients',
        key: 'id_client'
      }
    },
    paymenthm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'paymenth_methods',
        key: 'id_paymenthm'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id_estatus'
      }
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orders_pkey",
        unique: true,
        fields: [
          { name: "id_order" },
        ]
      },
    ]
  });
  }
}
