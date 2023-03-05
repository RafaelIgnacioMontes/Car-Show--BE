'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Car.hasMany(models.Comment, {
        foreignKey: 'cars_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Car.init(
    {
      make: {
        type: DataTypes.STRING,
        allowNull: false
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
      // commentId: {
      //   type: DataTypes.INTEGER,
      //   field: 'comment_id',
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'comments',
      //     key: 'id'
      //   }
      // }
    },
    {
      sequelize,
      modelName: 'Car',
      tableName: 'cars'
    }
  )
  return Car
}
