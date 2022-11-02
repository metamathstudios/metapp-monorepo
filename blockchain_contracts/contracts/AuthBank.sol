// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AuthBank {
    using Counters for Counters.Counter;

    struct Auth {
        address tokenAddress;
        uint256 tokenId;
        uint256 expiration;
        bool isAuth;
    }

    event AuthCreated(
        address indexed tokenAddress,
        uint256 indexed tokenId,
        address indexed tokenOwner
    );

    event AuthRevoked(
        address indexed tokenAddress,
        uint256 indexed tokenId,
        address indexed tokenOwner
    );

    mapping(address => mapping(uint256 => Auth)) public auths;
    mapping(address => Counters.Counter) private _authCounters;

    function userAuthCount(address user) public view returns (uint256) {
        return _authCounters[user].current();
    }

    function createAuth(address tokenAddress, uint256 tokenId, uint256 expiration) external {
        require(
            IERC721(tokenAddress).ownerOf(tokenId) == msg.sender,
            "AuthBank: Not owner of token"
        );

        _authCounters[msg.sender].increment();

        Auth memory _newAuth = Auth({
            tokenAddress: tokenAddress,
            tokenId: tokenId,
            expiration: expiration,
            isAuth: true
        });

        auths[msg.sender][_authCounters[msg.sender].current()] = _newAuth;
        emit AuthCreated(tokenAddress, tokenId, msg.sender);
    }

    function revokeAuth(address tokenAddress, uint256 tokenId) external {
        require(
            getTokenAuthIndex(msg.sender, tokenAddress, tokenId) != 0,
            "AuthBank: No Auth found for this token"
        );

        uint256 authIndex = getTokenAuthIndex(msg.sender, tokenAddress, tokenId);

        auths[msg.sender][authIndex].isAuth = false;
        emit AuthRevoked(tokenAddress, tokenId, msg.sender);
    }

    function getTokenAuthIndex(address authBearer, address tokenAddress, uint256 tokenId)
        public
        view
        returns (uint256)
    {
        for (uint256 i = 1; i <= _authCounters[authBearer].current(); i++) {
            if (
                auths[authBearer][i].tokenAddress == tokenAddress &&
                auths[authBearer][i].tokenId == tokenId &&
                auths[authBearer][i].isAuth == true
            ) {
                return i;
            }
        }
        return 0;
    }

    function currentTime() private view returns (uint256) {
        return block.timestamp;
    }
}
