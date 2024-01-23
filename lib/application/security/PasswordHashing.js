module.exports = class {

    saltAndHash(password) {
      throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
  
    compare(password,hashedPassword) {
      throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
  
  };