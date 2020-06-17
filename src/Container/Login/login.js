import React, { Component } from 'react'
import history from '../../history'
class login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email:'',
            pass:'',
            accountNO:''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h1>WELCOME</h1>

                    <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Blockchain Account Number</label>
                            <input type="text" className="form-control" placeholder="Enter Account Number" name = "accountNO"  onChange={e => this.handleChange(e)}/>
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" name = "email"  onChange={e => this.handleChange(e)}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name = "pass"  onChange={e => this.handleChange(e)}/>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        {/* submit button will take us to the home page */}
                        <button type="submit"
                            className="btn btn-primary btn-block"
                            onClick={(event) =>{
                                this.props.checkuser(this.state.email,this.state.pass,event)}}
                            >Submit
                            </button>

                        {/* register button will take us to the signup page */}
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            onClick={() => history.push('/signup')}>Register</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </div>
            </div>
        )
    }

}
export default login;