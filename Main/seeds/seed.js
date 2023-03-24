const sequelize = require('../config/connection');
const { User, Interests } = require('../models');
console.log(Interests)
const userData = require('./userData.json');
const interestsData = require('./interestsData.json');
console.log(interestsData.length,"line 4")
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const interests of interestsData) {
    await Interests.create({
      ...interests,
      userid: users[Math.floor(Math.random() * users.length)].id,
    });
}
  process.exit(0);

};

seedDatabase();
