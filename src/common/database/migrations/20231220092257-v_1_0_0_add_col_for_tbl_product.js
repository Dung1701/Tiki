
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_product', 'subcategoriesid', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_subcategories',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_product', 'subcategoriesid');
  },
};
