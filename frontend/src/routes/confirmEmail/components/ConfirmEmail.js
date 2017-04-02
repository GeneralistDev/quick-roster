import React from 'react';

const ConfirmEmail = () => {
    return (
        <div className="page-auth page-confirm-email">
            <div className="main-body">
                <div className="body-inner">
                    <div className="card bg-color-white">
                        <div className="card-content">
                            <div className="logo text-center">
                                <a >Confirm Email</a>
                            </div>

                            <div>
                                <p className="confirm-mail-icon"><span className="material-icons">mail_outline</span></p>
                                <p className="text-center text-small no-margin">
                                   An email has been send to <strong>username@mail.com</strong>. Please check for an email from us and click on the included link to reset your password.
                               </p>
                            </div>

                        </div>
                    </div>
                    <div className="additional-info">
                        <span>Return to <a href="#/login">Login</a></span>
                    </div>
                </div>
            </div>
        </div>

    )
}

module.exports = ConfirmEmail;
