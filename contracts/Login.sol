pragma solidity >=0.4.21 <0.7.0;

contract Login{
    
    //owner of the hospital will deploy this contract
    struct ownerStruct  {
        address payable ownerAddress;
        string name;
    }
    uint public numberOfUsers;
    uint public currentlyloggedin;
    ownerStruct public owner ;
    constructor(string memory _name) public{
        owner = ownerStruct(msg.sender,_name);
        numberOfUsers = 0;
    }
    //User 
    struct user{
        uint age;
        string name;
        string emailId;
        string password;
        string occupation;
        string gender;
        address userAddress;
        bool exists;
    }
    //mapping the user to the owner's address
    mapping(address => mapping(address => user))public Users;
    
    //signing up
    function signup(uint _age, string memory _name, string memory _emailId,string memory _password, address _userAddress,string memory _gender,string memory _occupation)public{
        Users[owner.ownerAddress][msg.sender] = user(_age,_name,_emailId,_password,_occupation,_gender, _userAddress,true);
        numberOfUsers++;
    }
    
    //login function with a check modifier
    function login(string memory _name, string memory _password) public check{
     if(keccak256(bytes(Users[owner.ownerAddress][msg.sender].name)) == keccak256(bytes(_name)) && keccak256(bytes(Users[owner.ownerAddress][msg.sender].password)) == keccak256(bytes(_password)) ){
         currentlyloggedin++;
     }else{
         
     }
    }
    
    //modifier for checking whether a user is a member or not
    modifier check(){
          require(Users[owner.ownerAddress][msg.sender].exists,"Not an existing member, please sign up");
        _;
    }
}