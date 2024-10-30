const hre = require("hardhat");

async function main() {
  const fundingDataAll = await hre.ethers.deployContract("CrowdFundingAllData");
  await fundingDataAll.waitForDeployment();
  console.log(`deployed to ${fundingDataAll.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
