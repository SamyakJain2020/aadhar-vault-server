// // SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.9;

// // for Hardhat
// import "@openzeppelin/contracts/utils/Strings.sol";
// import "@openzeppelin/contracts/utils/math/SafeMath.sol";
// import "@openzeppelin/contracts/access/AccessControl.sol";

// //for remix
// // import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Strings.sol";
// // import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";

// enum Status {
//     ACTIVE,
//     INACTIVE
// }

// //  Status = [ACTIVE, INACTIVE]

// struct ORG {
//     string ORGNAME;
//     uint256 ORGID;
//     mapping(address => Status) ORGUSERS;
//     mapping(address => Status) ORGADMINS;
//     address[] users;
//     address[] admins;
// }

// struct user {
//     string name;
//     address ad;
//     string AadharRef;
// }

// contract DataVault is AccessControl{
//     mapping(uint256 => ORG) oraganisations;
//     uint256[] organisationIds;

//     mapping(address => user) users;
//     address[] usersIds;

//     event OrganisationRegistered(uint256 orgid, string orgname);
//     event UserRegistered(address user, string name, string AadharRef);

//     modifier isAdmin(uint256 id) {
//         require(
//             msg.sender == address(this) &&
//                 oraganisations[id].ORGADMINS[msg.sender] == Status.ACTIVE,
//             "User Not an Active Organisation Admin"
//         );
//         _;
//     }
//     modifier isActiveUser(uint256 id) {
//         require(
//             msg.sender == address(this) &&
//                 oraganisations[id].ORGUSERS[msg.sender] == Status.ACTIVE,
//             "User Not an Active Organisation User"
//         );
//         _;
//     }
//     modifier isActive(uint256 id) {
//         require(
//             oraganisations[id].ORGUSERS[msg.sender] == Status.ACTIVE ||
//                 oraganisations[id].ORGADMINS[msg.sender] == Status.ACTIVE,
//             "User Not an Active Organisation User or Admin"
//         );
//         _;
//     }

//     function registerOrganisation(string memory org_name)
//         public
//         returns (uint256)
//     {
//         organisationIds.push();
//         uint256 index = organisationIds.length - 1;
//         address admin = msg.sender;

//         oraganisations[index].ORGNAME = org_name;
//         oraganisations[index].ORGID = organisationIds.length;
//         oraganisations[index].ORGUSERS[admin] = Status.ACTIVE;
//         oraganisations[index].ORGADMINS[admin] = Status.ACTIVE;
//         oraganisations[index].users.push(admin);
//         oraganisations[index].admins.push(admin);
//         organisationIds[index] = organisationIds.length;

//         emit OrganisationRegistered(oraganisations[index].ORGID, org_name);
//         return oraganisations[index].ORGID;
//     }

//     // organistion active ORGADMIN can add to ORGUSERS to the organisation
//     function addOrgUser(uint256 id, address user)
//         public
//         isAdmin(id)
//         returns (bool)
//     {
//         // using modifier to check if user is admin
//         oraganisations[id].ORGUSERS[user] = Status.ACTIVE;
//         oraganisations[id].users.push(user);
//         emit UserRegistered(user, users[user].name, users[user].AadharRef);
//         return true;
//     }

//     // organistion active ORGADMIN can add to ORGADMINS to the organisation
//     function addOrgAdmin(uint256 id, address admin)
//         public
//         isAdmin(id)
//         returns (bool)
//     {
//         // using modifier to check if user is admin
//         oraganisations[id].ORGADMINS[admin] = Status.ACTIVE;
//         oraganisations[id].admins.push(admin);
//         return true;
//     }

//     // Register User with custom Aadhar Reference
//     function registerUser(string memory name, string memory AadharRef)
//         public
//         returns (address)
//     {
//         usersIds.push();
//         uint256 index = usersIds.length - 1;
//         address user = msg.sender;
//         users[user].name = name;
//         users[user].ad = user;
//         users[user].AadharRef = AadharRef;
//         usersIds[index] = user;
//         emit UserRegistered(user, name, AadharRef);
//         return usersIds[index];
//     }

//     // Register User with default Aadhar Reference as msg.sender (User Wallet Address)
//     function registerUser(string memory name) public returns (address) {
//         usersIds.push();
//         uint256 index = usersIds.length - 1;
//         address user = msg.sender;
//         users[user].name = name;
//         users[user].ad = user;

//         // TODO BY @raenyx AND SOHAM
//         users[user].AadharRef = ""; // to convert address(msg.sender) to string

//         usersIds[index] = user;
//         emit UserRegistered(user, name, users[user].AadharRef);
//         return usersIds[index];
//     }

//     // fetching user details using user address/id
//     function getUser(address a) public view returns (user memory) {
//         return users[a];
//     }

//     // fetching user aadharRef using user address/id
//     function getUserAadharRef(address a) public view returns (string memory) {
//         return users[a].AadharRef;
//     }

//     //get all orgusers of an organisation
//     function getAllOrgUsers(uint256 id) public view returns (address[] memory) {
//         return oraganisations[id].users;
//     }

//     //get all orgadmins of an organisation
//     function getAllOrgAdmins(uint256 id)
//         public
//         view
//         returns (address[] memory)
//     {
//         return oraganisations[id].admins;
//     }

//     // get all organisations in the system
//     function getAllOrganisations() public view returns (uint256[] memory) {
//         return organisationIds;
//     }

//     // get all users in the system
//     function getAllUsers() public view returns (address[] memory) {
//         return usersIds;
//     }

//     // Function IsUserRegisteredForOrganization -> Check if the user is registered for the organisation
//     function isUserRegisteredForOrganization(uint256 id, address user)
//         public
//         view
//         returns (bool)
//     {
//         return oraganisations[id].ORGUSERS[user] == Status.ACTIVE;
//     }
    
//     //function to set user inactive only done by admin @raenyx @soham
//     //function to set admin inactive Only done by admin (Check if admin is not making himself inactive) @raenyx @soham

// }



//------------------------------------------------------------------------------------------------------------------------------------------
// //SPDX-License-Identifier: MIT
// pragma solidity ^0.8.7;

// enum Status{
//     Absent,
//     Present
// }

// struct ConsumerAgency{ 
//     string agency_name;
//     uint256 agencyID; // primary key
//     mapping(address => Status) agency_AdminStatus;
//     mapping(address => Status) agency_UserStatus;
//     // mapping(uint256 => AdharHolder[]) AdhartoAgency;
//     address[] AdminList;
//     address[] UserList; //Commenting to check a dictionary ka solution
// }

// struct AdharHolder{
//     string AadharName;
//     address ssi_address;// primary key

//     string AadharNo; 
// }
// contract DataVault {
//     mapping(uint256 => ConsumerAgency) public RegAgencies; // Primary key of struct is the key of this dict
//     mapping(address => AdharHolder) public RegAdharHolders;
//     uint256 ID;

//     event AgencyRegistered(string name, address regAdmin);
//     event AadharHolderRegistered(address user, string name, string Aadharno);
//     // event Test(Status status,address[] adarray);
//     constructor(){
//         ID = 0;
//     }
//         // @samyak : There is a problem in this function that user can 
//         // can register with same details but different ssi address
//     modifier isAdmin(uint256 id){
//         require(RegAgencies[id].agency_AdminStatus[msg.sender] == Status.Present,
//          "Access denied");
//          _;
//     }     
//     function RegisterUser(string memory name, string memory aadharno) public returns(address){
//         require(RegAdharHolders[msg.sender].ssi_address == 0x0000000000000000000000000000000000000000,
//         "User already registered");
//             RegAdharHolders[msg.sender].AadharName = name;
//             RegAdharHolders[msg.sender].ssi_address = msg.sender;
//             RegAdharHolders[msg.sender].AadharNo = aadharno;
//             emit AadharHolderRegistered(msg.sender, RegAdharHolders[msg.sender].AadharName, 
//             RegAdharHolders[msg.sender].AadharNo);
//             return msg.sender;
//         }

//     function RegisterAgency(string memory name) public returns(uint){
//         ID += 1;
//         RegAgencies[ID].agency_name = name;
//         RegAgencies[ID].agencyID = ID;
//         RegAgencies[ID].AdminList.push(msg.sender);
//         RegAgencies[ID].agency_AdminStatus[msg.sender] = Status.Present;
        
//         emit AgencyRegistered(RegAgencies[ID].agency_name, msg.sender);
//         return RegAgencies[ID].agencyID;
//     }
// //, If primary key is changed to adhar no then this has to be changed
// // tested for 3 crucial cases
//     function RegisterAgencyUser(uint256 id, address useraddress) public {
//         require(RegAgencies[id].agency_AdminStatus[msg.sender] == Status.Present &&
//          RegAdharHolders[useraddress].ssi_address !=  0x0000000000000000000000000000000000000000,
//         "Only Admin can add user in the consumer agency or user does not exist");
//         RegAgencies[id].agency_UserStatus[useraddress] = Status.Present;
//         RegAgencies[id].UserList.push(useraddress);// Analyse Redundancy
//         // RegAgencies[ID].AdhartoAgency[ID] = ;
//     }

//     function AddAgencyAdmin(uint256 id, address newadmin) public isAdmin(id){
         
//          RegAgencies[id].agency_AdminStatus[newadmin] = Status.Present;
//          RegAgencies[id].AdminList.push(newadmin);
//         //  emit Test(RegAgencies[id].agency_AdminStatus[newadmin],RegAgencies[id].AdminList);
//     }

//     function MarkUserAbsent(uint256 id, address user) public isAdmin(id){
//         RegAgencies[id].agency_UserStatus[user] = Status.Absent;
//     }

//     function MarkUserPresent(uint256 id, address user) public isAdmin(id){
//         RegAgencies[id].agency_UserStatus[user] = Status.Present;
//     }

//     function MarkAdminAbsent(uint256 id, address user) public isAdmin(id){
//         require(RegAgencies[id].AdminList.length > 1);
//         RegAgencies[id].agency_AdminStatus[user] = Status.Absent;
//     }

//     function MarkAdminPresent(uint256 id, address user) public isAdmin(id){
//         RegAgencies[id].agency_UserStatus[user] = Status.Present;
//     }

//     // function RetrieveAgencyAdharHolders(uint256 id) public view returns(string memory){
//     //     return RegAgencies[id].AdhartoAgency[id].AadharNo;
//     // }
//     function AgencyAdmins(uint256 id) public view returns(address[] memory){
//         return RegAgencies[id].AdminList;
//     } 

//     // function getAgencyAdharHolderAddress(uint256 id) public view returns(address[] memory){
//     //    return RegAgencies[id].UserList;
//     // }

//     // function getAadharHolder(address a) public view returns (AdharHolder memory) {
//     //     return RegAdharHolders[a];
//     // }

//     // function getAgencyHolderStruct(uint256 id)public view returns (AdharHolder[] memory){
//     //     AdharHolder[] memory agencyAdharList;
//     //     address[] memory temp = getAgencyAdharHolderAddress(id);
//     //     for(uint256 i = 0;i<temp.length;i+=1){
//     //         agencyAdharList.push(getAadharHolder(temp[i]));
//     //     }
//     //     return agencyAdharList;
//     // }

    

// }



//-----------------------------------------------------------------------------------------------------------------------------

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

enum Status{
    Absent,
    Present
}

struct AadhaarHolder{
    address ssi_address;
    string AadhaarHolderName;
    string AadhaarSignature; 
}

struct ConsumerAgency{
    uint256 agencyID;
    string agency_name;
    address[] AdminList;
    //address[] RegAadharList;
    AadhaarHolder[] RegAadharList;  // will it consume more gas fee compared to above
    mapping(address => Status) agency_AdminStatus;
    mapping(address => Status) agency_RegAadhaarStatus;
}

contract DataVault {
    uint256 ID; // later to be assigned on server


    mapping(uint256 => ConsumerAgency) public RegAgencies;
    mapping(address => AadhaarHolder) public RegAadhaarHolders;
    

    event AgencyRegistered(string name, address regAdmin);
    event AadhaarHolderRegistered(address RegAadhaarAddress, string name, string AadharSig);
   

    constructor(){
        ID = 0;
    } // why we use constructor here??


//*********************MODIFIERS START***************************
    modifier isAdmin(uint256 id){
        require(RegAgencies[id].agency_AdminStatus[msg.sender] == Status.Present,
         "Access denied");
         _;
    }

    modifier isAadharHolderAlreadyRegister(address AadharHolderWalletAddress){
        require(RegAadhaarHolders[AadharHolderWalletAddress].ssi_address != 0x0000000000000000000000000000000000000000,
        "User Does Not Exist");
        _;
    }
//*********************MODIFIERS END***************************


//*******************ALL REGISTERATION FUNCTIONS START***************************
    function RegisterNewAadhaarHolder(string memory name, string memory AadharSig) public returns(bool){
        require(RegAadhaarHolders[msg.sender].ssi_address == 0x0000000000000000000000000000000000000000,"User already Exist");
        RegAadhaarHolders[msg.sender].AadhaarHolderName = name;
        RegAadhaarHolders[msg.sender].ssi_address = msg.sender;
        RegAadhaarHolders[msg.sender].AadhaarSignature = AadharSig;
        emit AadhaarHolderRegistered(msg.sender, RegAadhaarHolders[msg.sender].AadhaarHolderName, //Can be removed
        RegAadhaarHolders[msg.sender].AadhaarSignature);
        return true;  // for acknowledment LATTER TO BE REMOVED
    }

    function RegisterAgency(string memory name) public returns(uint){  // should take id as parameter
        ID += 1; // to be done in node layer
        RegAgencies[ID].agency_name = name;
        RegAgencies[ID].agencyID = ID;
        RegAgencies[ID].AdminList.push(msg.sender);
        RegAgencies[ID].agency_AdminStatus[msg.sender] = Status.Present;
        emit AgencyRegistered(RegAgencies[ID].agency_name, msg.sender);
        return RegAgencies[ID].agencyID;  // to be done in node layer
    }

    function RegisterAadhaarInAgency(uint256 id, address AadharHolderWalletAddress) public isAdmin(id) isAadharHolderAlreadyRegister(AadharHolderWalletAddress){
        RegAgencies[id].agency_RegAadhaarStatus[AadharHolderWalletAddress] = Status.Present;
        RegAgencies[id].RegAadharList.push(RegAadhaarHolders[AadharHolderWalletAddress]);
    } 
//*******************ALL REGISTERATION FUNCTIONS END***************************


//*******************ALL RETRIVAL FUNCTIONS START***************************
    function getAllAgencyAdmins(uint256 id) public view returns(address[] memory){
        return RegAgencies[id].AdminList;
    }

    function getAllAadharInAgency(uint256 id) public view returns(AadhaarHolder[] memory){
        return RegAgencies[id].RegAadharList;
    }
//*******************ALL RETRIVAL FUNCTIONS END***************************


//*******************ALL ADMIN FUNCTIONS START***************************
    function MarkRegAadhaarAbsent(uint256 id, address RegAadhaarAddress) public isAdmin(id){
        RegAgencies[id].agency_RegAadhaarStatus[RegAadhaarAddress] = Status.Absent;
    }

    function MarkRegAadhaarPresent(uint256 id, address RegAadhaarAddress) public isAdmin(id){
        RegAgencies[id].agency_RegAadhaarStatus[RegAadhaarAddress] = Status.Present;
    }

    function MarkAdminAbsent(uint256 id, address RegAadhaarAddress) public isAdmin(id){
        require(RegAgencies[id].AdminList.length > 1);
        RegAgencies[id].agency_AdminStatus[RegAadhaarAddress] = Status.Absent;
    }

    function MarkAdminPresent(uint256 id, address RegAadhaarAddress) public isAdmin(id){
        RegAgencies[id].agency_RegAadhaarStatus[RegAadhaarAddress] = Status.Present;
    }

    function AddAgencyAdmin(uint256 id, address newadminAddress) public isAdmin(id){ 
        RegAgencies[id].AdminList.push(newadminAddress);
        RegAgencies[id].agency_AdminStatus[newadminAddress] = Status.Present;
    } 
//*******************ALL ADMIN FUNCTIONS END***************************
}

/* 
ABI----[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "RegAadhaarAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "AadharSig",
				"type": "string"
			}
		],
		"name": "AadhaarHolderRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "regAdmin",
				"type": "address"
			}
		],
		"name": "AgencyRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "newadminAddress",
				"type": "address"
			}
		],
		"name": "AddAgencyAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "RegAadhaarAddress",
				"type": "address"
			}
		],
		"name": "MarkAdminAbsent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "RegAadhaarAddress",
				"type": "address"
			}
		],
		"name": "MarkAdminPresent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "RegAadhaarAddress",
				"type": "address"
			}
		],
		"name": "MarkRegAadhaarAbsent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "RegAadhaarAddress",
				"type": "address"
			}
		],
		"name": "MarkRegAadhaarPresent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "RegAadhaarHolders",
		"outputs": [
			{
				"internalType": "address",
				"name": "ssi_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "AadhaarHolderName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "AadhaarSignature",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "RegAgencies",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "agencyID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "agency_name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "AadharHolderWalletAddress",
				"type": "address"
			}
		],
		"name": "RegisterAadhaarInAgency",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "RegisterAgency",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "AadharSig",
				"type": "string"
			}
		],
		"name": "RegisterNewAadhaarHolder",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getAllAadharInAgency",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "ssi_address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "AadhaarHolderName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "AadhaarSignature",
						"type": "string"
					}
				],
				"internalType": "struct AadhaarHolder[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getAllAgencyAdmins",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
*/