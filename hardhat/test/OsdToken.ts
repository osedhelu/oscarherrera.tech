import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";
import { TestTransaction } from "./Transaction";
async function deployOneYearLockFixture() {
  const [owner, account1, account2, account3] = await ethers.getSigners();
  const Token = await ethers.getContractFactory("OsdToken");
  const token = await Token.connect(owner).deploy();
  return { token, owner, account1, account2, account3 };
}

it("deploy", async () => {
  const initContract = await loadFixture(deployOneYearLockFixture);
  describe("Transacciones", async () => {
    await TestTransaction(initContract);
  });
});
