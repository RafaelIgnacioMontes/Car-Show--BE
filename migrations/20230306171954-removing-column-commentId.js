'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.removeColumn('cars', 'comment_id')
  },

  async down(queryInterface, Sequelize) {
    queryInterface.addColumn('cars', 'comment_id', {
      type: Sequelize.INTEGER,
      field: 'comment_id',
      onDelete: 'CASCADE',
      references: {
        model: 'comments',
        key: 'id'
      }
    })
  }
}
