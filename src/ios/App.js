import React, {Component, TabBarIOS, Text} from 'react-native'

import Orders from './views/Orders.jsx'
import TabBarItem from './components/TabBarItem.jsx'

class App extends Component {
  state = {
    selectedTab: 'orders'
  };

  switchTab = (tab) => this.setState({selectedTab: tab});
  renderTab = (id, icon, children) =>
    <TabBarItem
      id={id}
      systemIcon={icon}
      selected={this.state.selectedTab === id}
      handlePress={this.switchTab}
      children={children}
    />;

  render = () => (
    <TabBarIOS
      tintColor='white'
      barTintColor='#81c04d'>
        {this.renderTab('orders', 'most-viewed', <Orders/>)}
        {this.renderTab('sales', 'favorites', <Text>Sales</Text>)}
        {this.renderTab('more', 'more', <Text>More</Text>)}
    </TabBarIOS>
  );
}

export default App
