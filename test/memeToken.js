var MemeToken = artifacts.require("./MemeToken.sol");

describe("mint", () => {
  it("creates token with specified name and hash values", async () => {
    let instance = await MemeToken.deployed();
    let owner = await instance.owner();

    let token = await instance.mint("smiley", "QmUqRKhS8GzCiFaiAQ4A9g2TFL4emCNDJYaRJa1ZByaUk7");
   // console.log(token);

   // let tokens = await instance.tokensOf(owner);
    let memes = await instance.getMeme(0);
    console.log(memes);
    assert.deepEqual(memes, ["smiley", "QmUqRKhS8GzCiFaiAQ4A9g2TFL4emCNDJYaRJa1ZByaUk7"]);
  });
});