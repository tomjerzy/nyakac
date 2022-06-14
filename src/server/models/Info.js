//import {User} from './User'
module.exports = (sequelize, DataTypes) => {
    const Info = sequelize.define('Info', {
        district: DataTypes.STRING(),
        sublocation: DataTypes.STRING(),
        ward: DataTypes.STRING(),
        location: DataTypes.STRING(),
        profession: DataTypes.STRING(),
        achievements: DataTypes.STRING(1000)
    });
    Info.associate = function(models) {
        models.User.belongsTo(Info, {as: 'Info'});
     }
    return Info;
}
    