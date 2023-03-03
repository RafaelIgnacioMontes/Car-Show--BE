// 'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: 'user_Id',
        as: 'car',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Comment.belongsTo(models.Car, {
        foreignKey: 'car_id',
        as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Comment.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        onDelete: 'CASCADE',
        reference: {
          model: 'users',
          key: 'id'
        }
      },

      content: {
        type: DataTypes.STRING,
        allowNull: false
      },

      carsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'car_id',
        onDelete: 'CASCADE',
        references: {
          model: 'cars',
          key: 'id'
        }
      }
    },

    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments'
    }
  )
  return Comment
}
