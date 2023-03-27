const User = require('./User');
const Interests = require('./Interests');

User.hasMany(Interests, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
 Interests.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Interests };
