var MemeToken = artifacts.require("./MemeToken.sol");

describe("mint", () => {
  it("creates token with specified name and hash values", async () => {
    let instance = await MemeToken.deployed();
    let owner = await instance.owner();

    let token = await instance.mint("smiley", "qwsred12345rfd");
   // console.log(token);

   // let tokens = await instance.tokensOf(owner);
    let memes = await instance.getMeme(0);
    console.log(memes);
    assert.deepEqual(memes, ["smiley", "qwsred12345rfd"]);
  });
});