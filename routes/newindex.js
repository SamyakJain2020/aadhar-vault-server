var express = require("express");
var ethers = require("ethers");
var router = express.Router();

require("dotenv").config();

let abi = require("../contracts/DataVault.json").abi;
const smartContractAddress = "0xD73Ce19B9587C1E3513870286D015C1ed598368d";
const provider = new ethers.providers.JsonRpcProvider(
  "https://matic-mumbai.chainstacklabs.com"
);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});


//*******************ALL REGISTERATION FUNCTIONS START***************************


router.post("/registerNewAadhaarHolder", async function (req, res, next) {
	try {
	  console.log(req.body);
	  // get a wallet using PRIVATE_KEY
	  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
	  const signer = wallet.connect(provider);
	  // get the contract instance
	  const contract = new ethers.Contract(smartContractAddress, abi, signer);
	  const tx = await contract.RegisterNewAadhaarHolder(
		req.body.username,
		req.body.adharsig,
		// req.body.org_name
	  );
	  //await tx.wait();
	  console.log("tx: ", tx);
	  res.status(200).json(tx);
	} catch (err) {
	  res.status(404).send(err);
	}
  });


  router.post("/registerAgency",async function (req,res,next)
{
    try{
          console.log(req.body);
          //get a wallet using Private Key
          const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
          console.log(wallet.address);
          const signer=wallet.connect(provider);
          // get the instance of contract
          //console.log(signer);
          const contract=new ethers.Contract(smartContractAddress,abi,signer);
          //console.log(contract);
          const tx=await contract.RegisterAgency(
            req.body.agencyname,
            req.body.permission
          );
          console.log("Tx : ",tx);
         // await tx.wait();
          
          res.status(200).json(tx);
    }
    catch(err)
    {
      res.status(404).send(err);
    }

});


router.post("/registerAadhaarInAgency",async function (req,res,next)
{
  try{
    console.log(req.body);
    //get a wallet using Private Key
    const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
    const signer=wallet.connect(provider);
    // get the instance of contract
    const contract=new ethers.Contract(smartContractAddress,abi,signer);
    const tx=await contract.RegisterAadhaarInAgency(
      //      *******        ID is also  to be passed // Not clear whether to get id from body or from wallet
      req.body.id,
      req.body.userwallet,
    );
    await tx.wait();
    console.log("Tx : ",tx);
    res.status(200).json(tx);
}
catch(err)
{
res.status(404).send(err);
}
});

//*******************ALL REGISTERATION FUNCTIONS END***************************


//*******************ALL RETRIVAL FUNCTIONS START***************************

router.post("/getAllAgencyAdmins",async function (req,res,next)
{
try{
  console.log(req.body);
  const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
  const signer=wallet.connect(provider);
  const contract=new ethers.Contract(smartContractAddress,abi,signer);
  const tx=await contract.getAllAgencyAdmins(
    req.body.id
  );
  //await tx.wait();
    console.log("Tx : ",tx);
    res.status(200).json(tx);
}
catch(err)
{
res.status(404).send(err);
}
});


router.post("/getAllAdharInAgency",async function (req,res,next)
{
try{
  console.log(req.body);
  const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
  const signer=wallet.connect(provider);
  const contract=new ethers.Contract(smartContractAddress,abi,signer);
  const tx=await contract.getAllAadharInAgency(
    req.body.id
  );
  //await tx.wait();
    console.log("Tx : ",tx);
    res.status(200).json(tx);
}
catch(err)
{
res.status(404).send(err);
}
});


//*******************ALL RETRIVAL FUNCTIONS END***************************


router.post("/addAgencyAdmins",async function (req,res,next)
{
try{
  console.log(req.body);
  const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
  const signer=wallet.connect(provider);
  const contract=new ethers.Contract(smartContractAddress,abi,signer);
  const tx=await contract.AddAgencyAdmin(
    req.body.id,
	req.body.newadminaddress
  );
  //await tx.wait();
    console.log("Tx : ",tx);
    res.status(200).json(tx);
}
catch(err)
{
res.status(404).send(err);
}
});


router.post("/markAdminPresent",async function (req,res,next)
{
try{
  console.log(req.body);
  const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
  const signer=wallet.connect(provider);
  const contract=new ethers.Contract(smartContractAddress,abi,signer);
  const tx=await contract.MarkAdminPresent(
    req.body.id,
    req.body.user
  );
  //await tx.wait();
    console.log("Tx : ",tx);
    res.status(200).json(tx);
}
catch(err)
{
res.status(404).send(err);
}
});


router.post("/markAdminAbsent",async function (req,res,next)
{
try{
  console.log(req.body);
  const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
  const signer=wallet.connect(provider);
  const contract=new ethers.Contract(smartContractAddress,abi,signer);
  const tx=await contract.MarkAdminAbsent(
    req.body.id,
    req.body.user
  );
  await tx.wait();
    console.log("Tx : ",tx);
    res.status(200).json(tx);
}
catch(err)
{
res.status(404).send(err);
}
});




