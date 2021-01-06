require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note often minor guess knee bubble gaze'; 
let testAccounts = [
"0xb945b43074186fe32ec1690c3834677b59eee2ae23e8b83367c8aabf18ca1e7f",
"0x849d4de3ad91f5d3758ca392fde9f2be75a281912d0425466c151fa0208ce12e",
"0xa8fbd4a6844946bd9a894f376b997bd6788dcddf7f1aad0ca7590737dfb8d05d",
"0xf88678b957975813f5f76962097cc02657662394608c97dba7a22757183fc996",
"0x3808e134e115408b55ee4d1ef64c3e83636fd684931793e2b8809f064b86e7dd",
"0x57121d8f314618d9ed1fac0097036e9ccd69a19a2739f2c5d33589129cb1cf7e",
"0xc18e41d608c92f76dc00a98b032773435838330d944aa6de37cf251327718988",
"0x0bbb20d7bfd594363c53d943580b60fdb0435f46fd4df1c53d87e8a6421abb7b",
"0x5fb314028923b9264146061fa082b8012addf6da08e6548f3229f4d70190d84b",
"0x92b5ca281e1c3581f2f580205aab1caa7ffb14ab884c05f43fc79a8c7a914775"
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
            version: '^0.5.11'
        }
    }
};
