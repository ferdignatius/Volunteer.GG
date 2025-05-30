export default interface UserRelationAttributes {
  user_id: number;
  friend_id: number;
  createdAt?: Date;  // Optional because it's managed by Sequelize
  updatedAt?: Date;  // Optional because it's managed by Sequelize
}