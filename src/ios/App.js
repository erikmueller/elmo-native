/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
import React, {Component, StyleSheet, View, Text, TabBarIOS, PropTypes} from 'react-native'

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    color: 'white',
    margin: 50
  }
})

class TabBarItem extends Component {
  static propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    isSelected: PropTypes.bool,
    title: PropTypes.string,
    id: PropTypes.string,
    onPress: PropTypes.func
  };

  renderTab = (color, pageText) => (
    <View style={[styles.tabContent, {backgroundColor: color}]}>
      <Text style={styles.tabText}>{pageText}</Text>
    </View>
  );

  handlePress = () => this.props.onPress(this.props.id);

  render = () => {
    return <TabBarIOS.Item
      title={this.props.title}
      systemIcon={this.props.icon}
      selected={this.props.isSelected}
      onPress={this.handlePress}>
      {this.renderTab(this.props.color, this.props.title)}
    </TabBarIOS.Item>
  };
}

class App extends Component {
  state = {
    selectedTab: 'redTab'
  };

  switchTab = (tab) => console.log(tab) || this.setState({selectedTab: tab});

  render = () => (
    <TabBarIOS
      tintColor='white'
      barTintColor='darkslateblue'>
      <TabBarItem
        title='Blue Tab'
        id='blueTab'
        color='#414A8C'
        icon='contacts'
        isSelected={this.state.selectedTab === 'blueTab'}
        onPress={this.switchTab}/>
      <TabBarItem
        title='Red Tab'
        id='redTab'
        color='#783E33'
        icon='history'
        isSelected={this.state.selectedTab === 'redTab'}
        onPress={this.switchTab}/>
      <TabBarItem
        title='Green Tab'
        id='greenTab'
        color='#21551C'
        icon='more'
        isSelected={this.state.selectedTab === 'greenTab'}
        onPress={this.switchTab}/>
    </TabBarIOS>
  );
}

export default App
