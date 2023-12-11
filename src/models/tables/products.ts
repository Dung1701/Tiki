import { DataTypes } from 'sequelize';
import { sequelize, Sequelize } from '../base';

export const products = sequelize.define(
  'tbl_product',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    categorisid: {
      type: DataTypes.UUID,
      references: {
        model: 'tbl_categoris',
        key: 'id',
      },
    },
    promotionid: {
      type: DataTypes.UUID,
      references: {
        model: 'tbl_promotion',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    stock_quantity: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updated_at: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    deleted_at: { type: 'TIMESTAMP' },
  },
  {
    hooks: {},
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    paranoid: true,
    defaultScope: {
      attributes: { exclude: ['deleted_at'] },
    },
    scopes: {
      deleted: {
        where: { deleted_at: { $ne: null } },
        paranoid: false,
      },
    },
  },
);
