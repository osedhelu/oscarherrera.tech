import { ethers } from "hardhat";
import { iTokenOsd } from "../types/iToken";
import { formatAsUSD } from "../utiles/formatePrice";
import { expect } from "chai";
const montSuplay = 1000000;
const lockedAmount = 1000;
export const TestTransaction = async ({
  account1,
  account2,
  account3,
  owner,
  token,
}: iTokenOsd) => {
  it(`usar metodo :transfer para enviar ${formatAsUSD(
    lockedAmount
  )}, de owner a Cuenta 1`, async () => {
    await token
      .connect(owner)
      .transfer(
        account1.address,
        ethers.parseEther(String(lockedAmount)),
        JSON.stringify({ message: "test" })
      );
    const totalSupply = await token.balanceOf(account1.address);
    expect(totalSupply).to.equal(ethers.parseEther(`${lockedAmount}`));
  });

  it("cuenta1 pone en staking 100 token ", async () => {
    const resp = await token.approve(
      account1.address,
      ethers.parseEther("100")
    );
    const total = await token.allowed(owner.address, account1.address);
    expect(Number(ethers.formatEther(total))).to.equal(100);
  });
  it("usar metodo :transferFrom para enviar 100 de Cuenta1 a Cuenta 2", async () => {
    await token
      .connect(owner)
      .transferFrom(
        account1.address,
        account2.address,
        ethers.parseEther("100"),
        JSON.stringify({ message: "test" })
      );
    const amountCuenta2 = await token.balanceOf(account2.address);
    expect(amountCuenta2).to.equal(ethers.parseEther("100"));
  });

  it("usar metodo: PaySmartContract, el smart contract pagara 10 token a Cuenta 3", async () => {
    const amount = ethers.parseEther("10");
    await token.connect(owner).paySmartContract(account3.address, amount);
    const amountCuenta3 = await token.balanceOf(account3.address);
    expect(amountCuenta3).to.equal(amount);
  });
  it(`Validar la cantidad de dinero que tiene el smart contract ${formatAsUSD(
    500000 - 10
  )}`, async () => {
    const amount = ethers.parseEther(`${500000 - 10}`);
    const balance = await token
      .connect(account3)
      .balanceOf(await token.getAddress());
    expect(balance).to.equal(amount);
  });
  it("Error de transferFrom: no tienes permiso para enviar estos token", async () => {
    try {
      await token
        .connect(account1)
        .transferFrom(
          account1.address,
          account2,
          ethers.parseEther("100"),
          JSON.stringify({ message: "test" })
        );
    } catch ({ message }: any) {
      expect(message).to.include(
        "OsdToken: no tienes permiso para enviar estos token"
      );
    }
  });
};
