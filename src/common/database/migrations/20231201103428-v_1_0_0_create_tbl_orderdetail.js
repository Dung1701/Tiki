'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'tbl_orderdetail',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          orderid: {
            type: Sequelize.DataTypes.UUID,
            references: {
              model: 'tbl_order',
              key: 'id',
            },
          },
          productid: {
            type: Sequelize.DataTypes.UUID,
            references: {
              model: 'tbl_product',
              key: 'id',
            },
          },
         
          quantity: {
            type: Sequelize.DataTypes.STRING,
          },
          subtotal: {
            type: Sequelize.DataTypes.DATE,
          
          },
         
          created_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.DataTypes.NOW,
          },
          updated_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.DataTypes.NOW,
          },
          deleted_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true,
          },
        },
        {
          transaction,
        },
      )
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('tbl_orderdetail', { transaction })
    })
  },
}
