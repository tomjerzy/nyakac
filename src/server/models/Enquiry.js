module.exports = (sequelize, DataTypes) => {
    const Enquiry = sequelize.define('Enquiry', {
        f_name: DataTypes.STRING,
        email: DataTypes.STRING,
        l_name: DataTypes.STRING,
        message: DataTypes.STRING,
    });
 
    return Enquiry;
}
    