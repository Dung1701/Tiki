import { DataTypes } from 'sequelize';
import { sequelize, Sequelize } from '../base';

export const Orders = sequelize.define(
  'tbl_order',
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
    order_date: {
      type: DataTypes.DATE,
    },
    status: {
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
