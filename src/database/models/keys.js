const { Model, Sequelize } = require('sequelize')

module.exports = sequelize => {
  class Keys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {}
  }
  Keys.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      key: {
        type: Sequelize.INTEGER,
      },
      doorNumber: {
        type: Sequelize.INTEGER,
      },
      doorLocation: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      lockNumber: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'keys',
    }
  )
  return Keys
}
