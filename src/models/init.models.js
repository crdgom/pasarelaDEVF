import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _cards from  "./cards.js";
import _clients from  "./clients.js";
import _orders from  "./orders.js";
import _paymenth_methods from  "./paymenth_methods.js";
import _status from  "./status.js";
import _tokens from  "./tokens.js";

export default function initModels(sequelize) {
  const cards = _cards.init(sequelize, DataTypes);
  const clients = _clients.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const paymenth_methods = _paymenth_methods.init(sequelize, DataTypes);
  const status = _status.init(sequelize, DataTypes);
  const tokens = _tokens.init(sequelize, DataTypes);

  tokens.belongsTo(cards, { as: "card", foreignKey: "card_id"});
  cards.hasMany(tokens, { as: "tokens", foreignKey: "card_id"});
  orders.belongsTo(clients, { as: "client", foreignKey: "client_id"});
  clients.hasMany(orders, { as: "orders", foreignKey: "client_id"});
  orders.belongsTo(paymenth_methods, { as: "paymenthm", foreignKey: "paymenthm_id"});
  paymenth_methods.hasMany(orders, { as: "orders", foreignKey: "paymenthm_id"});
  orders.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(orders, { as: "orders", foreignKey: "status_id"});
  orders.belongsTo(tokens, { as: "token", foreignKey: "token_id"});
  tokens.hasMany(orders, { as: "orders", foreignKey: "token_id"});

  return {
    cards,
    clients,
    orders,
    paymenth_methods,
    status,
    tokens,
  };
}
