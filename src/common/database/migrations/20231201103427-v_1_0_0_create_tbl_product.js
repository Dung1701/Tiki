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
        'tbl_product',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          categorisid: {
            type: Sequelize.DataTypes.UUID,
            references: {
              model: 'tbl_categoris',
              key: 'id',
            },
          },
          promotionid: {
            type: Sequelize.DataTypes.UUID,
            references: {
              model: 'tbl_promotion',
              key: 'id',
            },
          },
          
          name: {
            type: Sequelize.DataTypes.STRING,
          },
          description: {
            type: Sequelize.DataTypes.STRING,
          },
          price: {
            type: Sequelize.DataTypes.STRING,
          },
          stockquantity: {
            type: Sequelize.DataTypes.STRING,
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
      await queryInterface.dropTable('tbl_product', { transaction })
    })
  },
}
