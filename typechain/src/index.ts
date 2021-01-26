class Block {
    public index: Number;
    public hash: String;
    public previousHash: String;
    public data: String;
    public timestamp: Number;
    constructor(index: Number, hash: String, previousHash: String, data: String, timestamp: Number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "20023023020", "", "Hello", 123456);

let blockchian: [Block] = [genesisBlock];
blockchian.push(genesisBlock);

console.log(blockchian);

export {};