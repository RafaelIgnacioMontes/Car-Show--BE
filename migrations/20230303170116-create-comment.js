'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        onDelete: 'CASCADE',
        reference: {
          model: 'users',
          key: 'id'
        }
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // carsId: {
      //   type: Sequelize.INTEGER,
      //   field: 'car_id',
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'cars',
      //     key: 'id'
      //   }
      // },
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
    await queryInterface.dropTable('comments')
  }
}
