// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "./consolelog.sol";

contract OsdToken {
    address public walletAdmin;
    string public constant name = "OSDTOKEN";
    string public constant symbol = "OSD";
    uint8 public constant decimals = 18;
    uint256 public totalSupply = 1000000 * 10 ** 18; // 1 Million de Tokens
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
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowed;

    constructor() {
        balanceOf[msg.sender] = totalSupply / 2;
        balanceOf[address(this)] = totalSupply / 2;
        walletAdmin = msg.sender;
        // console.log(msg.sender);
    }

    modifier onlyOwner() {
        require(
            msg.sender == walletAdmin,
            "Solo el propietario puede realizar esta accion"
        );
        _;
    }

    /*
     * Metodo para la transferencia de tokens de un address a otro
     * @param to address que recibe
     * @param amount cantidad de tokens
     * @param data informacion
     * @returns bool
     */
    function transfer(
        address to,
        uint256 amount,
        string memory data
    ) public returns (bool success) {
        require(balanceOf[msg.sender] >= amount);
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        emit Transfer(msg.sender, to, amount, data);
        return true;
    }

    /*
     * Metodo para la aprobacion de un operador
     * @param from address que envia
     * @param to address que recibe
     * @param amount cantidad de tokens
     * @returns bool
     * exemple: Owner(20 token) -> Approve(10 token)
     */

    function transferFrom(
        address from, // billetera que envia
        address to, // biiletera que recibe
        uint256 amount, // cantiad de tokens
        string memory data // informacion
    ) public returns (bool success) {
        require(amount <= balanceOf[from], "OsdToken: saldo bajo cero");
        require(
            amount <= allowed[msg.sender][from],
            "OsdToken: no tienes permiso para enviar estos token"
        );
        allowed[msg.sender][from] -= amount; // decrementar el saldo permitido
        return emitPaymentSend(from, to, amount, data);
    }

    function emitPaymentSend(
        address from,
        address to,
        uint256 amount,
        string memory data
    ) private returns (bool) {
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
        emit Transfer(from, to, amount, data);
        return true;
    }

    /**
     * Metodo para la aprobacion de un operador
     */
    function approve(
        address spender,
        uint256 amount
    ) public returns (bool success) {
        allowed[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function getAdminContract() public view returns (address) {
        return walletAdmin;
    }

    function paySmartContract(address to) public onlyOwner {
        uint256 amount = 10 * 10 ** 18;
        transfer(to, amount, "payment");
    }

    //  * Metodo que entrega cada 2 horar 1 token a un address
    //     teniendo en cuenta el tiempo y un arreglo de fechas
    //  */
    // function paymentSetTokenTime() public {
    //     uint256 time = block.timestamp;
    //     if (time % 86400 == 0) {
    //         for (uint256 i = 0; i < 10; i++) {
    //             if (time % (86400 * (i + 1)) == 0) {
    //                 uint256 amount = 10 * 10 ** 18;
    //                 transfer(walletAdmin, amount, "payment");
    //             }
    //         }
    //     }
    // }
}
