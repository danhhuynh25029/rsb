const Fauce = artifacts.require('Fauce');

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Fauce);
};