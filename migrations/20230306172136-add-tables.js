'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('cars', 'image', {
      type: Sequelize.STRING,
      allowNull: false
    })
    queryInterface.addColumn('cars', 'color', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('cars', 'image')
    queryInterface.removeColumn('cars', 'color')
  }
}
