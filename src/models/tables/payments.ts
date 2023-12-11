import { promotions } from './promotions';
import { DataTypes } from 'sequelize';
import { sequelize, Sequelize } from '../base';

export const payments = sequelize.define(
  'tbl_payment',
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
    userid: {
      type: DataTypes.UUID,
      references: {
        model: 'tbl_user',
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
    amount: {
      type: DataTypes.STRING,
    },
    payment_date: {
      type: DataTypes.DATE,
    },
    payment_menthod: {
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
