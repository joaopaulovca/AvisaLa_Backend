'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.createTable('arquivos', {
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
      arquivopath: {
        type: Sequelize.STRING,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true 
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true 
      },
      post_id: {
        type: Sequelize.UUID,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'posts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
     
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.dropTable('arquivos')
  }
};
