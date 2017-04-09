import React from 'react';
import classnames from 'classnames';

const testimonials = [
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione consequuntur ut placeat.',
        avatar: 'assets/images-demo/avatars/1.jpg',
        name: 'Jason Bourne',
        title: 'Senior PM'
    }, {
        content: 'Cum suscipit voluptatem modi repellat consequuntur aliquid nostrum, dolore pariatur consequatur nobis',
        avatar: 'assets/images-demo/avatars/2.jpg',
        name: 'Bella Swan',
        title: 'VP Product'
    }, {
        content: 'Temporibus nesciunt quod magnam dicta ea, quae minima tempore eiciendis nisi ab, perferendis',
        avatar: 'assets/images-demo/avatars/3.jpg',
        name: 'Min Chan',
        title: 'Engineer Lead'
    }
];

class Testimonials extends React.Component {
    state = {
        testimonials: testimonials,
    };

    render() {
        return (
            <section className="container-fluid with-maxwidth chapter" >

                <article className="article">
                    <h2 className="article-title">Basic Testimonials</h2>
                    <div className="row">
                        {
                            this.state.testimonials.map((testimonial, index) => {
                                return (
                                    <div className="col-xl-4" key={index}>
                                        <div className="testimonial">
                                            <span className="testimonial__quote"><i className="material-icons">format_quote</i></span>
                                            <blockquote>
                                                {testimonial.content}
                                            </blockquote>
                                            <img alt="avatar" className="avatar" src={testimonial.avatar} />
                                            <h5>{testimonial.name}</h5>
                                            <span className="title">{testimonial.title}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </article>

                <article className="article">
                    <h2 className="article-title">Basic Testimonials</h2>
                    <div className="row">
                        {
                            this.state.testimonials.map((testimonial, index) => {
                                return (
                                    <div className="col-xl-4" key={index}>
                                        <div className="testimonial testimonial-alt">
                                            <span className="testimonial__quote"><i className="material-icons">format_quote</i></span>
                                            <blockquote>
                                                {testimonial.content}
                                            </blockquote>
                                            <img alt="avatar" className="avatar" src={testimonial.avatar} />
                                            <h5>{testimonial.name}</h5>
                                            <span className="title">{testimonial.title}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </article>

                <article className="article">
                    <h2 className="article-title">Basic Testimonials</h2>
                    <div className="row">
                        {
                            this.state.testimonials.map((testimonial, index) => {
                                return (
                                    <div className="col-xl-4" key={index}>
                                        <div className="box box-default">
                                            <div className="box-body padding-lg-v">
                                                <div className="testimonial testimonial-alt">
                                                    <img alt="avatar" className="avatar" src={testimonial.avatar} />
                                                    <blockquote>
                                                        {testimonial.content}
                                                    </blockquote>
                                                    <p className="citation">{testimonial.name}, {testimonial.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </article>

            </section>
        )
    }
}

module.exports = Testimonials;
