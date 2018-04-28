pragma solidity ^0.4.17;

import "../node_modules/zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol";

contract MemeToken is ERC721Token, Ownable {

  // string constant name  = "MemeToken";
  // string constant symbol = "MEME";

struct Meme {

    string nameOfMeme;
    string hash;
  }
  function MemeToken() ERC721Token("MEME","QmUqRKhS8GzCiFaiAQ4A9g2TFL4emCNDJYaRJa1ZByaUk7") public {

  }

  Meme[] public memes;

  function getMeme( uint _memeId ) public view returns(string name, string hash) {
    Meme memory _meme = memes[_memeId];
    name = _meme.nameOfMeme;
    hash = _meme.hash;
  }

  function mint(string _name, string _hash) public payable onlyOwner {

    Meme memory _meme = Meme({ nameOfMeme: _name, hash: _hash });
    uint _memeId = memes.push(_meme) - 1;

    _mint(msg.sender, _memeId);
  }



}


