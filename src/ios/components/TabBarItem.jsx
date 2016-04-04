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

export default class TabBarItem extends Component {
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
