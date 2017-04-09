import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Contact = () => {
    return (
        <section className="chapter">

            <article className="article">
                <section className="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">How can we help you?</h1>
                    </div>
                    <p className="hero-tagline">Feel free to contact us if you have any questions</p>
                </section>
            </article>

            <article className="article article-dark">
                <h2 className="article-title text-center no-margin-top">Contact Us</h2>
                <div className="container-fluid with-maxwidth">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="box box-transparent">
                                <div className="box-body padding-lg-h">
                                    <h4>Get In Touch</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur necessitatibus ea possimus est quis cumque vel saepe. Eum, quas, ducimus.</p>
                                    <div className="divider divider-solid"></div>
                                    <p>123 Mountain View <br /> Santa Clara, C.A. <br /> USA</p>
                                    <div className="divider divider-solid"></div>
                                    <p>
                                        <strong>E:</strong> mail@site.com
                                        <br />
                                        <strong>P:</strong> +1 234 56789 
                                        <br /> 
                                        <strong>S:</strong> www.site.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="box box-transparent">
                                <div className="box-body padding-lg-h">
                                    <h4>Contact</h4>
                                    <form name="contactForm">
                                        <div className="form-group">
                                            <TextField
                                                hintText="Name"
                                                fullWidth={true}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                hintText="Email"
                                                fullWidth={true}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                hintText="Message"
                                                fullWidth={true}
                                                multiLine={true}
                                                rows={3}
                                            />
                                        </div>
                                        <div className="divider"></div>
                                        <RaisedButton primary={true} label="Submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

        </section>

    )
}

module.exports = Contact;
