// migrations/xxxxxx-add-userid-to-payments.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_product', 'stock_quantity', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_product', 'stock_quantity');
  },
};
