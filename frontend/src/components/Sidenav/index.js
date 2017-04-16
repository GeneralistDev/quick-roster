import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classnames from 'classnames';
import SidenavContent from './SidenavContent';
import APPCONFIG from 'constants/Config';
import { Link, hashHistory } from 'react-router';

class Sidebar extends React.Component {
    componentDidMount() {

        // AutoCloseMobileNav
        const $body = $('#body');

        if (APPCONFIG.AutoCloseMobileNav) {
            hashHistory.listen((location) => {
                setTimeout(function() {
                    $body.removeClass('sidebar-mobile-open');
                }, 0);
            })
        }
    }

    render() {
        const { isFixedSidebar, colorOption } = this.props;
        return (
            <nav 
                className={classnames('app-sidebar', {
                    'bg-color-light': ['31','32','33','34','35','36'].indexOf(colorOption) >= 0,
                    'bg-color-dark': ['31','32','33','34','35','36'].indexOf(colorOption) < 0 })}
            >
                <section
                    className={classnames('sidebar-header', {
                        'bg-color-dark': ['11','31'].indexOf(colorOption) >= 0,
                        'bg-color-light': colorOption === '21',
                        'bg-color-primary': ['12','22','32'].indexOf(colorOption) >= 0,
                        'bg-color-success': ['13','23','33'].indexOf(colorOption) >= 0,
                        'bg-color-info': ['14','24','34'].indexOf(colorOption) >= 0,
                        'bg-color-warning': ['15','25','35'].indexOf(colorOption) >= 0,
                        'bg-color-danger': ['16','26','36'].indexOf(colorOption) >= 0 })}
                >
                    <svg className="logo-img logo-react" viewBox="0 0 3925 3525" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="react-dot" stroke="none" cx="1960" cy="1760" r="355"></circle>
                        <g className="react-curve" strokeWidth="170" fill="none">
                            <ellipse cx="2575" cy="545" rx="715" ry="1875" transform="rotate(30)"></ellipse>
                            <ellipse cx="1760" cy="-1960" rx="715" ry="1875" transform="rotate(90)"></ellipse>
                            <ellipse cx="-815" cy="-2505" rx="715" ry="1875" transform="rotate(-210)"></ellipse>
                        </g>
                    </svg>
                    <Link to="/" className="brand">{APPCONFIG.brand}</Link>
                </section>

                <section className="sidebar-content">
                    <SidenavContent />
                </section>
            </nav>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        isFixedSidebar: state.settings.isFixedSidebar,
        colorOption: state.settings.colorOption
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleUpdateSelectedIndex: (index) => {
            // console.log(index);
            dispatch( push(index) );
        }
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);

