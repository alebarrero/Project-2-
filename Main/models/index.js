const User = require('./User');
const Interests = require('./interests');

User.hasMany(Interests, {
  foreignKey: 'userid',
  onDelete: 'CASCADE'
});
 Interests.belongsTo(User, {
  foreignKey: 'userid'
});

module.exports = { User, Interests };
