import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import Button from '../../components/Button'
import history from '../../history'
import GeneratePDF from '../../components/GeneratePDF'
import NavBar from '../../components/Navbar'
class Home extends Component {

    //welcome message  
    name = "Nakul"

    async onSubmitHandler() {
        
        console.log("submitting")
        await GeneratePDF('naku l')
        return history.push('/home/doctorsform')
    }

    render() {

        //check whether the user is doctor or not

        return (
            <div>
                {/* navbar */}
                <NavBar name="nakul" />
                <div className="auth-wrapper">

                    <h3>Your medical certificate</h3>
                    <div className="auth-inner">
                        <form className="container-fluid" >
                        <label>Blood pressure </label>
                        <input id="price_to" value="120/79mmHg" readonly="readOnly"/>
                        <label>Sugar  </label>
                        <input id="price_to" value="120/79mmHg" readonly="readonly"/>
                        <label>Blood pressure </label>
                        <input id="price_to" value="120/79mmHg" readonly="readonly"/>
                        <label>Blood pressure </label>
                        <input id="price_to" value="120/79mmHg" readonly="readonly"/>
                        <label>Blood pressure </label>
                        <input id="price_to" value="120/79mmHg" readonly="readonly"/>
                        <label>Blood pressure </label>
                        <input id="price_to" value="120/79mmHg" readonly="readonly"/>
                            {/* occupation */}
                            <Button
                                action={this.onSubmitHandler}
                                type={'primary'}
                                title={'Submit'}
                                style={buttonStyle}
                            /> { /*Submit */}

                            <Button
                                type={'secondary'}
                                title={'Clear'}
                                style={buttonStyle}
                            /> {/* Clear the form */}
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

export default Home