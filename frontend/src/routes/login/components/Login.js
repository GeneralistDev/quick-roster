import React from 'react';
import APPCONFIG from 'constants/Config';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: APPCONFIG.brand
        };
    }

    render() {
        return (
            <div className="page-login">

                <div className="main-body">
                    <div className="body-inner">
                        <div className="card bg-white">
                            <div className="card-content">

                                <section className="logo text-center">
                                    <h1><a href="#/">{this.state.brand}</a></h1>
                                </section>

                                <form className="form-horizontal">
                                    <fieldset>
                                        <div className="form-group">
                                            <TextField
                                                floatingLabelText="Email"
                                                fullWidth={true}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                floatingLabelText="Password"
                                                type="password"
                                                fullWidth={true}
                                            />
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="card-action no-border text-right">
                                <a href="#/" className="color-primary">Login</a>
                            </div>
                        </div>

                        <div className="additional-info">
                            <a href="#/sign-up">Sign up</a>
                            <span className="divider-h"></span>
                            <a href="#/forgot-password">Forgot your password?</a>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}

module.exports = Login;
