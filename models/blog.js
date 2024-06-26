"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blog.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: DataTypes.STRING,
      paragraph: DataTypes.TEXT,
      image: DataTypes.STRING,
      tags: DataTypes.STRING,
      publishDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      authorId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
