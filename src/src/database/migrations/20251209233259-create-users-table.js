'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false 
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false 
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false 
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mobile_phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      external_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      last_login: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};
