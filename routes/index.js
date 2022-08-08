var express = require("express");
var ethers = require("ethers");
var router = express.Router();

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
const contractAddress = "0x8d12a197cb00d4747a1fe03395095ce2a5cc6819";
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// routher to get the balance of the user
router.get("/balance", function (req, res, next) {
  var wallet = new ethers.Wallet("0x" + process.env.PRIVATE_KEY, provider);
  wallet.getBalance().then(function (balance) {
    res.send(balance.toString());
  });
});
// router to connect to the contract
router.get("/contract", function (req, res, next) {
  var wallet = new ethers.Wallet("0x" + process.env.PRIVATE_KEY, provider);
  var contract = new ethers.Contract(contractAddress, contractABI, wallet);
  contract.getBalance().then(function (balance) {
    res.send(balance.toString());
  });
});

module.exports = router;
