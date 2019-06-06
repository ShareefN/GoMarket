import React, { component } from 'react';
import logo from './logo.png';

mobiscroll.settings = {
  lang: 'ar',
  theme: 'ios'
};

const logInBtn = [{
  text: 'Log In',
  handler: 'set'
}];

class UserLogin extends component{
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
          ref="login"
          display="center"
          buttons={logInBtn}
      >
          <mobiscroll.Form>
              <mobiscroll.FormGroup inset>
                  <label>
                      <input type="text" name="email" placeholder="Email" required = {true} />
                  </label>
                  <label>
                      <input name="password" type="text" placeholder="Password" required={true} data-password-toggle="true" data-icon-show="eye" data-icon-hide="eye-blocked" />
                  </label>
              </mobiscroll.FormGroup>
            </mobiscroll.Form>  
      </mobiscroll.Popup>
  </div>
        )
    }

}

export default UserLogin;