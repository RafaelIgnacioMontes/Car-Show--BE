'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.removeColumn('comments', 'carsId')
  },

  async down(queryInterface, Sequelize) {
    queryInterface.addColumn('comments', 'carsId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'car_id',
      onDelete: 'CASCADE',
      references: {
        model: 'cars',
        key: 'id'
      }
    })
  }
}
