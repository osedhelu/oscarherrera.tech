import { ethers } from "hardhat";
import helia from "helia";
// import {json}

async function main() {
  const ipfs = await helia.createHelia({});
  // const rep = await json;

  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;
  // const { token, owner } = await deployOneYearLockFixture();
  // console.log(
  //   `Lock with ETH and unlock timestamp ${unlockTime} deployed to ${await token.getAddress()}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
