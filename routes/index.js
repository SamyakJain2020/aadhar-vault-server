// // var express = require("express");
// // var ethers = require("ethers");
// // var router = express.Router();

// // require("dotenv").config();

// // let abi = require("../contracts/DataVault.json").abi;
// // const smartContractAddress = "0x5d1c7E4de005269eFb6E4e3bBaf4D032896D3F4C";
// // const provider = new ethers.providers.JsonRpcProvider(
// //   "https://matic-mumbai.chainstacklabs.com"
// // );

// // /* GET home page. */
// // router.get("/", function (req, res, next) {
// //   res.render("index", { title: "Express" });
// // });

// // // routher to get the balance of the server account
// // router.get("/balance", async function (req, res, next) {
// //   try {
// //     const address = "0x54A19D70cfBD1f7Df1B0c1eBC4c8AEb81F116150";
// //     const balance = await provider.getBalance(address);
// //     res.json(balance.toString());
// //   } catch (err) {
// //     res.json(err);
// //   }
// // });                                                                       //  ^^^^
// // ///////////////////////////////////////////////////------------------WORKING--||||-------------------------///////////////////////////////////////////////////////


// // //router to call getAllUsers function from a smart contract with address as 0x6FaDBBaebFB6c6BA7BCE340B251E85fCf390fA74
// // router.get("/getAllUsers", async function (req, res, next) {
// //   try {
// //     const contract = new ethers.Contract(smartContractAddress, abi , provider );
// //     const users = await contract.getAllUsers();
// //     res.status(200).json(users);
// //   } catch (err) {
// //     res.status(404).json(err);
// //   }
// // });





// // // //router to call registerOrganisation function from a smart contract where org_name is passed in request body

// // // router.post("/registerOrganisation", async function (req, res, next) {

// // //   try {
// // //     console.log(req.body);
// // //     // get a wallet using PRIVATE_KEY
// // //     const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
// // //     console.log("address: ", wallet.address);
// // //     const signer = wallet.connect(provider);
// // //     console.log("signer: ", signer);
// // //     // get the contract instance
// // //     const contract = new ethers.Contract(smartContractAddress, abi, signer);
// // //     const tx = await contract.registerOrganisation(req.body.org_name);
// // //     // await tx.wait();
// // //     console.log("tx: ", tx );
// // //     res.status(200).json({
// // //       status: "success",
// // //       message: "Organisation registered successfully",
// // //     });
// // //   } catch (err) {
// // //     res.status(404).send(err);
// // //   }

// // // }
// // // );





// // //router to call registerUser function from a smart contract where user_name and org_name is passed in request body
// // router.post("/registerUser", async function (req, res, next) {
// //   try {
// //     console.log(req.body);
// //     // get a wallet using PRIVATE_KEY
// //     const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
// //     const signer = wallet.connect(provider);
// //     // get the contract instance
// //     const contract = new ethers.Contract(smartContractAddress, abi, signer);
// //     const tx = await contract.RegisterUser(
// //       req.body.username,
// //       req.body.adharno
// //       // req.body.org_name
// //     );
// //     //await tx.wait();
// //     console.log("tx: ", tx);
// //     res.status(200).json(tx);
// //   } catch (err) {
// //     res.status(404).send(err);
// //   }
// // });

// // ///////////////////////////////////////////////////------------------WORKING--||||-------------------------///////////////////////////////////////////////////////


// // // router to call registeragency function from a smart contarct where name of the organization is the parameter

// // router.post("/registerAgency",async function (req,res,next)
// // {
// //     try{
// //           console.log(req.body);
// //           //get a wallet using Private Key
// //           const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
// //           console.log(wallet.address);
// //           const signer=wallet.connect(provider);
// //           // get the instance of contract
// //           //console.log(signer);
// //           const contract=new ethers.Contract(smartContractAddress,abi,signer);
// //           //console.log(contract);
// //           const tx=await contract.RegisterAgency(
// //             req.body.agencyname,
// //           );
// //           console.log("Tx : ",tx);
// //          // await tx.wait();
          
// //           res.status(200).json(tx);
// //     }
// //     catch(err)
// //     {
// //       res.status(404).send(err);
// //     }

// // });

// // ///////////////////////////////////////////////////------------------WORKING--||||-------------------------///////////////////////////////////////////////////////


// // router.post("/registerAgencyUser",async function (req,res,next)
// // {
// //   try{
// //     console.log(req.body);
// //     //get a wallet using Private Key
// //     const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
// //     const signer=wallet.connect(provider);
// //     // get the instance of contract
// //     const contract=new ethers.Contract(smartContractAddress,abi,signer);
// //     const tx=await contract.RegisterAgencyUser(
// //       //      *******        ID is also  to be passed // Not clear whether to get id from body or from wallet
// //       req.body.id,
// //       req.body.useraddress,
// //     );
// //     await tx.wait();
// //     console.log("Tx : ",tx);
// //     res.status(200).json(tx);
// // }
// // catch(err)
// // {
// // res.status(404).send(err);
// // }
// // });

// // ///////////////////////////////////////////Above Did not work//////////////////////////////////////

// // router.post("/agencyAdmins",async function (req,res,next)
// // {
// // try{
// //   console.log(req.body);
// //   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
// //   const signer=wallet.connect(provider);
// //   const contract=new ethers.Contract(smartContractAddress,abi,signer);
// //   const tx=await contract.AgencyAdmins(
// //     req.body.id
// //   );
// //   //await tx.wait();
// //     console.log("Tx : ",tx);
// //     res.status(200).json(tx);
// // }
// // catch(err)
// // {
// // res.status(404).send(err);
// // }
// // });

// // /////////////////////////////////////////////////////WORKING/////////////////////////////////////////////////////////////////

// // router.post("/markAdminPresent",async function (req,res,next)
// // {
// // try{
// //   console.log(req.body);
// //   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
// //   const signer=wallet.connect(provider);
// //   const contract=new ethers.Contract(smartContractAddress,abi,signer);
// //   const tx=await contract.MarkAdminPresent(
// //     req.body.id,
// //     req.body.user
// //   );
// //   //await tx.wait();
// //     console.log("Tx : ",tx);
// //     res.status(200).json(tx);
// // }
// // catch(err)
// // {
// // res.status(404).send(err);
// // }
// // });

// // router.post("/markAdminAbsent",async function (req,res,next)
// // {
// // try{
// //   console.log(req.body);
// //   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
// //   const signer=wallet.connect(provider);
// //   const contract=new ethers.Contract(smartContractAddress,abi,signer);
// //   const tx=await contract.MarkAdminAbsent(
// //     req.body.id,
// //     req.body.user
// //   );
// //   await tx.wait();
// //     console.log("Tx : ",tx);
// //     res.status(200).json(tx);
// // }
// // catch(err)
// // {
// // res.status(404).send(err);
// // }
// // });

// // router.post("/isAdmin",async function (req,res,next)
// // {
// // try{
// //   console.log(req.body);
// //   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
// //   const signer=wallet.connect(provider);
// //   const contract=new ethers.Contract(smartContractAddress,abi,signer);
// //   const tx=await contract.isAdmin(
// //     req.body.id,
// //   );
// //   await tx.wait();
// //     console.log("Tx : ",tx);
// //     res.status(200).json(tx);
// // }
// // catch(err)
// // {
// // res.status(404).send(err);
// // }
// // });

// // module.exports = router;
// var express = require("express");
// var ethers = require("ethers");
// var router = express.Router();

// require("dotenv").config();

// let abi = require("../contracts/DataVault.json").abi;
// const smartContractAddress = "0x24079D400bE84984ABe17E587B650F247e2df2A4";
// const provider = new ethers.providers.JsonRpcProvider(
//   "https://matic-mumbai.chainstacklabs.com"
// );

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });


// //*******************ALL REGISTERATION FUNCTIONS START***************************


// router.post("/registerNewAadhaarHolder", async function (req, res, next) {
// 	try {
// 	  console.log(req.body);
// 	  // get a wallet using PRIVATE_KEY
// 	  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
// 	  const signer = wallet.connect(provider);
// 	  // get the contract instance
// 	  const contract = new ethers.Contract(smartContractAddress, abi, signer);
// 	  const tx = await contract.RegisterNewAadhaarHolder(
// 		req.body.username,
// 		req.body.adharsig,
// 		// req.body.org_name
// 	  );
// 	  //await tx.wait();
// 	  console.log("tx: ", tx);
// 	  res.status(200).json(tx);
// 	} catch (err) {
// 	  res.status(404).send(err);
// 	}
//   });


//   router.post("/registerAgency",async function (req,res,next)
// {
//     try{
//           console.log(req.body);
//           //get a wallet using Private Key
//           const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//           console.log(wallet.address);
//           const signer=wallet.connect(provider);
//           // get the instance of contract
//           //console.log(signer);
//           const contract=new ethers.Contract(smartContractAddress,abi,signer);
//           //console.log(contract);
//           const tx=await contract.RegisterAgency(
//             req.body.agencyname,
//           );
//           console.log("Tx : ",tx);
//          // await tx.wait();
          
//           res.status(200).json(tx);
//     }
//     catch(err)
//     {
//       res.status(404).send(err);
//     }

// });


// router.post("/registerAadhaarInAgency",async function (req,res,next)
// {
//   try{
//     console.log(req.body);
//     //get a wallet using Private Key
//     const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//     const signer=wallet.connect(provider);
//     // get the instance of contract
//     const contract=new ethers.Contract(smartContractAddress,abi,signer);
//     const tx=await contract.RegisterAadhaarInAgency(
//       //      *******        ID is also  to be passed // Not clear whether to get id from body or from wallet
//       req.body.id,
//       req.body.userwallet,
//     );
//     await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });


// router.get("/getAllAgencyRegAadhaarCount",async function (req,res,next)
// {
//   try{
//     console.log(req.body);
//     //get a wallet using Private Key
//     const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//     const signer=wallet.connect(provider);
//     // get the instance of contract
//     const contract=new ethers.Contract(smartContractAddress,abi,signer);
//     const tx=await contract.getAllAgencyRegAadhaarCount();
//     await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });



// router.get("/getAllAgencyRegAadhaarCount",async function (req,res,next)
// {
//   try{
//     console.log(req.body);
//     //get a wallet using Private Key
//     const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//     const signer=wallet.connect(provider);
//     // get the instance of contract
//     const contract=new ethers.Contract(smartContractAddress,abi,signer);
//     const tx=await contract.getAllAgencyData();
//     await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });



// router.get("/getAllAgencyData",async function (req,res,next)
// {
//   try{
//     console.log(req.body);
//     //get a wallet using Private Key
//     const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//     const signer=wallet.connect(provider);
//     // get the instance of contract
//     const contract=new ethers.Contract(smartContractAddress,abi,signer);
//     const tx=await contract.getAllAgencyData();
//     await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });
// //*******************ALL REGISTERATION FUNCTIONS END***************************


// //*******************ALL RETRIVAL FUNCTIONS START***************************

// router.get("/getAllAgencyAdmins",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.getAllAgencyAdmins(
//     req.body.id
//   );
//   //await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });


// router.get("/getAllAgencyAdmins",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.CheckPermissionAccess(
//     req.body.address
//   );
//   //await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });


// router.get("/getMyAadharData",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.getMyAadharData(
//     req.body.address
//   );
//   //await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });


// router.get("/getAllAdharInAgency",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.getAllAadharInAgency(
//     req.body.id,
//   );
//   //await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });


// //*******************ALL RETRIVAL FUNCTIONS END***************************


// router.post("/addAgencyAdmins",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.AddAgencyAdmin(
//     req.body.id,
// 	req.body.newadminaddress
//   );
//   //await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });


// router.post("/markAdminPresent",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.MarkAdminPresent(
//     req.body.id,
//     req.body.user,
//   );
//   //await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });


// router.post("/markAdminAbsent",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.MarkAdminAbsent(
//     req.body.id,
//     req.body.user
//   );
//   await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });


// router.post("/markRegAadhaarAbsent",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.MarkRegAadhaarAbsent(
//     req.body.id,
//     req.body.address
//   );
//   await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });


// router.post("/markRegAadhaarPresent",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.MarkRegAadhaarPresent(
//     req.body.id,
//     req.body.address
//   );
//   await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });


// module.exports = router;

// var express = require("express");
// var ethers = require("ethers");
// var router = express.Router();

// require("dotenv").config();

// let abi = require("../contracts/DataVault.json").abi;
// const smartContractAddress = "0x5d1c7E4de005269eFb6E4e3bBaf4D032896D3F4C";
// const provider = new ethers.providers.JsonRpcProvider(
//   "https://matic-mumbai.chainstacklabs.com"
// );

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

// // routher to get the balance of the server account
// router.get("/balance", async function (req, res, next) {
//   try {
//     const address = "0x54A19D70cfBD1f7Df1B0c1eBC4c8AEb81F116150";
//     const balance = await provider.getBalance(address);
//     res.json(balance.toString());
//   } catch (err) {
//     res.json(err);
//   }
// });                                                                       //  ^^^^
// ///////////////////////////////////////////////////------------------WORKING--||||-------------------------///////////////////////////////////////////////////////


// //router to call getAllUsers function from a smart contract with address as 0x6FaDBBaebFB6c6BA7BCE340B251E85fCf390fA74
// router.get("/getAllUsers", async function (req, res, next) {
//   try {
//     const contract = new ethers.Contract(smartContractAddress, abi , provider );
//     const users = await contract.getAllUsers();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(404).json(err);
//   }
// });





// // //router to call registerOrganisation function from a smart contract where org_name is passed in request body

// // router.post("/registerOrganisation", async function (req, res, next) {

// //   try {
// //     console.log(req.body);
// //     // get a wallet using PRIVATE_KEY
// //     const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
// //     console.log("address: ", wallet.address);
// //     const signer = wallet.connect(provider);
// //     console.log("signer: ", signer);
// //     // get the contract instance
// //     const contract = new ethers.Contract(smartContractAddress, abi, signer);
// //     const tx = await contract.registerOrganisation(req.body.org_name);
// //     // await tx.wait();
// //     console.log("tx: ", tx );
// //     res.status(200).json({
// //       status: "success",
// //       message: "Organisation registered successfully",
// //     });
// //   } catch (err) {
// //     res.status(404).send(err);
// //   }

// // }
// // );





// //router to call registerUser function from a smart contract where user_name and org_name is passed in request body
// router.post("/registerUser", async function (req, res, next) {
//   try {
//     console.log(req.body);
//     // get a wallet using PRIVATE_KEY
//     const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
//     const signer = wallet.connect(provider);
//     // get the contract instance
//     const contract = new ethers.Contract(smartContractAddress, abi, signer);
//     const tx = await contract.RegisterUser(
//       req.body.username,
//       req.body.adharno
//       // req.body.org_name
//     );
//     //await tx.wait();
//     console.log("tx: ", tx);
//     res.status(200).json(tx);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// });

// ///////////////////////////////////////////////////------------------WORKING--||||-------------------------///////////////////////////////////////////////////////


// // router to call registeragency function from a smart contarct where name of the organization is the parameter

// router.post("/registerAgency",async function (req,res,next)
// {
//     try{
//           console.log(req.body);
//           //get a wallet using Private Key
//           const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//           console.log(wallet.address);
//           const signer=wallet.connect(provider);
//           // get the instance of contract
//           //console.log(signer);
//           const contract=new ethers.Contract(smartContractAddress,abi,signer);
//           //console.log(contract);
//           const tx=await contract.RegisterAgency(
//             req.body.agencyname,
//           );
//           console.log("Tx : ",tx);
//          // await tx.wait();
          
//           res.status(200).json(tx);
//     }
//     catch(err)
//     {
//       res.status(404).send(err);
//     }

// });

// ///////////////////////////////////////////////////------------------WORKING--||||-------------------------///////////////////////////////////////////////////////


// router.post("/registerAgencyUser",async function (req,res,next)
// {
//   try{
//     console.log(req.body);
//     //get a wallet using Private Key
//     const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//     const signer=wallet.connect(provider);
//     // get the instance of contract
//     const contract=new ethers.Contract(smartContractAddress,abi,signer);
//     const tx=await contract.RegisterAgencyUser(
//       //      *******        ID is also  to be passed // Not clear whether to get id from body or from wallet
//       req.body.id,
//       req.body.useraddress,
//     );
//     await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });

// ///////////////////////////////////////////Above Did not work//////////////////////////////////////

// router.post("/agencyAdmins",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.AgencyAdmins(
//     req.body.id
//   );
//   //await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });

// /////////////////////////////////////////////////////WORKING/////////////////////////////////////////////////////////////////

// router.post("/markAdminPresent",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.MarkAdminPresent(
//     req.body.id,
//     req.body.user
//   );
//   //await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });

// router.post("/markAdminAbsent",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.MarkAdminAbsent(
//     req.body.id,
//     req.body.user
//   );
//   await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });

// router.post("/isAdmin",async function (req,res,next)
// {
// try{
//   console.log(req.body);
//   const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
//   const signer=wallet.connect(provider);
//   const contract=new ethers.Contract(smartContractAddress,abi,signer);
//   const tx=await contract.isAdmin(
//     req.body.id,
//   );
//   await tx.wait();
//     console.log("Tx : ",tx);
//     res.status(200).json(tx);
// }
// catch(err)
// {
// res.status(404).send(err);
// }
// });

// module.exports = router;
var express = require("express");
var ethers = require("ethers");
var router = express.Router();

require("dotenv").config();

let abi = require("../contracts/DataVault.json").abi;
const smartContractAddress = "0x24079D400bE84984ABe17E587B650F247e2df2A4";
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





router.get("/getAllAgencyRegAadhaarCount",async function (req,res,next)
{
  try{
    console.log(req.body);
    //get a wallet using Private Key
    const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
    const signer=wallet.connect(provider);
    // get the instance of contract
    const contract=new ethers.Contract(smartContractAddress,abi,signer);
    const tx=await contract.getAllAgencyRegAadhaarCount();
    await tx.wait();
    console.log("Tx : ",tx);
    res.status(200).json(tx);
}
catch(err)
{
res.status(404).send(err);
}
});



router.get("/getAllAgencyData",async function (req,res,next)
{
  try{
    console.log(req.body);
    //get a wallet using Private Key
    const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
    const signer=wallet.connect(provider);
    // get the instance of contract
    const contract=new ethers.Contract(smartContractAddress,abi,signer);
    const tx=await contract.getAllAgencyData();
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

router.get("/getAllAgencyAdmins",async function (req,res,next)
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


router.get("/checkPermission",async function (req,res,next)
{
try{
  console.log(req.body);
  const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
  const signer=wallet.connect(provider);
  const contract=new ethers.Contract(smartContractAddress,abi,signer);
  const tx=await contract.CheckPermissionAccess(
    req.body.address
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


router.get("/getMyAadharData",async function (req,res,next)
{
try{
  console.log(req.body);
  const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
  const signer=wallet.connect(provider);
  const contract=new ethers.Contract(smartContractAddress,abi,signer);
  const tx=await contract.getMyAadharData(
    req.body.address
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


router.get("/getAllAdharInAgency",async function (req,res,next)
{
try{
  console.log(req.body);
  const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
  const signer=wallet.connect(provider);
  const contract=new ethers.Contract(smartContractAddress,abi,signer);
  const tx=await contract.getAllAadharInAgency(
    req.body.id,
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
    req.body.user,
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


router.post("/markRegAadhaarAbsent",async function (req,res,next)
{
try{
  console.log(req.body);
  const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
  const signer=wallet.connect(provider);
  const contract=new ethers.Contract(smartContractAddress,abi,signer);
  const tx=await contract.MarkRegAadhaarAbsent(
    req.body.id,
    req.body.address
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


router.post("/markRegAadhaarPresent",async function (req,res,next)
{
try{
  console.log(req.body);
  const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
  const signer=wallet.connect(provider);
  const contract=new ethers.Contract(smartContractAddress,abi,signer);
  const tx=await contract.MarkRegAadhaarPresent(
    req.body.id,
    req.body.address
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


module.exports = router;