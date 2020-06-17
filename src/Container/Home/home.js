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

    async onSubmitHandler(event) {
        event.preventDefault()
        console.log("submitting")
        await GeneratePDF("Nakul","22","MALE","STUDENT","120/79","80","70","text")
        return history.push('/home/doctorsform')
    }

    render() {

        //check whether the user is doctor or not

        return (
            <div>
                {/* navbar */}
                <NavBar name="nakul" />
                <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div class="wrapper wrapper--w680">
                        <div class="card card-4">
                            <div class="card-body">
                                <h2 class="title">Your medical certificate</h2>
                                <form>
                                    <div class="row row-space">
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label>Name: </label>
                                                <input id="price_to" className='inputCSS' value={this.props.name} disabled />
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label>Age: </label>
                                                <input id="price_to" className='inputCSS' value={this.props.age} disabled />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-space">
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label>Gender: </label>
                                                <input id="price_to" className='inputCSS' value={this.props.gender} disabled />
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label>Occupation: </label>
                                                <input id="price_to" className='inputCSS' value={this.props.occupation} disabled />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-space">
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label>Blood pressure (mmHg) </label>
                                                <input id="price_to" className='inputCSS' value="120/79" disabled />
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label>Sugar Level (mg/dL) </label>
                                                <input id="price_to" className='inputCSS' value="80" disabled />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-space">
                                        <div class="col-2">
                                            <label>Heart Rate (bpm) </label>
                                            <input id="price_to" className='inputCSS' value="70" disabled />
                                        </div>
                                    </div>
                                    <div class="input-group">
                                        <label>Please write down any problems that you are facing</label>
                                        <textarea id="subject" className='inputCSS' name="subject"
                                            placeholder="Write something.."></textarea>
                                    </div>
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
                </div>
            </div>


        );
    }

}
const buttonStyle = {
    margin: '10px 10px 10px 10px'
}

export default Home