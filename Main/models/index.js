const User = require('./User');
const Interests = require('./Interests');

User.hasMany(Interests, {
  foreignKey: 'userid',
  onDelete: 'CASCADE'
});
 Interests.belongsTo(User, {
  foreignKey: 'userid'
});

module.exports = { User, Interests };
