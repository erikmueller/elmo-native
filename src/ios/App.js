import React, {Component, TabBarIOS} from 'react-native'
import TabBarItem from './components/TabBarItem.jsx'

class App extends Component {
  state = {
    selectedTab: 'redTab'
  };

  switchTab = (tab) => this.setState({selectedTab: tab});
  renderTab = (id, title, color, icon) =>
    <TabBarItem
      id={id}
      title={title}
      color={color}
      icon={icon}
      isSelected={this.state.selectedTab === id}
      onPress={this.switchTab}
    />;

  render = () => (
    <TabBarIOS
      tintColor='white'
      barTintColor='darkslateblue'>
        {this.renderTab('blueTab', 'Blue Tab', '#414A8C', 'contacts')}
        {this.renderTab('redTab', 'Red Tab', '#783E33', 'history')}
        {this.renderTab('greenTab', 'Green Tab', '#21551C', 'more')}
    </TabBarIOS>
  );
}

export default App
