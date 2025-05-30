export default interface UserAchievementAttributes {
  id: number;
  user_id: number;
  achievement_id: number;
  status: string;
  createdAt?: Date;  // Optional because it's managed by Sequelize
  updatedAt?: Date;  // Optional because it's managed by Sequelize
}