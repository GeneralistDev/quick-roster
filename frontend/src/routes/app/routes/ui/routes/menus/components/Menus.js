import React from 'react';
import Menu from './Menu';
import IconMenu from './IconMenu';
import DropdownMenu from './DropdownMenu';

const Menus = () => {
    return(
        <section className="container-fluid with-maxwidth chapter">
            <Menu />
            <IconMenu />
            <DropdownMenu />
        </section>
    )
}

module.exports = Menus;
