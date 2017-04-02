import React from 'react';
import HorizontalLinear from './HorizontalLinear';
import VerticalLinear from './VerticalLinear';
import HonrizontalNonLinear from './HonrizontalNonLinear';
import VerticalNonLinear from './VerticalNonLinear';


const Stepper = () => {
    return(
        <div className="container-fluid with-maxwidth chapter">
            <HorizontalLinear />
            <VerticalLinear />
            <HonrizontalNonLinear />
            <VerticalNonLinear />
        </div>
    )
}

module.exports = Stepper;
