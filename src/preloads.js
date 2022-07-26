const preloads = {
  optimism: {
    chainId: '0xA',
    chainName: 'Optimism',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      'https://mainnet.optimism.io'
    ],
    blockExplorerUrls: [
      'https://optimistic.etherscan.io'
    ]
  },
  'optimism-kovan': {
    chainId: '0x45',
    chainName: 'Optimism Kovan (testnet)',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      'https://kovan.optimism.io'
    ],
    blockExplorerUrls: [
      'https://kovan-optimistic.etherscan.io'
    ]
  },
  'optimism-goerli': {
    chainId: '420',
    chainName: 'Optimism Goerli (testnet)',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      'https://goerli.optimism.io'
    ],
    blockExplorerUrls: [
      'https://blockscout.com/optimism/goerli'
    ]
  },  
  'goerli': {
    chainId: '5',
    chainName: 'Goerli (testnet)',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      'https://rpc.goerli.mudit.blog/'
    ],
    blockExplorerUrls: [
      'https://goerli.etherscan.io/'
    ]
  },   
  cheapeth: {
    chainId: '0x309',
    chainName: 'cheapETH',
    nativeCurrency: {
      name: 'cheapETH',
      symbol: 'cTH',
      decimals: 18,
    },
    rpcUrls: [
      'https://rpc.cheapeth.org/rpc'
    ],
    blockExplorerUrls: [
      'https://explore.cheapswap.io/'
    ]
  },
  polygon: {
    chainId: '0x89',
    chainName: 'Matic Network',
      nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: [
      'https://rpc-mainnet.matic.network'
    ],
    blockExplorerUrls: [
      'https://polygonscan.com'
    ],
  },
  xdai: {
    chainId: '0x64',
    chainName: 'xDai',
      nativeCurrency: {
      name: 'xDai Token',
      symbol: 'xDai',
      decimals: 18,
    },
    rpcUrls: [
      'https://rpc.xdaichain.com'
    ],
    blockExplorerUrls: [
      'https://blockscout.com/xdai/mainnet'
    ],
  },
}

export default preloads
