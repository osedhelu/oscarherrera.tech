 export const deoslvABIS = {
  "target": "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",
  "interface": {
    "fragments": [
      {
        "type": "constructor",
        "inputs": [],
        "payable": false,
        "gas": null
      },
      {
        "type": "event",
        "inputs": [
          {
            "name": "owner",
            "type": "address",
            "baseType": "address",
            "indexed": true,
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "spender",
            "type": "address",
            "baseType": "address",
            "indexed": true,
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "amount",
            "type": "uint256",
            "baseType": "uint256",
            "indexed": false,
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "name": "Approval",
        "anonymous": false
      },
      {
        "type": "event",
        "inputs": [
          {
            "name": "from",
            "type": "address",
            "baseType": "address",
            "indexed": true,
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "to",
            "type": "address",
            "baseType": "address",
            "indexed": true,
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "amount",
            "type": "uint256",
            "baseType": "uint256",
            "indexed": false,
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "data",
            "type": "string",
            "baseType": "string",
            "indexed": false,
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "name": "Transfer",
        "anonymous": false
      },
      {
        "type": "function",
        "inputs": [
          {
            "name": "",
            "type": "address",
            "baseType": "address",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "",
            "type": "address",
            "baseType": "address",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "name": "allowed",
        "constant": true,
        "outputs": [
          {
            "name": "",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "stateMutability": "view",
        "payable": false,
        "gas": null
      },
      {
        "type": "function",
        "inputs": [
          {
            "name": "spender",
            "type": "address",
            "baseType": "address",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "amount",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "name": "approve",
        "constant": false,
        "outputs": [
          {
            "name": "success",
            "type": "bool",
            "baseType": "bool",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "stateMutability": "nonpayable",
        "payable": false,
        "gas": null
      },
      {
        "type": "function",
        "inputs": [
          {
            "name": "",
            "type": "address",
            "baseType": "address",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "name": "balanceOf",
        "constant": true,
        "outputs": [
          {
            "name": "",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "stateMutability": "view",
        "payable": false,
        "gas": null
      },
      {
        "type": "function",
        "inputs": [],
        "name": "decimals",
        "constant": true,
        "outputs": [
          {
            "name": "",
            "type": "uint8",
            "baseType": "uint8",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "stateMutability": "view",
        "payable": false,
        "gas": null
      },
      {
        "type": "function",
        "inputs": [],
        "name": "getAdminContract",
        "constant": true,
        "outputs": [
          {
            "name": "",
            "type": "address",
            "baseType": "address",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "stateMutability": "view",
        "payable": false,
        "gas": null
      },
      {
        "type": "function",
        "inputs": [],
        "name": "name",
        "constant": true,
        "outputs": [
          {
            "name": "",
            "type": "string",
            "baseType": "string",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "stateMutability": "view",
        "payable": false,
        "gas": null
      },
      {
        "type": "function",
        "inputs": [
          {
            "name": "to",
            "type": "address",
            "baseType": "address",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "amount",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "name": "paySmartContract",
        "constant": false,
        "outputs": [
          {
            "name": "",
            "type": "bool",
            "baseType": "bool",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "stateMutability": "nonpayable",
        "payable": false,
        "gas": null
      },
      {
        "type": "function",
        "inputs": [],
        "name": "symbol",
        "constant": true,
        "outputs": [
          {
            "name": "",
            "type": "string",
            "baseType": "string",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "stateMutability": "view",
        "payable": false,
        "gas": null
      },
      {
        "type": "function",
        "inputs": [],
        "name": "totalSupply",
        "constant": true,
        "outputs": [
          {
            "name": "",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "stateMutability": "view",
        "payable": false,
        "gas": null
      },
      {
        "type": "function",
        "inputs": [
          {
            "name": "to",
            "type": "address",
            "baseType": "address",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "amount",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "data",
            "type": "string",
            "baseType": "string",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "name": "transfer",
        "constant": false,
        "outputs": [
          {
            "name": "success",
            "type": "bool",
            "baseType": "bool",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "stateMutability": "nonpayable",
        "payable": false,
        "gas": null
      },
      {
        "type": "function",
        "inputs": [
          {
            "name": "from",
            "type": "address",
            "baseType": "address",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "to",
            "type": "address",
            "baseType": "address",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "amount",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "data",
            "type": "string",
            "baseType": "string",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "name": "transferFrom",
        "constant": false,
        "outputs": [
          {
            "name": "success",
            "type": "bool",
            "baseType": "bool",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "stateMutability": "nonpayable",
        "payable": false,
        "gas": null
      },
      {
        "type": "function",
        "inputs": [
          {
            "name": "newOwner",
            "type": "address",
            "baseType": "address",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "name": "updateOwner",
        "constant": false,
        "outputs": [],
        "stateMutability": "nonpayable",
        "payable": false,
        "gas": null
      },
      {
        "type": "function",
        "inputs": [],
        "name": "walletAdmin",
        "constant": true,
        "outputs": [
          {
            "name": "",
            "type": "address",
            "baseType": "address",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "stateMutability": "view",
        "payable": false,
        "gas": null
      }
    ],
    "deploy": {
      "type": "constructor",
      "inputs": [],
      "payable": false,
      "gas": null
    },
    "fallback": null,
    "receive": false
  },
  "runner": "<SignerWithAddress 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266>",
  "filters": {},
  "fallback": null
}
    