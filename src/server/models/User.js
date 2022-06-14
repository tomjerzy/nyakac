module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
    f_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
    l_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    password: {
        type: DataTypes.STRING(),
        validate: {
           max:{
              args:[32],
              msg:"Password too long"
            },
            min:{
                args:[4],
                msg:"Pasword too short"
            }
        },
       
      },
    gender: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false
      },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
      },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
      },
    phone: {
        type: DataTypes.INTEGER,
        isNumeric: true,
        len: [10,12]
    },
	fb: DataTypes.STRING,
  ig: DataTypes.STRING,
  twitter: DataTypes.STRING
});

return User
}
