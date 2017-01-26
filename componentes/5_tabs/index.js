import React, { Component, PropTypes } from 'react';
import ActiveTab from './ActiveTab';
import TabMenuItem from './TabMenuItem';
import './index.css';

class Tabs extends Component {
  state = {
    active: 0
  };

  setActiveTab = active => {
    this.setState({
      active,
    });
  };

  render() {
    const { tabs = [] } = this.props;
    const { active } = this.state;
    const tabList = tabs.map((tab, index) =>
      <TabMenuItem active={active} key={tab.id} changeTab={this.setActiveTab} sort={index} {...tab}  />
    );
    const activeTab = tabs[active];

    return (
      <div className="tabs">
        <div>
          <ul className="list">
            {tabList}
          </ul>
        </div>
        <ActiveTab {...activeTab} />
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
};

export default Tabs;