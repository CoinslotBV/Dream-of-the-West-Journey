var global_Second = 30
window.xyj = {}
// test
var contractAddr = '0x07229c22297b443e8b10cf29eaf4a10969aea0a9'
// online
// var contractAddr = '0x623dbcb14e4f6f9d74fe987a6c0718467722062c'
// online 24
// var contractAddr = '0x4e71b5e47a7e4f8eaccff4ade0e3292f80780cf0'

// 3d
// var contractAddr = '0xA62142888ABa8370742bE823c1782D17A0389Da1'
var contractAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "getBuyPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_affCode",
                "type": "bytes32"
            },
            {
                "name": "_team",
                "type": "uint256"
            },
            {
                "name": "_eth",
                "type": "uint256"
            }
        ],
        "name": "reLoadXname",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "activate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "pIDxAddr_",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "airDropTracker_",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "round_",
        "outputs": [
            {
                "name": "plyr",
                "type": "uint256"
            },
            {
                "name": "team",
                "type": "uint256"
            },
            {
                "name": "end",
                "type": "uint256"
            },
            {
                "name": "ended",
                "type": "bool"
            },
            {
                "name": "strt",
                "type": "uint256"
            },
            {
                "name": "keys",
                "type": "uint256"
            },
            {
                "name": "eth",
                "type": "uint256"
            },
            {
                "name": "pot",
                "type": "uint256"
            },
            {
                "name": "mask",
                "type": "uint256"
            },
            {
                "name": "ico",
                "type": "uint256"
            },
            {
                "name": "icoGen",
                "type": "uint256"
            },
            {
                "name": "icoAvg",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "plyrNames_",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "fees_",
        "outputs": [
            {
                "name": "gen",
                "type": "uint256"
            },
            {
                "name": "p3d",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "pIDxName_",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_affCode",
                "type": "uint256"
            },
            {
                "name": "_team",
                "type": "uint256"
            },
            {
                "name": "_eth",
                "type": "uint256"
            }
        ],
        "name": "reLoadXid",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_nameString",
                "type": "string"
            },
            {
                "name": "_affCode",
                "type": "address"
            },
            {
                "name": "_all",
                "type": "bool"
            }
        ],
        "name": "registerNameXaddr",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_pID",
                "type": "uint256"
            },
            {
                "name": "_addr",
                "type": "address"
            },
            {
                "name": "_name",
                "type": "bytes32"
            },
            {
                "name": "_laff",
                "type": "uint256"
            }
        ],
        "name": "receivePlayerInfo",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "rndTmEth_",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "rID_",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_pID",
                "type": "uint256"
            }
        ],
        "name": "getPlayerVaults",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_nameString",
                "type": "string"
            },
            {
                "name": "_affCode",
                "type": "bytes32"
            },
            {
                "name": "_all",
                "type": "bool"
            }
        ],
        "name": "registerNameXname",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getCurrentRoundInfo",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_affCode",
                "type": "address"
            },
            {
                "name": "_team",
                "type": "uint256"
            },
            {
                "name": "_eth",
                "type": "uint256"
            }
        ],
        "name": "reLoadXaddr",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_affCode",
                "type": "uint256"
            },
            {
                "name": "_team",
                "type": "uint256"
            }
        ],
        "name": "buyXid",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_pID",
                "type": "uint256"
            },
            {
                "name": "_name",
                "type": "bytes32"
            }
        ],
        "name": "receivePlayerNameList",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_nameString",
                "type": "string"
            },
            {
                "name": "_affCode",
                "type": "uint256"
            },
            {
                "name": "_all",
                "type": "bool"
            }
        ],
        "name": "registerNameXID",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_affCode",
                "type": "address"
            },
            {
                "name": "_team",
                "type": "uint256"
            }
        ],
        "name": "buyXaddr",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "plyrRnds_",
        "outputs": [
            {
                "name": "eth",
                "type": "uint256"
            },
            {
                "name": "keys",
                "type": "uint256"
            },
            {
                "name": "mask",
                "type": "uint256"
            },
            {
                "name": "ico",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_affCode",
                "type": "bytes32"
            },
            {
                "name": "_team",
                "type": "uint256"
            }
        ],
        "name": "buyXname",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "potSplit_",
        "outputs": [
            {
                "name": "gen",
                "type": "uint256"
            },
            {
                "name": "p3d",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getTimeLeft",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_rID",
                "type": "uint256"
            },
            {
                "name": "_eth",
                "type": "uint256"
            }
        ],
        "name": "calcKeysReceived",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_keys",
                "type": "uint256"
            }
        ],
        "name": "iWantXKeys",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "activated_",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "airDropPot_",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "plyr_",
        "outputs": [
            {
                "name": "addr",
                "type": "address"
            },
            {
                "name": "name",
                "type": "bytes32"
            },
            {
                "name": "win",
                "type": "uint256"
            },
            {
                "name": "gen",
                "type": "uint256"
            },
            {
                "name": "aff",
                "type": "uint256"
            },
            {
                "name": "lrnd",
                "type": "uint256"
            },
            {
                "name": "laff",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "getPlayerInfoByAddress",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "playerID",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "playerAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "playerName",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "isNewPlayer",
                "type": "bool"
            },
            {
                "indexed": false,
                "name": "affiliateID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "affiliateAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "affiliateName",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "amountPaid",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timeStamp",
                "type": "uint256"
            }
        ],
        "name": "onNewName",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "compressedData",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "compressedIDs",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "playerName",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "playerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ethIn",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "keysBought",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "winnerAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "winnerName",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "amountWon",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "newPot",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "P3DAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "genAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "potAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "airDropPot",
                "type": "uint256"
            }
        ],
        "name": "onEndTx",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "playerID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "playerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "playerName",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "ethOut",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timeStamp",
                "type": "uint256"
            }
        ],
        "name": "onWithdraw",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "playerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "playerName",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "ethOut",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "compressedData",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "compressedIDs",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "winnerAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "winnerName",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "amountWon",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "newPot",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "P3DAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "genAmount",
                "type": "uint256"
            }
        ],
        "name": "onWithdrawAndDistribute",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "playerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "playerName",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "ethIn",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "compressedData",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "compressedIDs",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "winnerAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "winnerName",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "amountWon",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "newPot",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "P3DAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "genAmount",
                "type": "uint256"
            }
        ],
        "name": "onBuyAndDistribute",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "playerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "playerName",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "compressedData",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "compressedIDs",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "winnerAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "winnerName",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "amountWon",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "newPot",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "P3DAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "genAmount",
                "type": "uint256"
            }
        ],
        "name": "onReLoadAndDistribute",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "affiliateID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "affiliateAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "affiliateName",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "roundID",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "buyerID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timeStamp",
                "type": "uint256"
            }
        ],
        "name": "onAffiliatePayout",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "roundID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "amountAddedToPot",
                "type": "uint256"
            }
        ],
        "name": "onPotSwapDeposit",
        "type": "event"
    }
]

if (typeof web3 === "undefined") {
    // web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/WlvljmHqo75RhK1w1QJF"));
    web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/WlvljmHqo75RhK1w1QJF"));
    // alertify.alert('You are not signed into metamask')
}

// 通过abi 和地址获取已部署的合约对象
var contractNet = web3.eth.contract(contractAbi).at(contractAddr)

console.log(contractNet);
// activate  一旦部署合约  就停用
// airDropPot_ 空头相关
// airDropTracker_  用于制胜空头
// calcKeysReceived  计算当前的钱能得到多少keys
// getPlayerVaults  通过id 查询数额  winnings  general affiliate
// iWantXKeys  通过keys 计算多少钱

xyj.getAccounts = function (fn) {
    /* 获取当前账号地址 */
    if (typeof fn !== "function") {
        return 'need async function !.'
    }
    web3.eth.getAccounts(function (err, res) {
        if (!err) {
            if (res) {
                fn(null, res.toString())
            } else {
                fn(err, null)
            }
        } else {
            fn('getAccounts err', null)
        }
    })
}
xyj.getGasPrice = function (fn) {
    /* 获取当前gasPrice */
    if (typeof fn !== "function") {
        return 'need async function !.'
    }
    web3.eth.getGasPrice(function (err, res) {
        if (!err) {
            if (res) {
                fn(null, res.toNumber(10))
            } else {
                fn(err, null)
            }
        } else {
            fn(new Error('getGasPrice error'), null)
        }
    })
}
/* 获取合约相关数据 */

xyj.getTimeLeft = function (fn) {
    /* 倒计时的时间 */
    if (typeof fn !== "function") {
        return 'need async function !.'
    }
    if (contractNet) {
        contractNet.getTimeLeft(function (err, res) {
            if (!err) {
                if (res) {
                    fn(null, res.toNumber(10))
                }
            } else {
                fn(err, null)
            }
        })
    } else {
        fn('contractNet error at getTimeLeft', null)
    }
}
xyj.getPlayerInfoByAddress = function (addr, fn) {
    /* 倒计时的时间 */
    if (typeof addr !== "string") {
        return 'need string addr !.'
    }
    if (typeof fn !== "function") {
        return 'need async function !.'
    }
    if (contractNet) {
        contractNet.getPlayerInfoByAddress(addr, function (err, res) {
            if (!err) {
                if (res) {
                    // * @return player ID 0
                    // * @return player name  1
                    // * @return keys owned (current round)  2
                    // * @return winnings vault  3
                    // * @return general vault  4
                    // * @return affiliate vault  5
                    // * @return player round eth  6
                    fn(null, {
                        id: res[0].toString(),
                        inviteName: web3.toUtf8(res[1]),
                        keys: Math.ceil((res[2].toNumber()) / Math.pow(10, 18)),
                        earn: web3.fromWei(res[4].toNumber()),
                        totalEarn: web3.fromWei(res[5].toNumber() + res[3].toNumber() + res[4].toNumber()),
                        shareEarn: web3.fromWei(res[5].toNumber()),
                        payMoney: web3.fromWei(res[6].toNumber()),
                        winningValue_3: web3.fromWei(res[3].toNumber()),
                        winningValue_4: web3.fromWei(res[4].toNumber()),
                    })
                }
            } else {
                fn('getPlayerInfoByAddress error', null)
            }
        })
    } else {
        fn('contractNet error at getPlayerInfoByAddress', null)
    }
}
xyj.getCurrentRoundInfo = function (fn) {
    /* 当前信息 */
    if (typeof fn !== "function") {
        return 'need async function !.'
    }
    // * @return eth invested during ICO phase 0
    // * @return round id 1
    // * @return total keys for round2
    // * @return time round ends 3
    // * @return time round started4
    // * @return current pot  5

    // * @return current team ID & player ID in lead 7
    // * @return current player in leads address8
    // * @return current player in leads name9

    // * @return whales eth in for round10
    // * @return bears eth in for round 11
    // * @return sneks eth in for round  12
    // * @return bulls eth in for round 13

    // * @return airdrop tracker # & airdrop pot
    if (contractNet) {
        contractNet.getCurrentRoundInfo(function (err, res) {
            // 0 = whales
            // 1 = bears
            // 2 = sneks
            // 3 = bulls
            if (!err) {
                if (res) {
                    fn(null, {
                        roundNum: res[1].toNumber(),
                        totalKey: Math.ceil((res[2].toNumber()) / Math.pow(10, 18)),
                        currPot: web3.fromWei(res[5].toNumber()),
                        startedTime: res[4].toNumber(),
                        endedTime: res[3].toNumber(),

                        whales_0: web3.fromWei(res[9].toNumber()),
                        bears_1: web3.fromWei(res[10].toNumber()),
                        sneks_2: web3.fromWei(res[11].toNumber()),
                        bulls_3: web3.fromWei(res[12].toNumber()),

                        purchasedSeconds: (Math.ceil((res[2].toNumber()) / Math.pow(10, 18)) * global_Second),
                        purchasedTime: (Math.ceil((res[2].toNumber()) / Math.pow(10, 18)) * global_Second) / (3600 * 24 * 365),

                        lastBuyAddr: res[7].toString(),
                        lastBuyName: web3.toUtf8(res[8])
                    })
                }
            } else {
                fn('getCurrentRoundInfo error', null)
            }
        })
    } else {
        fn('contractNet error at getCurrentRoundInfo', null)
    }
}
xyj.getBuyPrice = function (fn) {
    /* key 的value */
    if (typeof fn !== "function") {
        return 'need async function !.'
    }
    contractNet.getBuyPrice(function (err, res) {
        if (!err) {
            if (res) {
                var web3_getBuyPrice = res.toNumber(10)
                fn(null, web3_getBuyPrice / Math.pow(10, 18))
            }
        } else {
            fn('getBuyPrice error', null)
        }
    })
}
xyj.iWantXKeys = function (keyNum, fn) {
    if (typeof keyNum !== 'number') {
        return 'keyNum need number'
    }
    if (contractNet) {
        contractNet.iWantXKeys(web3.toWei(parseFloat(keyNum)), function (err, res) {
            if (!err) {
                if (res) {
                    fn(null, web3.fromWei(res.toNumber()))
                }
            } else {
                fn(err, null)
            }
        })
    } else {
        fn('contractNet error at registerNameXaddr', null)
    }
}

xyj.withdraw = function (fn) {
    /* key 的value */
    if (typeof fn !== "function") {
        return 'need async function !.'
    }
    contractNet.withdraw(function (err, res) {
        if (!err) {
            if (res) {
                fn(null, true)
            }
        } else {
            fn('withdraw error', null)
        }
    })
}

xyj.registerNameXname = function (regName, _affCode, fn) {
    // * @param _nameString players desired name
    // * @param _affCode affiliate ID, address, or name of who referred you
    // * @param _all set to true if you want this to push your info to all games
    if (typeof regName !== "string") {
        return 'need string regName !.'
    }
    if (typeof _affCode !== "string") {
        return 'need string _affCode name !.'
    }
    if (typeof fn !== "function") {
        return 'need async function !.'
    }
    if (contractNet) {
        contractNet.registerNameXname(regName.toString(), _affCode, true, {value: web3.toWei('0.01', "ether")}, function (err, res) {
            if (!err) {
                if (res) {
                    fn(null, true)
                }
            } else {
                fn(err, null)
            }
        })
    } else {
        fn('contractNet error at registerNameXname', null)
    }
}
xyj.registerNameXaddr = function (regName, _affCode, fn) {
    if (typeof regName !== "string") {
        return 'need string regName !.'
    }
    if (typeof _affCode !== "string") {
        return 'need string _affCode addr !.'
    }
    if (typeof fn !== "function") {
        return 'need async function !.'
    }
    if (contractNet) {
        contractNet.registerNameXaddr(regName.toString(), _affCode, true, {value: web3.toWei('0.01', "ether")}, function (err, res) {
            if (!err) {
                if (res) {
                    fn(null, true)
                }
            } else {
                fn(err, null)
            }
        })
    } else {
        fn('contractNet error at registerNameXaddr', null)
    }
}
xyj.registerNameXID = function (regName, _affCode, fn) {
    if (typeof regName !== "string") {
        return 'need string regName !.'
    }
    if (typeof _affCode !== "number") {
        return 'need number _affCode id !.'
    }
    if (typeof fn !== "function") {
        return 'need async function !.'
    }
    if (contractNet) {
        contractNet.registerNameXID(regName.toString(), _affCode, true, {value: web3.toWei('0.01', "ether")}, function (err, res) {
            if (!err) {
                if (res) {
                    fn(null, true)
                }
            } else {
                fn(err, null)
            }
        })
    } else {
        fn('contractNet error at registerNameXname', null)
    }
}

xyj.getRound = function (fn) {
    if (contractNet) {
        this.getCurrentRoundInfo(function (error, result) {
            if (result) {
                contractNet.round_(parseFloat(result.roundNum), function (err, res) {
                    if (!err) {
                        if (res) {
                            var roundObj = null
                            if (res[6].toNumber() - res[7].toNumber() < 0) {
                                roundObj = {
                                    totalEth: web3.fromWei(res[6].toNumber()),
                                    distributionEth: 0,
                                    roundPot: web3.fromWei(res[7].toNumber())
                                }
                            } else {
                                roundObj = {
                                    totalEth: web3.fromWei(res[6].toNumber()),
                                    distributionEth: web3.fromWei(res[6].toNumber() - res[7].toNumber()),
                                    roundPot: web3.fromWei(res[7].toNumber())
                                }
                            }
                            fn(null, roundObj)
                        }
                    } else {
                        fn(err, null)
                    }
                })
            }
        })
    } else {
        fn('contractNet error at getRound', null)
    }
}

// round_
/* 实时播报 */
contractNet.allEvents(function (err, res) {
    // 4种事件类型
    /**
     * @dev prepares compression data and fires event for buy or reload tx's  onEndTx
     */
    //  onAffiliatePayout
    // (fomo3d long only) fired whenever a player tries a buy after round timer  onBuyAndDistribute
    // fired whenever a player registers a name   onNewName
    // received pot swap deposit  // onPotSwapDeposit
    // received pot swap deposit  // onPotSwapDeposit
    // fire buy and distribute event    onReLoadAndDistribute
    // fired whenever theres a withdraw   onWithdraw
    // fired whenever a withdraw forces end round to be ran  onWithdrawAndDistribute

    // "onWithdraw"  // "onNewName"  // "onAffiliatePayout"  // "onEndTx"
    // NewName 弹窗 A new member has been added to our Advisory Board. Please welcome jumpson2
    //onBuyAndDistribute

    if (!err) {
        if (res) {
            var name = ''
            if (res.args.playerName) {
                name = web3.toUtf8(res.args.playerName);
            }
            window.refreshTime();
            xyj._account && window.refreshPersonInfo();
            window.refreshInfo();
            if (res.event === 'onEndTx') {
                var keyNums = Math.ceil((res.args.keysBought.toNumber()) / Math.pow(10, 18));
                if (xyj._account === res.args.playerAddress) {
                    alertify.success(keyNums === 1 ? _('您已成功购买{0}个金钻', keyNums) : _('您已成功购买{0}个金钻 ', keyNums));
                } else if (name !== '') {
                    alertify.success(keyNums === 1 ? _('{0}已成功购买{1}个金钻', name, keyNums) : _('{0}已成功购买{1}个金钻 ', name, keyNums));
                } else if (name === '') {
                    alertify.success(keyNums === 1 ? _('有小伙伴已成功购买{0}个金钻', keyNums) : _('有小伙伴已成功购买{0}个金钻 ', keyNums));
                }
            } else if (res.event === 'onNewName') {
                // alertify.success('A new member has been added to our Advisory Board. Please welcome ' + web3.toUtf8(res.args.playerName));
                // alertify.success('全体起立，热烈欢迎' + web3.toUtf8(res.args.playerName) + '加入到我们推荐大队!');
                if (name === '') {
                    alertify.success(_('有小伙伴已成功购买专属的推广代号'));
                } else {
                    alertify.success(_('全体起立，欢迎{0}成功购买专属的推广代号', name));
                }
            } else if (res.event === 'onWithdraw' || res.event === 'onWithdrawAndDistribute') {
                // 提现
                var withdrawNum = window.formatNum6(web3.fromWei(res.args.ethOut.toNumber()))
                if (xyj._account === res.args.playerAddress) {
                    alertify.success(_('您已成功提现{0}ETH!', withdrawNum));
                } else if (name === '') {
                    alertify.success(_('有小伙伴已成功提现{0}ETH!', withdrawNum));
                } else {
                    alertify.success(name + _('已成功提现{0}ETH!', withdrawNum));
                }
                if (res.event === 'onWithdrawAndDistribute') {
                    setTimeout(function () {
                        alertify.success(_('请注意，新一轮的游戏准备开始'));
                    }, 1000);
                }
            } else if (res.event === 'onBuyAndDistribute') {
                if (xyj._account === res.args.playerAddress) {
                    alertify.alert(_('您已成功激活新一轮的游戏，激活游戏不会花费您的ETH，快来马上买钻取“金”吧'));
                } else {
                    alertify.success(_('请注意，新一轮的游戏准备开始'));
                }
            }
        }
    } else {
        console.error('allEvents' + error);
    }
})

xyj.buyXaddr = function (_affCode, _team, totalVal, fn) {
    /*
    *
        @param _affCode   the ID/address/name of the player who gets the affiliate fee
        @param _team what team is the player playing for?
    *
    * */
    if (typeof _affCode !== 'string') {
        fn('_affCode param 1 need Sting ( addr )', null)
        return '_affCode param 1 need Sting ( addr )'
    }
    if (typeof _team !== 'number') {
        fn('_team param 2 need number (0,1,2,3)', null)
        return '_team param 2 need number (0,1,2,3)'
    }
    if (typeof totalVal === 'string') {
        totalVal = parseFloat(totalVal)
    }
    if (!totalVal) {
        fn('totalVal param 3 error', null)
        return 'totalVal param 3 error'
    }
    contractNet.buyXaddr(_affCode, parseInt(_team), {value: web3.toWei(totalVal, "ether")}, function (err, res) {
        if (!err) {
            if (res) {
                fn(null, res)
            } else {
                fn('buyXaddr error', null)
            }
        } else {
            fn(err, null)
        }
    })
}
xyj.buyXname = function (_affCode, _team, totalVal, fn) {
    if (typeof _affCode !== 'string') {
        fn('_affCode param 1 need Sting ( addr )', null)
        return '_affCode param 1 need Sting ( addr )'
    }
    if (typeof _team !== 'number') {
        fn('_team param 2 need number (0,1,2,3)', null)
        return '_team param 2 need number (0,1,2,3)'
    }
    if (typeof totalVal === 'string') {
        totalVal = parseFloat(totalVal)
    }
    if (!totalVal) {
        fn('totalVal param 3 error', null)
        return 'totalVal param 3 error'
    }
    contractNet.buyXname(_affCode, parseInt(_team), {value: web3.toWei(totalVal, "ether")}, function (err, res) {
        if (!err) {
            if (res) {
                fn(null, res)
            } else {
                fn('buyXname error', null)
            }
        } else {
            fn(err, null)
        }
    })
}
xyj.buyXid = function (_affCode, _team, totalVal, fn) {
    if (typeof _affCode !== 'number') {
        fn('_affCode param 1 need number ( id )', null)
        return '_affCode param 1 need number ( id )'
    }
    if (typeof _team !== 'number') {
        fn('_team param 2 need number (0,1,2,3)', null)
        return '_team param 2 need number (0,1,2,3)'
    }
    if (typeof totalVal === 'string') {
        totalVal = parseFloat(totalVal)
    }
    if (!totalVal) {
        fn('totalVal param 3 error', null)
        return 'totalVal param 3 error'
    }
    contractNet.buyXid(_affCode, parseInt(_team), {value: web3.toWei(totalVal, "ether")}, function (err, res) {
        if (!err) {
            if (res) {
                fn(null, res)
            } else {
                fn('buyXid error', null)
            }
        } else {
            fn(err, null)
        }
    })
}

/* rebuy 用收益进行购买 */
xyj.reLoadXaddr = function (_affCode, _team, totalVal, fn) {
    if (typeof _affCode !== 'string') {
        fn('_affCode param 1 need Sting ( addr )', null)
        return '_affCode param 1 need Sting ( addr )'
    }
    if (typeof _team !== 'number') {
        fn('_team param 2 need number (0,1,2,3)', null)
        return '_team param 2 need number (0,1,2,3)'
    }
    if (typeof totalVal === 'string') {
        totalVal = parseFloat(totalVal)
    }
    //  默认用2 (孙悟空)
    contractNet.reLoadXaddr(_affCode, parseInt(_team), web3.toWei(totalVal, "ether"), function (err, res) {
        if (!err) {
            if (res) {
                fn(null, res)
            } else {
                fn('reLoadXaddr error', null)
            }
        } else {
            fn(err, null)
        }
    })
}
xyj.reLoadXname = function (_affCode, _team, totalVal, fn) {
    if (typeof _affCode !== 'string') {
        fn('_affCode param 1 need Sting ( addr )', null)
        return '_affCode param 1 need Sting ( addr )'
    }
    if (typeof _team !== 'number') {
        fn('_team param 2 need number (0,1,2,3)', null)
        return '_team param 2 need number (0,1,2,3)'
    }
    if (typeof totalVal === 'string') {
        totalVal = parseFloat(totalVal)
    }
    //  默认用2 (孙悟空)
    contractNet.reLoadXname(_affCode, parseInt(_team), web3.toWei(totalVal, "ether"), function (err, res) {
        if (!err) {
            if (res) {
                fn(null, res)
            } else {
                fn('reLoadXname error', null)
            }
        } else {
            fn(err, null)
        }
    })
}
xyj.reLoadXid = function (_affCode, _team, totalVal, fn) {
    if (typeof _affCode !== 'number') {
        fn('_affCode param 1 need number ( id )', null)
        return '_affCode param 1 need number ( id )'
    }
    if (typeof _team !== 'number') {
        fn('_team param 2 need number (0,1,2,3)', null)
        return '_team param 2 need number (0,1,2,3)'
    }
    if (typeof totalVal === 'string') {
        totalVal = parseFloat(totalVal)
    }
    //  默认用2 (孙悟空)
    contractNet.reLoadXid(_affCode, parseInt(_team), web3.toWei(totalVal, "ether"), function (err, res) {
        if (!err) {
            if (res) {
                fn(null, res)
            } else {
                fn('reLoadXid error', null)
            }
        } else {
            fn(err, null)
        }
    })
}
