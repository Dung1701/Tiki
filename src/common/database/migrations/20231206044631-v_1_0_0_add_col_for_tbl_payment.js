// migrations/xxxxxx-add-userid-to-payments.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_payment', 'userid', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_user',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_payment', 'userid');
  },
};
