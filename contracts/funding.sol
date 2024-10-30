// SPDX-License-Identifier: MIT
pragma solidity >0.7.0 <=0.9.0;

contract CrowdFunding {
    // State Variable
    string public FundTitle = "Campaign Test";
    uint256 public ReqFundAmount;
    string public FundImage;
    string public FundStory;
    address payable public OwnerAddress;
    uint256 public TotalRecivedAmount;

    // Solidity Events
    event Donated(
        address indexed donor,
        uint256 indexed amount,
        uint256 indexed timestamp
    );

    constructor(
        string memory _FundTitle,
        uint256 _ReqFundAmount,
        string memory _FundImage,
        string memory _FundStory
    ) {
        FundTitle = _FundTitle;
        ReqFundAmount = _ReqFundAmount;
        FundImage = _FundImage;
        FundStory = _FundStory;
        OwnerAddress = payable(msg.sender);
    }

    // Donate Amount function

    function DonateAmount() public payable {
        require(
            ReqFundAmount > TotalRecivedAmount,
            "Required Amount is fullfilled"
        );
        OwnerAddress.transfer(msg.value);
        TotalRecivedAmount += msg.value;
        emit Donated(msg.sender, msg.value, block.timestamp);
    }
}

contract CrowdFundingAllData {
    address[] public deployedFundings;

    event fundingDatas(
        string title,
        uint256 reqiredAmount,
        address indexed Owner,
        address FundingAddress,
        string ImageUri,
        uint256 indexed timestamp,
        string indexed cateogory
    );

    function createFunding(
        string memory createFundingTitle,
        uint256 requiredFuncdingAmount,
        string memory ImageUri,
        string memory Cateogory,
        string memory StoryUri
    ) public {
        CrowdFunding newCrowdFunding = new CrowdFunding(
            createFundingTitle,
            requiredFuncdingAmount,
            ImageUri,
            StoryUri
        );
        deployedFundings.push(address(newCrowdFunding));

        emit fundingDatas(
            createFundingTitle,
            requiredFuncdingAmount,
            msg.sender,
            address(newCrowdFunding),
            ImageUri,
            block.timestamp,
            Cateogory
        );
    }
}
