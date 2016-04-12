import React, {Component, TabBarIOS, PropTypes} from 'react-native'

export default class TabBarItem extends Component {
  static propTypes = {
    systemIcon: PropTypes.string,
    color: PropTypes.string,
    selected: PropTypes.bool,
    title: PropTypes.string,
    id: PropTypes.string,
    handlePress: PropTypes.func
  };

  handlePress = () => this.props.handlePress(this.props.id);
  render = () => <TabBarIOS.Item {...this.props} onPress={this.handlePress}/>;
}
