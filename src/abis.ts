export const SLPX_V2_ABI = [
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "allowance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "approver", type: "address" }],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "receiver", type: "address" }],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "spender", type: "address" }],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "receiver", type: "address" },
      { internalType: "uint256", name: "assets", type: "uint256" },
      { internalType: "uint256", name: "max", type: "uint256" },
    ],
    name: "ERC4626ExceededMaxDeposit",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "receiver", type: "address" },
      { internalType: "uint256", name: "shares", type: "uint256" },
      { internalType: "uint256", name: "max", type: "uint256" },
    ],
    name: "ERC4626ExceededMaxMint",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "shares", type: "uint256" },
      { internalType: "uint256", name: "max", type: "uint256" },
    ],
    name: "ERC4626ExceededMaxRedeem",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "assets", type: "uint256" },
      { internalType: "uint256", name: "max", type: "uint256" },
    ],
    name: "ERC4626ExceededMaxWithdraw",
    type: "error",
  },
  { inputs: [], name: "EnforcedPause", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "withdrawCount", type: "uint256" },
    ],
    name: "ExceedMaxWithdrawCount",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tokenAmount", type: "uint256" },
      { internalType: "uint256", name: "pendingAmount", type: "uint256" },
    ],
    name: "ExceedPermittedAmount",
    type: "error",
  },
  { inputs: [], name: "ExpectedPause", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "tokenAmount", type: "uint256" },
      { internalType: "uint256", name: "availableAmount", type: "uint256" },
    ],
    name: "InsufficientWithdrawAmount",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "data", type: "address" },
      { internalType: "address", name: "expectedBridgeVault", type: "address" },
    ],
    name: "InvalidDataParameter",
    type: "error",
  },
  { inputs: [], name: "InvalidInitialization", type: "error" },
  { inputs: [], name: "NotInitializing", type: "error" },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "NotRoleAdmin",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "NotTriggerAddress",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "vTokenAmount",
        type: "uint256",
      },
    ],
    name: "AsyncMintCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "vTokenAmount",
        type: "uint256",
      },
    ],
    name: "AsyncRedeemCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "oldBifrostDest",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "newBifrostDest",
        type: "bytes",
      },
    ],
    name: "BifrostDestChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldBridgeVault",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newBridgeVault",
        type: "address",
      },
    ],
    name: "BridgeVaultChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxWithdrawCount",
        type: "uint256",
      },
    ],
    name: "MaxWithdrawCountChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOracle",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOracle",
        type: "address",
      },
    ],
    name: "OracleChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "isAdmin", type: "bool" },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldTokenGateway",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newTokenGateway",
        type: "address",
      },
    ],
    name: "TokenGatewayChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "TriggerAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "WithdrawalCompleted",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "approveTokenGateway",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "asset",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "relayerFee", type: "uint256" },
      { internalType: "uint64", name: "timeout", type: "uint64" },
    ],
    name: "asyncMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "relayerFee", type: "uint256" },
      { internalType: "uint64", name: "timeout", type: "uint64" },
      { internalType: "bytes32", name: "to", type: "bytes32" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "asyncRedeem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bifrostDest",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bridgeVault",
    outputs: [
      { internalType: "contract BridgeVault", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_from", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "canWithdrawalAmount",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_account", type: "address" },
      { internalType: "bool", name: "_isAdmin", type: "bool" },
    ],
    name: "changeRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "completedWithdrawal",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "shares", type: "uint256" }],
    name: "convertToAssets",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "assets", type: "uint256" }],
    name: "convertToShares",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentCycleMintTokenAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentCycleMintVTokenAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentCycleRedeemVTokenAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "assets", type: "uint256" },
      { internalType: "address", name: "receiver", type: "address" },
    ],
    name: "deposit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "getWithdrawals",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "queued", type: "uint256" },
          { internalType: "uint256", name: "pending", type: "uint256" },
        ],
        internalType: "struct VTokenBase.Withdrawal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_currentCycleTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_currentCycleVTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_currentCycleRedeemVTokenAmount",
        type: "uint256",
      },
    ],
    name: "increaseCurrentCycleAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "asset", type: "address" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "maxDeposit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "maxMint",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "maxRedeem",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "maxWithdraw",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxWithdrawCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "shares", type: "uint256" },
      { internalType: "address", name: "receiver", type: "address" },
    ],
    name: "mint",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [{ internalType: "contract Oracle", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "assets", type: "uint256" }],
    name: "previewDeposit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "shares", type: "uint256" }],
    name: "previewMint",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "shares", type: "uint256" }],
    name: "previewRedeem",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "assets", type: "uint256" }],
    name: "previewWithdraw",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queuedWithdrawal",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "shares", type: "uint256" },
      { internalType: "address", name: "receiver", type: "address" },
      { internalType: "address", name: "owner", type: "address" },
    ],
    name: "redeem",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "rolesAdmin",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "_bifrostDest", type: "bytes" }],
    name: "setBifrostDest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_bridgeVault",
        type: "address",
      },
    ],
    name: "setBridgeVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_maxWithdrawCount", type: "uint256" },
    ],
    name: "setMaxWithdrawCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_oracle", type: "address" }],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_tokenGateway", type: "address" },
    ],
    name: "setTokenGateway",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_triggerAddress", type: "address" },
    ],
    name: "setTriggerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenGateway",
    outputs: [
      { internalType: "contract ITokenGateway", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "triggerAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "assets", type: "uint256" },
      { internalType: "address", name: "receiver", type: "address" },
      { internalType: "address", name: "owner", type: "address" },
    ],
    name: "withdraw",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawComplete",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
    ],
    name: "withdrawFeeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "withdrawals",
    outputs: [
      { internalType: "uint256", name: "queued", type: "uint256" },
      { internalType: "uint256", name: "pending", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const MANTA_SLPX_V1_ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "caller",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Mint",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "caller",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Redeem",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "assetAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint32",
        "name": "channel_id",
        "type": "uint32"
      },
      {
        "internalType": "uint64",
        "name": "dstGasForCall",
        "type": "uint64"
      },
      {
        "internalType": "bytes",
        "name": "adapterParams",
        "type": "bytes"
      }
    ],
    "name": "create_order",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "destChainId",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "assetAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint32",
        "name": "channel_id",
        "type": "uint32"
      },
      {
        "internalType": "uint64",
        "name": "dstGasForCall",
        "type": "uint64"
      },
      {
        "internalType": "bytes",
        "name": "adapterParams",
        "type": "bytes"
      }
    ],
    "name": "estimateSendAndCallFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "manta",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mantaOFT",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "remoteContract",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_minAmount",
        "type": "uint256"
      }
    ],
    "name": "setMinAmount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_remoteContract",
        "type": "address"
      }
    ],
    "name": "setRemoteContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vMantaOFT",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export const MOONBEAM_SLPX_V1_ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "previousAdmin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "AdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "beacon",
        "type": "address"
      }
    ],
    "name": "BeaconUpgraded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address",
        "name": "admin_",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "changeAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "implementation",
    "outputs": [
      {
        "internalType": "address",
        "name": "implementation_",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      }
    ],
    "name": "upgradeTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "upgradeToAndCall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "assetAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "amount",
        "type": "uint128"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "dest_chain_id",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "receiver",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "remark",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "channel_id",
        "type": "uint32"
      }
    ],
    "name": "CreateOrder",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "minter",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "assetAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "callcode",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "remark",
        "type": "string"
      }
    ],
    "name": "Mint",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "redeemer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "assetAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "callcode",
        "type": "bytes"
      }
    ],
    "name": "Redeem",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "BNCAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "addressToAssetInfo",
    "outputs": [
      {
        "internalType": "bytes2",
        "name": "currencyId",
        "type": "bytes2"
      },
      {
        "internalType": "uint256",
        "name": "operationalMin",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "bifrostParaId",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "assetAddress",
        "type": "address"
      },
      {
        "internalType": "uint128",
        "name": "amount",
        "type": "uint128"
      },
      {
        "internalType": "uint64",
        "name": "dest_chain_id",
        "type": "uint64"
      },
      {
        "internalType": "bytes",
        "name": "receiver",
        "type": "bytes"
      },
      {
        "internalType": "string",
        "name": "remark",
        "type": "string"
      },
      {
        "internalType": "uint32",
        "name": "channel_id",
        "type": "uint32"
      }
    ],
    "name": "create_order",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "name": "destChainInfo",
    "outputs": [
      {
        "internalType": "bool",
        "name": "is_evm",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "is_substrate",
        "type": "bool"
      },
      {
        "internalType": "bytes1",
        "name": "raw_chain_index",
        "type": "bytes1"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_BNCAddress",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_bifrostParaId",
        "type": "uint32"
      },
      {
        "internalType": "bytes2",
        "name": "_nativeCurrencyId",
        "type": "bytes2"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "assetAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "remark",
        "type": "string"
      }
    ],
    "name": "mintVAsset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "assetAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "remark",
        "type": "string"
      },
      {
        "internalType": "uint32",
        "name": "channel_id",
        "type": "uint32"
      }
    ],
    "name": "mintVAssetWithChannelId",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "remark",
        "type": "string"
      }
    ],
    "name": "mintVNativeAsset",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "remark",
        "type": "string"
      },
      {
        "internalType": "uint32",
        "name": "channel_id",
        "type": "uint32"
      }
    ],
    "name": "mintVNativeAssetWithChannelId",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "enum MoonbeamSlpx.Operation",
        "name": "",
        "type": "uint8"
      }
    ],
    "name": "operationToFeeInfo",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "transactRequiredWeightAtMost",
        "type": "uint64"
      },
      {
        "internalType": "uint256",
        "name": "feeAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "overallWeight",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "vAssetAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "redeemAsset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "assetAddress",
        "type": "address"
      },
      {
        "internalType": "bytes2",
        "name": "currencyId",
        "type": "bytes2"
      },
      {
        "internalType": "uint256",
        "name": "minimumValue",
        "type": "uint256"
      }
    ],
    "name": "setAssetAddressInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "dest_chain_id",
        "type": "uint64"
      },
      {
        "internalType": "bool",
        "name": "is_evm",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "is_substrate",
        "type": "bool"
      },
      {
        "internalType": "bytes1",
        "name": "raw_chain_index",
        "type": "bytes1"
      }
    ],
    "name": "setDestChainInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "enum MoonbeamSlpx.Operation",
        "name": "_operation",
        "type": "uint8"
      },
      {
        "internalType": "uint64",
        "name": "_transactRequiredWeightAtMost",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "_overallWeight",
        "type": "uint64"
      },
      {
        "internalType": "uint256",
        "name": "_feeAmount",
        "type": "uint256"
      }
    ],
    "name": "setOperationToFeeInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_logic",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "admin_",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  }
];

export const SONEIUM_SLPX_V1_ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "caller",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "channelId",
        "type": "uint32"
      }
    ],
    "name": "Mint",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "caller",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Redeem",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "AstarReceiver",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "caller",
        "type": "address"
      },
      {
        "internalType": "enum Types.Operation",
        "name": "operation",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gasLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "_dstGasForCall",
        "type": "uint64"
      },
      {
        "internalType": "bytes",
        "name": "_adapterParams",
        "type": "bytes"
      }
    ],
    "name": "estimateSendAndCallFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "enum Types.Operation",
        "name": "",
        "type": "uint8"
      }
    ],
    "name": "minAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "channelId",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "gasLimit",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "_dstGasForCall",
        "type": "uint64"
      },
      {
        "internalType": "bytes",
        "name": "_adapterParams",
        "type": "bytes"
      }
    ],
    "name": "redeem",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "remoteContract",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "enum Types.Operation",
        "name": "_operation",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "_minAmount",
        "type": "uint256"
      }
    ],
    "name": "setMinAmount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_remoteContract",
        "type": "address"
      }
    ],
    "name": "setRemoteContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]