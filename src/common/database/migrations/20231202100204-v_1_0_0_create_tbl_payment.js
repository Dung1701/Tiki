'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.createTable(
        'tbl_payment',
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
          userid: {
            type: Sequelize.DataTypes.UUID,
            references: {
              model: 'tbl_user',
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
          name: {
            type: Sequelize.DataTypes.STRING,
          },
          email: {
            type: Sequelize.DataTypes.STRING,
          },
          address: {
            type: Sequelize.DataTypes.STRING,
          },
          amount: {
            type: Sequelize.DataTypes.STRING,
          },
          payment_date: {
            type: Sequelize.DataTypes.DATE,
          },
          payment_menthod: {
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
      );
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return await queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.dropTable('tbl_payment', { transaction });
    });
  },
};

