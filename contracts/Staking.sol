// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Staking is ReentrancyGuard {
    IERC20 public stakingToken;
    uint public constant DAILY_REWARD_RATE = 1; 
    uint public totalStakedTokens;

    mapping(address => uint) public stakedBalance;
    mapping(address => uint) public rewards;
    mapping(address => uint) public lastStakedTime;

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 reward);

    constructor(address _stakingToken) {
        stakingToken = IERC20(_stakingToken);
    }

    function stake(uint256 amount) external nonReentrant {
        require(amount > 0, "Cannot stake zero tokens");

        // Update user's rewards
        _updateReward(msg.sender);

        stakedBalance[msg.sender] += amount;
        totalStakedTokens += amount;
        lastStakedTime[msg.sender] = block.timestamp;

        emit Staked(msg.sender, amount);

        bool success = stakingToken.transferFrom(msg.sender, address(this), amount);
        require(success, "Token transfer failed");
    }

    function unstake(uint256 amount) external nonReentrant {
        require(amount > 0, "Cannot unstake zero tokens");
        require(stakedBalance[msg.sender] >= amount, "Insufficient staked balance");

        // Update user's rewards
        _updateReward(msg.sender);

        stakedBalance[msg.sender] -= amount;
        totalStakedTokens -= amount;

        emit Unstaked(msg.sender, amount);

        bool success = stakingToken.transfer(msg.sender, amount);
        require(success, "Token transfer failed");
    }

    function claimRewards() external nonReentrant {
        _updateReward(msg.sender);

        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No rewards to claim");

        rewards[msg.sender] = 0;

        emit RewardClaimed(msg.sender, reward);

        bool success = stakingToken.transfer(msg.sender, reward);
        require(success, "Token transfer failed");
    }

    function _updateReward(address account) internal {
        uint256 reward = _calculateReward(account);
        rewards[account] += reward;
        lastStakedTime[account] = block.timestamp;
    }

    function _calculateReward(address account) internal view returns (uint256) {
        if (stakedBalance[account] == 0 || lastStakedTime[account] == 0) {
            return 0;
        }
        uint256 timeElapsed = block.timestamp - lastStakedTime[account];
        uint256 dailyReward = (stakedBalance[account] * DAILY_REWARD_RATE) / 100;
        return (dailyReward * timeElapsed) / 1 days;
    }
}
