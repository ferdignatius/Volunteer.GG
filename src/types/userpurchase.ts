export default interface UserPurchaseAttributes {
  id: number;
  user_id: number;
  item_id: number;
  money_price?: number;  // Optional because it's nullable in the model
  point_price?: number;  // Optional because it's nullable in the model
  createdAt?: Date;  // Optional because it's managed by Sequelize
  updatedAt?: Date;  // Optional because it's managed by Sequelize
}