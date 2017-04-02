import React from 'react';
import Avatar from './Avatar';
import Badge from './Badge';
import BottomNavigation from './BottomNavigation';
import Callout from './Callout';
import Paper from './Paper';
import Popover from './Popover';
import Progress from './Progress';
import Ribbon from './Ribbon';
import Snackbar from './Snackbar';
import Subheader from './Subheader';
import Tabs from './Tabs';
import Toolbar from './Toolbar';

// Not added: App Bar, Divider, Grid List, Left Nav, Subheader, Toolbar, Menu (it breaks ScrollToTop)
// Lack of: Tooltip, Toast, Accordion

const Components = () => {
    return(
        <div className="container-fluid with-maxwidth chapter">


            <Popover />
            <Snackbar />
            <Avatar />
            <Badge />
            <Tabs />
            <BottomNavigation />
            <Progress />
            <Toolbar />
            <Callout />
            <Ribbon />
            <Paper />

        </div>
    )
}

module.exports = Components;
