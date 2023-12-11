import { DataTypes } from 'sequelize';
import { sequelize, Sequelize } from '../base';

export const deliveryreview = sequelize.define(
  'tbl_deliveryreview',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.UUID,
      references: {
        model: 'tbl_user',
        key: 'id',
      },
    },
    orderid: {
      type: DataTypes.UUID,
      references: {
        model: 'tbl_order',
        key: 'id',
      },
    },
    delivery_rating: {
      type: DataTypes.STRING,
    },
    delivery_comment: {
      type: DataTypes.STRING,
    },
    emdelivery_reviewtype: {
      type: DataTypes.STRING,
    },
    delivery_reviewdate: {
      type: DataTypes.DATE,
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
