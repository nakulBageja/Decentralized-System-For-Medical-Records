import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import Button from '../../components/Button'
import history from '../../history'
import GenerateEmail from '../../components/GenerateEmail'
import NavBar from '../../components/Navbar'    
import { Dropdown } from 'react-bootstrap'
const IPFS = require('ipfs-api');
const ipfs = IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });


class DoctorForm extends Component {

    constructor(props) {
        console.log(ipfs)
        super(props);
        this.state = {
          account: '',
          buffer: null,
          contract: null,
          filehash: ''
        }
      }
    //welcome message 
    name = "Nakul"

    captureFile = (event) => {
        console.log("eee")
        event.preventDefault();
        //Fetching the file uploaded
        const file = event.target.files[0];
        //using window.filereader() to read the raw data buffers(contents of the file)
        const fileReader = new window.FileReader();
        //Reading contents of the file
        fileReader.readAsArrayBuffer(file);
        //Load event is fired 
        fileReader.onloadend = () => {
            this.setState({ buffer: Buffer(fileReader.result) })
        }
    }
    //submitting the file
    onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log("Submitting..");
        //IPFS integration
        await ipfs.add(this.state.buffer, (error, result) => {
            console.log("IPFS loading", result)
            console.log(result)
            if (error) {
                console.error(error)
            }
            //sending data to smart contract
            // this.state.contract.methods.set(filehash).send({ from: this.state.account }).then((result) => {
            //     this.setState({ filehash })
            // })
        })//https://ipfs.infura.io/ipfs/QmZdP5fxs1GoE4G2hEh86KVuHz4W5SjBk4quSiW5PKeW9U
     console.log("hhehe")
      return await GenerateEmail()
    
    }

    render() {
        console.log("get")
        //check whether the user is doctor or not

        return (
            <div>
                {/* navbar */}
                <NavBar name="nakul" />
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <label>Please select which category of doctor would you like to meet</label>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Category of doctor
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <label>Available doctors in the selected field</label>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Doctors
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <form onSubmit={this.onSubmitHandler}>
                            {/* <lable>Please attach the file you just downloaded</lable> */}
                            <input type='file' onChange={this.captureFile} />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>


        );
    }

}
const buttonStyle = {
    margin: '10px 10px 10px 10px'
}

export default DoctorForm