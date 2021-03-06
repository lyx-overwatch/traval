/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('todolist', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'todolist'
  });
};
