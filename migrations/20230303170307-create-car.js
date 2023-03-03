'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      make: {
        type: Sequelize.STRING,
        allowNull: false
      },
      model: {
        type: Sequelize.STRING,
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
        type: Sequelize.INTEGER,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      commentId: {
        type: Sequelize.INTEGER,
        field: 'comment_id',
        onDelete: 'CASCADE',
        references: {
          model: 'comments',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('cars')
  }
}
