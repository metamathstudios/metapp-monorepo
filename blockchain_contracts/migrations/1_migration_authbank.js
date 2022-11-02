const AuthBank = artifacts.require("AuthBank");


module.exports = function (deployer) {
    deployer.deploy(AuthBank);
  };