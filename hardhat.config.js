require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
let secret =require("./secret")
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// module.exports = {
//   solidity: "0.8.9",
//   paths:{
//     artifacts:"./frontend/src/artifacts"
//   },
//   networks:{
// 	    harhat:{
// 	  	  chainId:1337,
//       },
// 	  }
// };

module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    ropsten: {   //npx hardhat run scripts/deploy.js --network ropsten
      url: secret.url,
      accounts:[secret.key]
    },
  }
};
