export default interface UserCertificateAttributes {
  id: number;
  user_id: number;
  certificate_url: string;
  createdAt?: Date;  // Optional because it's managed by Sequelize
  updatedAt?: Date;  // Optional because it's managed by Sequelize
}