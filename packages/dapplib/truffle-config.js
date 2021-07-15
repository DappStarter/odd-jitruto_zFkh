require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area state nuclear decrease still mistake coral light army gesture'; 
let testAccounts = [
"0xfa7a18696f8d26aa8460323c6eae2d5e4676457896f2d500e55d1fee953e6cbc",
"0x85864b69d6df51774f5eaa041ce9314c386c53c0aabdec4724d8189b9d6d797e",
"0x235bd867e7fe21bd85fc545e2c9736a3273bead922ed2ab098528fc7347ae7d9",
"0xc99ae4a7861c73c6ff42cfb95ef98dde37d1cae213bd0f8c21df9a379e792c5b",
"0x1b871166a6736b417984d2a4263b2cff2f69cce8f43d1ac132a061ebea276c50",
"0xf2deb961b4a54a0684e8adf95a008ed4a562ff95afadf7a6151532745c79c0e1",
"0xcd933980fb21a42178263b04b787616f59d7ef7ed1742b65e14997222dd5df7e",
"0x038363cf995f0d36be0a6169f96778f6693d7c9fa5957a980b33498d111f2dc4",
"0xf2b788f70efc916a6301e8e449d84d3949654c8c766b3f1ce306af1ffba8dc73",
"0x3ab49352eae2445b376d37797f096577d1131745aa7a3b74596574d96685f7aa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

