'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Question extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Question.hasMany(models.Answer, { foreignKey: 'questionId' });
            Question.belongsTo(models.Exam, { foreignKey: 'examId' });
        }
    }
    Question.init({
        content: DataTypes.STRING,
        examId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Question',
    });
    return Question;
};