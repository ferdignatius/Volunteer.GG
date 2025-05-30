export default interface AchievementAttributes {
  id: number;
  title: string;
  description: string;
  min_points: number;
  createdAt?: Date;
  updatedAt?: Date;
}