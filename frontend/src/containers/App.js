import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import grayTheme from './themes/grayTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // Needed for onTouchTap for Material UI


// = styles =
// 3rd
import 'styles/bootstrap.scss';
// custom
import 'styles/layout.scss';
import 'styles/theme.scss';
import 'styles/ui.scss';
import 'styles/app.scss';


class App extends Component {
    componentDidMount() {}

    render() {
        const { layoutBoxed, navCollapsed, navBehind, fixedHeader, sidebarWidth, theme } = this.props;
        let materialUITheme;
        switch (theme) {
            case 'gray':
                materialUITheme = grayTheme;
                break;
            case 'dark':
                materialUITheme = darkTheme;
                break;
            default:
                materialUITheme = lightTheme;
        }

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(materialUITheme)}>
                <div id="app-inner">
                    <div className="preloaderbar hide"><span className="bar"></span></div>
                    <div
                        className={classnames('full-height', {
                            'fixed-header'  : fixedHeader,
                            'nav-collapsed' : navCollapsed,
                            'nav-behind'    : navBehind,
                            'layout-boxed'  : layoutBoxed,
                            'theme-gray'    : theme == 'gray',
                            'theme-dark'    : theme == 'dark',
                            'sidebar-sm'    : sidebarWidth == 'small',
                            'sidebar-lg'    : sidebarWidth == 'large'})
                    }>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        layoutBoxed: state.settings.layoutBoxed,
        navCollapsed: state.settings.navCollapsed,
        navBehind: state.settings.navBehind,
        fixedHeader: state.settings.fixedHeader,
        sidebarWidth: state.settings.sidebarWidth,
        theme: state.settings.theme,
    }
}

module.exports = connect(
    mapStateToProps
)(App);
