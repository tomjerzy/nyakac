//import {User} from './User'
module.exports = (sequelize, DataTypes) => {
    const About = sequelize.define('About', {
        title: DataTypes.STRING(100),
        education: DataTypes.STRING(1000),
        role: DataTypes.STRING(1000),
        about: DataTypes.STRING(2000),
	
    });
    About.associate = function(models) {
       models.User.belongsTo(About, {as: 'About'});
    }
    return About;
}
    