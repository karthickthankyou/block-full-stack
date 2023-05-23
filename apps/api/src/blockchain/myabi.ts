export const myabi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'coordinates',
        type: 'string',
      },
    ],
    name: 'LandRegistered',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'coordinates',
        type: 'string',
      },
    ],
    name: 'registerLand',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'lands',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'coordinates',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export const contractAddress = '0xa78F479f981D4bDa3676324BCfa2F8c172B68BAA';

export const url =
  'wss://alien-green-needle.matic-testnet.discover.quiknode.pro/8646a199c315d85ac37f6b5eb3f25aad8e46c696/';
