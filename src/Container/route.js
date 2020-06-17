import React, { Component } from "react";
import {  Switch, Route } from "react-router-dom";
import {Router} from 'react-router'
import Login from './Login/login'
import SignUpForm from './SignUp/signupForm'
import history from '../history'
import Home from './Home/home'
import DoctorForm from './Doctor/DoctorForm'
import Web3 from 'web3'
import loginAbi from '../build/contracts/Login'
export default class Routes extends Component {

    // constructor(props){
    //     super(props)
    //     let state = {
    //         name:'',
    //         age:'',
    //         gender:'',
    //         occupation:''
    //     }
    // }


    

    //this function will execute before render function
    async componentWillMount() {
        await this.loadWeb3();
    }

    async Login(name, password,event) {
        try {
            event.preventDefault()
            console.log("111111111111111", name)
            console.log(password)
            const web3 = window.web3;
            //getting the our personal account that we are using 
            const account = await web3.eth.getAccounts()
            console.log(account[0])
            //getting network ID
            const networkID = await web3.eth.net.getId()
            console.log(networkID)
            //getting network data
            console.log(loginAbi)
            const networkData = loginAbi.networks[networkID]
            console.log(networkData)
            if (networkData) {
                const abi = loginAbi.abi;
                const address = networkData.address;
                const contract = new web3.eth.Contract(abi, address)
                console.log(contract)
                const isUser = await contract.methods.login(name, password).call()
                console.log(isUser)
            } else {
                window.alert("No smart contract found on this network")
            }
        } catch (error) {
            console.log(error)
            window.alert("Not an existing member, please sign up")
            return history.push('/signup')
        } 

    }

    //signUp method
    //uint _id, string memory _name, string memory _emailId,string memory _password, address _userAddress
    async signUp(age, name, emailID, password, userAddress, gender, occupation,event) {
        try {
            
            event.preventDefault();
            console.log(age, name, emailID, password, userAddress, gender, occupation)
            console.log("2313123")
            //set counter count = =1
            const web3 = window.web3;
            //getting network data
            console.log(loginAbi)
            const account = await web3.eth.getAccounts()
            console.log(account[0])
            //getting network ID
            const networkID = await web3.eth.net.getId()
            console.log(networkID)
            const networkData = loginAbi.networks[networkID]
            console.log(networkData)
            if (networkData) {
                const abi = loginAbi.abi;
                const address = networkData.address;
                const contract = new web3.eth.Contract(abi, address)
                console.log(contract.methods)
                contract.methods.owner().call().then(console.log)
                await contract.methods.signup(parseInt(age), name, emailID, password, userAddress, gender, occupation)
                    .call().then((result)=>{
                        console.log(result)
                    })
                window.alert("Welcome to DAPP CARE")
                return history.push('/home')
            } else {
                window.alert("No smart contract found on this network")
            }
        } catch (error) {
            console.log(error)
            window.alert("Some technical error occured")
        }
    }

    //loading Web3
    async loadWeb3() {
        if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
            await window.ethereum.enable()
        } if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
        } else {
            window.alert("Please use metamask")
        }
        console.log(window.web3)
    }

    render() {
        console.log("history", history)
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact render={(props) => (<Login {...props} checkuser={this.Login} />)} />
                    <Route path="/signup" render={(props) => (<SignUpForm {...props} signup={this.signUp} />)} />
                    <Route path="/home" exact render={(props) => (<Home {...props} name="Nakul" age="21" gender="MALE" occupation="Student"/>)} />
                    <Route path="/home/doctorsform" exact component={DoctorForm} />
                </Switch>
            </Router>

        )
    }
}
/** <Route path="/" exact render={(props) => (<Login {...props} checkuser = {this.Login} />)}/>
                    <Route path="/signup" render={(props) => (<SignUpForm {...props} signup = {this.signUp} />)} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/home/doctorsform" exact component={DoctorForm} /> */