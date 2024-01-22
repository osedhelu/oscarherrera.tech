import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { OsdToken } from "../typechain-types";
async function deployOneYearLockFixture() {
  const [owner, account1, account2, account3] = await ethers.getSigners();
  const Token = await ethers.getContractFactory("OsdToken");
  const token = await Token.connect(owner).deploy();
  return { token, owner, account1, account2, account3 };
}
function formatAsUSD(amount: number): string {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}
describe("Test Smart Contract OSDToken", () => {
  it("Crear Smart contract", async () => {
    const montSuplay = 1000000;
    const lockedAmount = 1000;
    const { token, owner, account1, account2, account3 } = await loadFixture(
      deployOneYearLockFixture
    );

    describe("Transacciones", () => {
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

      it("cuenta1 autoriza que el owner pueda mover 100 ", async () => {
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
      it("usar metodo: PaySmartContract, el smart contract pagara 10 de Cuenta 3", async () => {
        await token.connect(owner).paySmartContract(account3);
        const amountCuenta3 = await token.balanceOf(account3.address);
        expect(amountCuenta3).to.equal(ethers.parseEther("10"));
      });
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

//   // describe("Transacciones", () => {
//   //   it("Cuenta de Origen tiene un balance de 1.000.000", async () => {
//   //     const totalSupply = await TOKEN.balanceOf(OWNER);
//   //     expect(totalSupply).to.equal(ethers.parseEther(montSuplay.toString()));
//   //   });
//   //   it("Cuenta2 tiene un balance de 0", async () => {
//   //     const totalSupply = await TOKEN.balanceOf(Cuenta1);
//   //     expect(totalSupply).to.equal(ethers.parseEther("0"));
//   //   });
//   //   it(`transfer de Cuenta Origen ${lockedAmount} a Cuenta1`, async () => {
//   //     await TOKEN.transfer(
//   //       Cuenta1,
//   //       ethers.parseEther("1000"),
//   //       JSON.stringify({ message: "test" })
//   //     );
//   //     const totalSupply = await TOKEN.balanceOf(Cuenta1);
//   //     expect(totalSupply).to.equal(ethers.parseEther("1000"));
//   //   });
//   //   it("decremento de 1000 a la cuenta Owner", async () => {
//   //     const totalSupply = await TOKEN.balanceOf(OWNER);
//   //     expect(totalSupply).to.equal(
//   //       ethers.parseEther(`${montSuplay - lockedAmount}`)
//   //     );
//   //   });
//   //   it(`Saldo de cuenta2 es de ${lockedAmount}`, async () => {
//   //     const totalSupply = await TOKEN.balanceOf(Cuenta1);
//   //     expect(totalSupply).to.equal(ethers.parseEther(`${lockedAmount}`));
//   //   });
//   //   it("Error de transferFrom: no tienes permiso para enviar estos token", async () => {
//   //     try {
//   //       await TOKEN.transferFrom(
//   //         Cuenta1,
//   //         Cuenta2,
//   //         ethers.parseEther("100"),
//   //         JSON.stringify({ message: "test" })
//   //       );
//   //     } catch ({ message }: any) {
//   //       console.log("TCL: message", message);
//   //       expect(message).to.include(
//   //         "OsdToken: no tienes permiso para enviar estos token"
//   //       );
//   //     }
//   //   });
//   //   it("Cuenta Owner puede enviar token de la Cuenta1 a la Cuenta 2", async () => {
//   //     await TOKEN.connect(OWNER as any).transferFrom(
//   //       Cuenta1,
//   //       Cuenta2,
//   //       ethers.parseEther("100"),
//   //       JSON.stringify({ message: "test" })
//   //     );
//   //     const totalSupply = await TOKEN.balanceOf(Cuenta2);
//   //     console.log("TCL: totalSupply", totalSupply);
//   //     expect(totalSupply).to.equal(ethers.parseEther("100"));
//   //   });
//   // });
// });
