// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "./consolelog.sol";
import "./OsdToken.sol";

contract TokenFarm {
    struct IStaking {
        uint256 amount;
        uint256 creationTime;
    }
    string public name = "OsdTokenFarm";
    address public owner;
    OsdToken public osdToken;
    address[] public stakers;
    mapping(address => uint256) public stakingBalances;
    mapping(address => bool) public hasStaking;
    mapping(address => IStaking) public isStaking;

    constructor(OsdToken _osdToken) {
        osdToken = _osdToken;
        owner = msg.sender;
        _osdToken.updateOwner(address(this));
    }

    function stake(uint256 _amount) public {
        require(
            osdToken.balanceOf(msg.sender) >= _amount,
            "You don't have enough tokens to stake."
        );
        require(!hasStaking[msg.sender], "You have already staked tokens.");
        osdToken.transferFrom(msg.sender, address(this), _amount, "staking");
        IStaking storage newStaking = isStaking[msg.sender];
        newStaking.amount = _amount;
        newStaking.creationTime = block.timestamp;

        stakingBalances[msg.sender] += _amount;
        stakers.push(msg.sender);
        hasStaking[msg.sender] = true;
    }

    function unstake(uint256 _amount) public {
        require(hasStaking[msg.sender], "You have not staked any tokens.");
        require(
            stakingBalances[msg.sender] >= _amount,
            "You don't have enough staked tokens to unstake."
        );

        IStaking storage staking = isStaking[msg.sender];
        require(
            staking.amount >= _amount,
            "You can't unstake more tokens than you have staked."
        );

        stakingBalances[msg.sender] -= _amount;
        staking.amount -= _amount;

        osdToken.transfer(msg.sender, _amount, "unstaking");

        if (staking.amount == 0) {
            delete hasStaking[msg.sender];
            delete isStaking[msg.sender];
            for (uint256 i = 0; i < stakers.length; i++) {
                if (stakers[i] == msg.sender) {
                    for (uint256 j = i; j < stakers.length - 1; j++) {
                        stakers[j] = stakers[j + 1];
                    }
                    break;
                }
            }
        }
    }
}
