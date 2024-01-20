// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract OsdToken {
    string public constant name = "OSDTOKEN";
    string public constant symbol = "OSD";
    uint8 public constant decimals = 18;
    uint256 public totalSupply = 100000000000000000000000000; // 1 Million de Tokens
    /* Eventos para la transferencia de tokens de un address a otro
    from : address que envia
    to : address que recibe
    amount : cantidad de tokens transferidos
    data : informacion adicional */
    event Transfer(
        address indexed from,
        address indexed to,
        uint amount,
        string data
    );

    /* Evento para la aprobacion de un operador
    owner : address que envia el token
    spender : address que tiene el token
    amount : cantidad de tokens
    */
    event Approval(address indexed owner, address indexed spender, uint amount);
    // Estructuras de datos
    // mapping es una estructura de datos que mapea una clave a un valor
    //
    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowed;

    constructor() {
        balances[msg.sender] = totalSupply;
    }
}
