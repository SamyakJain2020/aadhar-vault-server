var express = require("express");
var ethers = require("ethers");
var router = express.Router();

const provider = new ethers.providers.JsonRpcProvider(
  "https://matic-mumbai.chainstacklabs.com"
);
const matic = new ethers.Contract("0x8d12a197cb00d4747a1fe03395095ce2a5cc6819");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// routher to get the balance of the user
router.get("/balance", async function (req, res, next) {
  try {
    const address = "0x8d12a197cb00d4747a1fe03395095ce2a5cc6819";
    const balance = await provider.getBalance(address);
    res.send(balance.toString());
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
