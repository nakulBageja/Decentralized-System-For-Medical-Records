import React, { Component } from 'react';

/* Import Components */
import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import Button from '../../components/Button'
import history from '../../history';
import { Route, Link } from 'react-router-dom'
// Link is used so that we don't restart the page. 
//It's used instead of href
// <nav><ul><li><Link to = "\"> Home </Link>

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    console.log("signn")
    this.state = {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: '',

      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing'],
      occupationOptions: ['Doctor','Student','Lawyer','Others']

    }
    // this.handleTextArea = this.handleTextArea.bind(this);
    // this.handleAge = this.handleAge.bind(this);
    // this.handleFullName = this.handleFullName.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
    // this.handleCheckBox = this.handleCheckBox.bind(this);
    // () =>this.handleInput = () =>this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, name: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState({age:value})
  }

  // handleInput(e) {
  //   let value = e.target.value;
  //   this.setState({
  //     [e.target.name]:value
  //   })
  // }
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, about: value
      }
    }), () => console.log(this.state.newUser))
  }


  // handleCheckBox(e) {

  //   const newSelection = e.target.value;
  //   let newSelectionArray;

  //   if (this.state.skills.indexOf(newSelection) > -1) {
  //     newSelectionArray = this.state.skills.filter(s => s !== newSelection)
  //   } else {
  //     newSelectionArray = [...this.state.skills, newSelection];
  //   }

  //   this.setState ({
  //     newUser:
  //       { ...prevState.newUser, skills: newSelectionArray }
  //   })
  //   )
  // }


  handleClearForm(event) {

    event.preventDefault();
    this.setState({
      newUser: {
        name: '',
        age: '',
        gender: '',
        occupation:'',
        accountNO:'',
        emailID:'',
        pass:'',
        accountNO:''
      },
    })
  }

  render() {
    console.log("11111111111")
    console.log("router",this.props.location)
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form className="container-fluid">

            <h3>Sign Up</h3>
          
            <div className="form-group">
            <label>Enter your name</label>
            <input type="text" className="form-control" placeholder="Full Name" name = "name"  onChange={e => this.handleChange(e)}/>
          </div>
            {/* Name of the user */}

            {/* blockchain acccount number */}
            <div className="form-group">
                            <label>Blockchain Account Number</label>
                            <input type="text" className="form-control" placeholder="Enter Account Number" name = "accountNO"  onChange={e => this.handleChange(e)}/>
                        </div>
            { /** Email of user */}
            <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" name = "email"  onChange={e => this.handleChange(e)}/>
                        </div>

            { /** Password of user */}
            <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name = "pass"  onChange={e => this.handleChange(e)}/>
                        </div>
            

              {/* Age */}
               <div className="form-group">
                            <label>Age</label>
                            <input type="number" className="form-control" placeholder="Enter your age" name = "age"  onChange={e => this.handleChange(e)}/>
                        </div>

                        <label>Select a gender</label>
        <select
		      id = 'gender'
		      name='gender'
		      value={this.state.gender}
		      onChange={e => this.handleChange(e)}
		      className="form-control">
		      <option value="" disabled>Select Gender</option>
		      {this.state.genderOptions.map(option => {
		        return (
		          <option
		            key={option}
		            value={option}
		            label={option}>{option}</option>
		        );
		      })}
		    </select>

            {/* <Select title={'Gender'}
              name={'gender'}
              options={this.state.genderOptions}
              value={this.state.gender}
              placeholder={'Select Gender'}
              handleChange={() =>this.handleInput}
            /> Age Selection */}
        <label>Select an occupation</label>
        <select
		      id = 'Occupation'
		      name='Occupation'
		      value={this.state.occupation}
		      onChange={e => this.handleChange(e)}
		      className="form-control">
		      <option value="" disabled>Select an Occupation</option>
		      {this.state.occupationOptions.map(option => {
		        return (
		          <option
		            key={option}
		            value={option}
		            label={option}>{option}</option>
		        );
		      })}
		    </select>

            {/* <Select title={'Occupation'}
              name={'Occupation'}
              options={this.state.occupationOptions}
              value={this.state.occupation}
              placeholder={'Select an Occupation'}
              handleChange={() =>this.handleInput}
            />
            occupation */}
             <button type="submit"
                            className="btn btn-secondary"
                            onClick={() => this.props.signup(this.state.age,
                              this.state.name,this.state.emailID,
                              this.state.pass,this.state.accountNO,
                              this.state.gender,this.state.occupation
                              )}
                            >Submit
                            </button>
            <Button
              action={this.handleClearForm}
              type={'secondary'}
              title={'Clear'}
              style={buttonStyle}
            /> {/* Clear the form */}
            
            <Button
              action={() => history.push('/')}
              type={'secondary'}
              title={'Sign in'}
              style={buttonStyle}
            /> {/* Go back to Login form */}
          </form>
        </div>
      </div>

    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px'
}

export default SignUpForm;