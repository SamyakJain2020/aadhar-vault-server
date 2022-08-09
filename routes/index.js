var express = require("express");
var ethers = require("ethers");
var router = express.Router();

require("dotenv").config();

let abi = require("../contracts/DataVault.json").abi;
const smartContractAddress = "0x6FaDBBaebFB6c6BA7BCE340B251E85fCf390fA74";
const provider = new ethers.providers.JsonRpcProvider(
  "https://matic-mumbai.chainstacklabs.com"
);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// routher to get the balance of the server account
router.get("/balance", async function (req, res, next) {
  try {
    const address = "0x54A19D70cfBD1f7Df1B0c1eBC4c8AEb81F116150";
    const balance = await provider.getBalance(address);
    res.json(balance.toString());
  } catch (err) {
    res.json(err);
  }
});
//router to call getAllUsers function from a smart contract with address as 0x6FaDBBaebFB6c6BA7BCE340B251E85fCf390fA74
router.get("/getAllUsers", async function (req, res, next) {
  try {
    const contract = new ethers.Contract(smartContractAddress, abi, provider);
    const users = await contract.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json(err);
  }
});

//router to call registerOrganisation function from a smart contract where org_name is passed in request body
router.post("/registerOrganisation", async function (req, res, next) {
  try {
    console.log(req.body);
    // get a wallet using PRIVATE_KEY
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    console.log("address: ", wallet.address);
    const signer = wallet.connect(provider);
    console.log("signer: ", signer);
    // get the contract instance
    const contract = new ethers.Contract(smartContractAddress, abi, signer);
    const tx = await contract.registerOrganisation(req.body.org_name);
    await tx.wait();
    console.log("tx: ", tx);
    res.status(200).json(tx);
  } catch (err) {
    res.status(404).send(err);
  }
});
//router to call registerUser function from a smart contract where user_name and org_name is passed in request body
router.post("/registerUser", async function (req, res, next) {
  try {
    console.log(req.body);
    // get a wallet using PRIVATE_KEY
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const signer = wallet.connect(provider);
    // get the contract instance
    const contract = new ethers.Contract(smartContractAddress, abi, signer);
    const tx = await contract.registerUser(
      req.body.user_name
      // req.body.org_name
    );
    await tx.wait();
    console.log("tx: ", tx);
    res.status(200).json(tx);
  } catch (err) {
    res.status(404).send(err);
  }
});
module.exports = router;
