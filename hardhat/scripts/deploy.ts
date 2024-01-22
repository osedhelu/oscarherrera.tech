import { ethers } from "hardhat";
async function deployOneYearLockFixture() {
  const [owner, account1, account2, account3] = await ethers.getSigners();
  const Token = await ethers.getContractFactory("OsdToken");
  const token = await Token.connect(owner).deploy();
  return { token, owner, account1, account2, account3 };
}
async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;
  const { token, owner } = await deployOneYearLockFixture();

  console.log(
    `Lock with ETH and unlock timestamp ${unlockTime} deployed to ${await token.getAddress()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
