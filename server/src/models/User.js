
const Promise = require('bluebird')
//const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

var bcrypt = require('bcrypt');

function hashPassword (user, options) {
    const SALT_FACTOR = 8
  
    if (!user.changed('password')) {
      return
    }
  
    return bcrypt
      .genSaltAsync(SALT_FACTOR)
      .then(salt => bcrypt.hashAsync(user.password, salt, null))
      .then(hash => {
        user.setDataValue('password', hash)
      })
  }

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    
      })


    User.prototype.comparePassword = function (password) {
        
        return bcrypt.compareAsync(password, this.password)
       // console.log('model',bcrypt.compareAsync(password, this.password))
      }
    User.associate = (models) => {
        // associations can be defined here


    };

    return User;

}


