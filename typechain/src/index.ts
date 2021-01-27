import * as CryptoJS from 'crypto-js';

class Block {
    public index: Number;
    public hash: String;
    public previousHash: String;
    public data: String;
    public timestamp: Number;

    static calculateBlockHash = (index: Number, previousHash: String, timestamp: Number, data: String): String => {
        return CryptoJS.SHA256(index.toString() + previousHash + timestamp.toString() + data).toString();
    }

    constructor(index: Number, hash: String, previousHash: String, data: String, timestamp: Number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "20023023020", "", "Hello", 123456);

let blockchian: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchian;

const getLatesBlock = (): Block => blockchian[blockchian.length - 1];

const getNewTimeStamp = (): Number => Math.round(new Date().getTime() / 1000);

export {};