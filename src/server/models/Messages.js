module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
        name: DataTypes.STRING,
        contact: DataTypes.STRING,
        message: DataTypes.STRING
    });
    Message.associate = (models) => {
        Message.belongsTo(models.User, {
            as: 'Receiver'
        });

    }
 
    return Message;
}
    