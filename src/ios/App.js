import React, {Component, ListView, Text} from 'react-native'
import Drawer from 'react-native-drawer'
import NavigationBar from 'react-native-navbar'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

class App extends Component {
  state = {
    dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    selectedTab: 'redTab'
  };

  setDrawerRef = (ref) => { this._drawer = ref };
  renderRow = (rowData) => <Text>{rowData}</Text>;
  renderContent = () =>
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
    />;

  render = () => (
    <Drawer acceptTap
      ref={this.setDrawerRef}
      type='static'
      content={this.renderContent()}
      openDrawerOffset={100}
      styles={{main: {shadowColor: '#000000', shadowOpacity: 0.4, shadowRadius: 3}}}
      tweenHandler={Drawer.tweenPresets.parallax}>
      <NavigationBar
        statusBar={{hidden: false}}
        title={{title: 'elmo'}}
        leftButton={{
          title: 'Menu',
          handler: () => this._drawer.open()
        }} />
    </Drawer>
  );
}

export default App
