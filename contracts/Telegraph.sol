// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./lzApp/NonblockingLzApp.sol";

contract Telegraph is NonblockingLzApp {
    event MessageSent(address sender, string message);
    event MessageReceived(address sender, string message);

    modifier isPause {
        require(!pause, "Contract is paused");
        _;
    }

    bool public pause = false;
    address public ownerTelegraph;

    constructor(address _lzEndpoint) NonblockingLzApp(_lzEndpoint) {
        ownerTelegraph = msg.sender;
        pause = true;
    }

    function sendATelegraph(uint16 _dstChainId, string memory _message) public payable isPause {
        bytes memory payload = abi.encode(
            msg.sender,
            _message
        );

        // We estimage the fee first to avoid an error after and be sure the message will be send
        (uint256 messageFee,) = lzEndpoint.estimateFees(
            _dstChainId,
            address(this),
            payload,
            false,
            bytes("")
        );
        require(msg.value >= messageFee, "No enough funds to send the message");


        // We send the message
        _lzSend(
            _dstChainId,
            payload,
            payable(msg.sender),
            address(0x0),
            bytes(""),
            msg.value
        );

        emit MessageSent(msg.sender, _message);
    }

    function _nonblockingLzReceive(uint16, bytes memory, uint64, bytes memory _payload) internal override {
        (address sender, string memory message) = abi.decode(_payload, (address, string));

        emit MessageReceived(sender, message);
    }


    function changePauseStatus() public onlyOwner {
        pause = !pause;
    }
}
