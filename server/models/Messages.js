module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Messages', {
        name: DataTypes.STRING,
        contact: DataTypes.STRING,
        message: DataTypes.STRING
    });
    Message.associate = (models) => {
        Message.belongsTo(models.Users, {
            as: 'Receiver'
        });

    }
 
    return Message;
}
    