export const VENFT_ADDRESS = '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e'

export const VENFT_ABI: any = [
    {
        "name": "CommitOwnership",
        "inputs": [
            {
                "type": "address",
                "name": "admin",
                "indexed": false
            }
        ],
        "anonymous": false,
        "type": "event"
    },
    {
        "name": "ApplyOwnership",
        "inputs": [
            {
                "type": "address",
                "name": "admin",
                "indexed": false
            }
        ],
        "anonymous": false,
        "type": "event"
    },
    {
        "name": "Deposit",
        "inputs": [
            {
                "type": "address",
                "name": "provider",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "locktime",
                "indexed": true
            },
            {
                "type": "int128",
                "name": "type",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "ts",
                "indexed": false
            }
        ],
        "anonymous": false,
        "type": "event"
    },
    {
        "name": "Withdraw",
        "inputs": [
            {
                "type": "address",
                "name": "provider",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "ts",
                "indexed": false
            }
        ],
        "anonymous": false,
        "type": "event"
    },
    {
        "name": "Supply",
        "inputs": [
            {
                "type": "uint256",
                "name": "prevSupply",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "supply",
                "indexed": false
            }
        ],
        "anonymous": false,
        "type": "event"
    },
    {
        "outputs": [],
        "inputs": [
            {
                "type": "address",
                "name": "token_addr"
            },
            {
                "type": "string",
                "name": "_name"
            },
            {
                "type": "string",
                "name": "_symbol"
            },
            {
                "type": "string",
                "name": "_version"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "name": "commit_transfer_ownership",
        "outputs": [],
        "inputs": [
            {
                "type": "address",
                "name": "addr"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "gas": 37568
    },
    {
        "name": "apply_transfer_ownership",
        "outputs": [],
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "gas": 38407
    },
    {
        "name": "commit_smart_wallet_checker",
        "outputs": [],
        "inputs": [
            {
                "type": "address",
                "name": "addr"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "gas": 36278
    },
    {
        "name": "apply_smart_wallet_checker",
        "outputs": [],
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "gas": 37005
    },
    {
        "name": "get_last_user_slope",
        "outputs": [
            {
                "type": "int128",
                "name": ""
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "addr"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "gas": 2540
    },
    {
        "name": "user_point_history__ts",
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "_addr"
            },
            {
                "type": "uint256",
                "name": "_idx"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "gas": 1643
    },
    {
        "name": "locked__end",
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "_addr"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "gas": 1564
    },
    {
        "name": "checkpoint",
        "outputs": [],
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "gas": 37119546
    },
    {
        "name": "deposit_for",
        "outputs": [],
        "inputs": [
            {
                "type": "address",
                "name": "_addr"
            },
            {
                "type": "uint256",
                "name": "_tokenId"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "gas": 74787231
    },
    {
        "name": "create_lock",
        "outputs": [],
        "inputs": [
            {
                "type": "uint256",
                "name": "_tokenId"
            },
            {
                "type": "uint256",
                "name": "_unlock_time"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "gas": 74776710
    },
    {
        "name": "increase_amount",
        "outputs": [],
        "inputs": [
            {
                "type": "uint256",
                "name": "_tokenId"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "gas": 74775967
    },
    {
        "name": "increase_unlock_time",
        "outputs": [],
        "inputs": [
            {
                "type": "uint256",
                "name": "_unlock_time"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "gas": 74776711
    },
    {
        "name": "withdraw",
        "outputs": [],
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "gas": 37692937
    },
    {
        "name": "balanceOf",
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "addr"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "name": "balanceOf",
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "addr"
            },
            {
                "type": "uint256",
                "name": "_t"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "name": "balanceOfAt",
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "addr"
            },
            {
                "type": "uint256",
                "name": "_block"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "gas": 509566
    },
    {
        "name": "totalSupply",
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "name": "totalSupply",
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [
            {
                "type": "uint256",
                "name": "t"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "name": "totalSupplyAt",
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [
            {
                "type": "uint256",
                "name": "_block"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "gas": 879507
    },
    {
        "name": "changeController",
        "outputs": [],
        "inputs": [
            {
                "type": "address",
                "name": "_newController"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "gas": 36878
    },
    {
        "name": "token",
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 1751
    },
    {
        "name": "supply",
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 1781
    },
    {
        "name": "locked",
        "outputs": [
            {
                "type": "int128",
                "name": "amount"
            },
            {
                "type": "uint256[10]",
                "name": "locked_nfts"
            },
            {
                "type": "uint256",
                "name": "end"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "arg0"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "gas": 13914
    },
    {
        "name": "epoch",
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 1841
    },
    {
        "name": "point_history",
        "outputs": [
            {
                "type": "int128",
                "name": "bias"
            },
            {
                "type": "int128",
                "name": "slope"
            },
            {
                "type": "uint256",
                "name": "ts"
            },
            {
                "type": "uint256",
                "name": "blk"
            }
        ],
        "inputs": [
            {
                "type": "uint256",
                "name": "arg0"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "gas": 5178
    },
    {
        "name": "user_point_history",
        "outputs": [
            {
                "type": "int128",
                "name": "bias"
            },
            {
                "type": "int128",
                "name": "slope"
            },
            {
                "type": "uint256",
                "name": "ts"
            },
            {
                "type": "uint256",
                "name": "blk"
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "arg0"
            },
            {
                "type": "uint256",
                "name": "arg1"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "gas": 5423
    },
    {
        "name": "user_point_epoch",
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [
            {
                "type": "address",
                "name": "arg0"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "gas": 2146
    },
    {
        "name": "slope_changes",
        "outputs": [
            {
                "type": "int128",
                "name": ""
            }
        ],
        "inputs": [
            {
                "type": "uint256",
                "name": "arg0"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "gas": 2076
    },
    {
        "name": "controller",
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 1991
    },
    {
        "name": "transfersEnabled",
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 2021
    },
    {
        "name": "name",
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 8453
    },
    {
        "name": "symbol",
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 7506
    },
    {
        "name": "version",
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 7536
    },
    {
        "name": "decimals",
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 2141
    },
    {
        "name": "future_smart_wallet_checker",
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 2171
    },
    {
        "name": "smart_wallet_checker",
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 2201
    },
    {
        "name": "admin",
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 2231
    },
    {
        "name": "future_admin",
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "inputs": [],
        "stateMutability": "view",
        "type": "function",
        "gas": 2261
    }
]