const Sequelize = require('sequelize');

class Hashtag extends Sequelize.Model {
  static initiate(sequelize) {
    Hashtag.initiate({
      title: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Hashtag.belongsTo(db.Post, { through : 'PostHashtag'});
  }
};

module.exports = Hashtag;