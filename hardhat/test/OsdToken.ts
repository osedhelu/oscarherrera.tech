import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";
import { TestTransaction } from "./Transaction";
async function deployOneYearLockFixture() {
  const [owner, account1, account2, account3] = await ethers.getSigners();
  const Token = await ethers.getContractFactory("OsdToken");
  const token = await Token.connect(owner).deploy();
  return { token, owner, account1, account2, account3 };
}

describe("Test Smart Contract OSDToken", () => {
  it("Crear Smart contract", async () => {
    const initContract = await loadFixture(deployOneYearLockFixture);
    describe("Transacciones", async () => {
      await TestTransaction(initContract);
    });
  });
});

// describe("Token OSD", () => {
//   let TOKEN: OsdToken & {
//     deploymentTransaction(): any;
//   };
//   let OWNER: string;
//   let Cuenta1: string;
//   let Cuenta2: string;
//   let Cuenta3: string;

//   describe("Despliegue del contrato", () => {
//     it("Despliega el contrato correctamente", async function () {
//       const { token, account1, owner, account2, account3 } = await loadFixture(
//         deployOneYearLockFixture
//       );
//       TOKEN = token;
//       OWNER = owner.address;
//       Cuenta1 = account1.address;
//       Cuenta2 = account2.address;
//       Cuenta3 = account3.address;
//       await expect(token).to.not.be;
//     });
//     it(`total Token=${formatAsUSD(
//       montSuplay
//     )}, 50% owner y 50% para el smart contract`, async () => {
//       const ownerBalance = await TOKEN.balanceOf(OWNER);
//       describe("Validar monto a cuentas", () => {
//         it(`owner ${formatAsUSD(montSuplay / 2)}`, async () => {
//           expect(Number(ethers.formatEther(ownerBalance))).to.equal(
//             montSuplay / 2
//           );
//         });
//       });

//       const contractBalance = await TOKEN.balanceOf(await TOKEN.getAddress());
//       expect(ethers.formatEther(contractBalance)).to.equal(
//         ethers.formatEther(ownerBalance)
//       );
//     });
//   });

// describe("Transacciones", () => {
//   it("Cuenta de Origen tiene un balance de 1.000.000", async () => {
//     const totalSupply = await TOKEN.balanceOf(OWNER);
//     expect(totalSupply).to.equal(ethers.parseEther(montSuplay.toString()));
//   });
//   it("Cuenta2 tiene un balance de 0", async () => {
//     const totalSupply = await TOKEN.balanceOf(Cuenta1);
//     expect(totalSupply).to.equal(ethers.parseEther("0"));
//   });
//   it(`transfer de Cuenta Origen ${lockedAmount} a Cuenta1`, async () => {
//     await TOKEN.transfer(
//       Cuenta1,
//       ethers.parseEther("1000"),
//       JSON.stringify({ message: "test" })
//     );
//     const totalSupply = await TOKEN.balanceOf(Cuenta1);
//     expect(totalSupply).to.equal(ethers.parseEther("1000"));
//   });
//   it("decremento de 1000 a la cuenta Owner", async () => {
//     const totalSupply = await TOKEN.balanceOf(OWNER);
//     expect(totalSupply).to.equal(
//       ethers.parseEther(`${montSuplay - lockedAmount}`)
//     );
//   });
//   it(`Saldo de cuenta2 es de ${lockedAmount}`, async () => {
//     const totalSupply = await TOKEN.balanceOf(Cuenta1);
//     expect(totalSupply).to.equal(ethers.parseEther(`${lockedAmount}`));
//   });

//   it("Cuenta Owner puede enviar token de la Cuenta1 a la Cuenta 2", async () => {
//     await TOKEN.connect(OWNER as any).transferFrom(
//       Cuenta1,
//       Cuenta2,
//       ethers.parseEther("100"),
//       JSON.stringify({ message: "test" })
//     );
//     const totalSupply = await TOKEN.balanceOf(Cuenta2);
//     console.log("TCL: totalSupply", totalSupply);
//     expect(totalSupply).to.equal(ethers.parseEther("100"));
//   });
// });
//});
