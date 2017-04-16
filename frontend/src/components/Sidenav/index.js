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
        setTimeout(() => {
          $body.removeClass('sidebar-mobile-open');
        }, 0);
      });
    }
  }

  render() {
    const { isFixedSidebar, colorOption } = this.props;
    return (
      <nav
        className={classnames('app-sidebar', {
          'bg-color-light': ['31', '32', '33', '34', '35', '36'].indexOf(
            colorOption
          ) >= 0,
          'bg-color-dark': ['31', '32', '33', '34', '35', '36'].indexOf(
            colorOption
          ) < 0
        })}
      >
        <section
          className={classnames('sidebar-header', {
            'bg-color-dark': ['11', '31'].indexOf(colorOption) >= 0,
            'bg-color-light': colorOption === '21',
            'bg-color-primary': ['12', '22', '32'].indexOf(colorOption) >= 0,
            'bg-color-success': ['13', '23', '33'].indexOf(colorOption) >= 0,
            'bg-color-info': ['14', '24', '34'].indexOf(colorOption) >= 0,
            'bg-color-warning': ['15', '25', '35'].indexOf(colorOption) >= 0,
            'bg-color-danger': ['16', '26', '36'].indexOf(colorOption) >= 0
          })}
        >
          <span style={{ position: 'relative', top: 5, paddingRight: 10 }}>
            <i className="material-icons">cloud</i>
          </span>
          <Link to="/" className="brand">{APPCONFIG.brand}</Link>
        </section>

        <section className="sidebar-content">
          <SidenavContent />
        </section>

        <section className="sidebar-footer">
          <ul className="nav">
            <li>
              <a target="_blank" href={APPCONFIG.productLink}>
                <i className="nav-icon material-icons">help</i>
                <span className="nav-text">
                  <span>Help</span> & <span>Support</span>
                </span>
              </a>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isFixedSidebar: state.settings.isFixedSidebar,
  colorOption: state.settings.colorOption
});

const mapDispatchToProps = dispatch => ({
  handleUpdateSelectedIndex: (index) => {
      // console.log(index);
    dispatch(push(index));
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
