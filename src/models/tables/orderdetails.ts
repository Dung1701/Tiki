import { DataTypes } from 'sequelize';
import { sequelize, Sequelize } from '../base';

export const orderdetail = sequelize.define(
  'tbl_orderdetail',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    orderid: {
      type: DataTypes.UUID,
      references: {
        model: 'tbl_order',
        key: 'id',
      },
    },
    productid: {
      type: DataTypes.UUID,
      references: {
        model: 'tbl_product',
        key: 'id',
      },
    },
    quantily: {
      type: DataTypes.STRING,
    },
    subtotal: {
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
