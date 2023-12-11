// migrations/xxxxxx-add-userid-to-payments.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_payment', 'promotionid', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_promotion',
        key: 'id',
      },
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_payment', 'promotionid');
  },
};
