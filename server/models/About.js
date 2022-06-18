//import {User} from './User'
module.exports = (sequelize, DataTypes) => {
    const About = sequelize.define('Abouts', {
        title: DataTypes.STRING(100),
        education: DataTypes.STRING(1000),
        role: DataTypes.STRING(1000),
        about: DataTypes.STRING(2000),
	
    });
    About.associate = function(models) {
       models.Users.belongsTo(About, {as: 'About'});
    }
    return About;
}
    