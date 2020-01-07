'use strict';
module.exports = (sequelize, DataTypes) => {
  const todos = sequelize.define('todos', {
    index: DataTypes.STRING,
    label: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {});
  todos.associate = function(models) {
    // associations can be defined here
  };
  return todos;
};