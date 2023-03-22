const sequelize = require('../config/connection');
const { User, interests } = require('../models');

const userData = require('./userData.json');
const interestsData = require('./interestsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const interests of interestsData) {
    await interests.create({
      ...interests,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
