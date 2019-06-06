import React, { component } from 'react';
import logo from './logo.png';

mobiscroll.settings = {
    lang: 'ar',
    theme: 'ios'
  };

  const signUpBtn = [{
    text: 'Sign Up',
    handler: 'set'
}];

class Register extends component {
    showRegister = () => {
        this.refs.register.instance.show();
    }
    
    showLogin = () => {
        this.refs.login.instance.show();
    }
    
    hideLogin = () => {
        this.refs.login.instance.hide();
    }

    render(){
        return(
            <div>
                <img src={logo} style={{width:"150px",height:"100px", paddingRight:"25%"}} href = "#" alt="logo" />
                 <mobiscroll.Popup
                    ref="register"
                    display="center"
                    buttons={signUpBtn}
                >
                    <mobiscroll.Form>
                        <mobiscroll.FormGroup inset>
                            <label>
                                <input type="text" name="email" placeholder="Email" />
                            </label>
                            <label>
                                <input type="text" name="username" placeholder="Username" />
                            </label>
                            <label>
                                <input name="password" type="text" placeholder="Password" data-password-toggle="true" data-icon-show="eye" data-icon-hide="eye-blocked" />
                            </label>
                            <label>
                                <input type="text" name="phoneNumber" placeHolder="Mobile Number"/>
                            </label>
                        </mobiscroll.FormGroup>
                    </mobiscroll.Form>
                </mobiscroll.Popup>
            </div>
        )
    }
}

export default Register;