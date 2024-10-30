require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({
  path: "./.env.local",
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    polygonzk: {
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [process.env.NEXT_PUBLIC_PRIVATE_KEY],
    },
  },
};
