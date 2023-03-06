'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.renameColumn('users', 'password', 'passwordDigest')
  },

  async down(queryInterface, Sequelize) {
    queryInterface.renameColumn('users', 'passwordDigest', 'password')
  }
}
