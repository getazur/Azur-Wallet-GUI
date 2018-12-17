var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'AZUR';
config.appDescription = 'Wallet';
config.appSlogan = 'Slow and steady wins the race!';
config.appId = 'AZUR.walletshell';
config.appGitRepo = 'https://github.com/getazur/azur-wallet-gui';

// default port number for your daemon (e.g. azurd)
config.daemonDefaultRpcPort = 15251;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'wallet';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'azur-service';

// version on the bundled service (azur-service)
config.walletServiceBinaryVersion = "v0.1.1";

// default port number for your wallet service (e.g. azur-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://explorer.getazur.org/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'node-1.getazur.org';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'https://raw.githubusercontent.com/getazur/public-nodes/master/azur-nodes.json';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    'node-2.getazur.org:15251',
    'node-3.getazur.org:15251',
    'node-4.getazur.org:15251',
    'node-5.getazur.org:15251',
    'node-6.getazur.org:15251',
    'node-7.getazur.org:15251',
    'node-8.getazur.org:15251',
];

// your currency name
config.assetName = 'AZUR';
// your currency ticker
config.assetTicker =  'AZUR';
// your currency address prefix, for address validation
config.addressPrefix =  'AZUR';
// standard wallet address length, for address validation
config.addressLength = 95;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 187;

// minimum fee for sending transaction
config.minimumFee = 0.01;
// minimum amount for sending transaction
config.mininumSend = 0.10;
// default mixin/anonimity for transaction
config.defaultMixin = 1;
// to convert from atomic unit
config.decimalDivisor = 100;
// to represent human readable value
config.decimalPlaces = 2;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
];

module.exports = config;
