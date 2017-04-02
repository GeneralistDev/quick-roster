import React from 'react';
import AutoComplete from './AutoComplete';
import Checkbox from './Checkbox';
import Chip from './Chip';
import Datepicker from './DatePicker';
import Dialog from './Dialog';
import RadioButton from './RadioButton';
import SelectField from './SelectField';
import Slider from './Slider';
import TextField from './TextField';
import TimePicker from './TimePicker';
import Toggle from './Toggle';
import InputVariants from './InputVariants';

const Elements = () => {
    return(
        <div className="container-fluid with-maxwidth chapter">

            <RadioButton />
            <Checkbox />
            <Toggle />
            <TextField />
            <SelectField />
            <AutoComplete />
            <Slider />
            <TimePicker />
            <Datepicker />
            <Dialog />
            <Chip />
            <InputVariants />

        </div>
    )
}

module.exports = Elements;
