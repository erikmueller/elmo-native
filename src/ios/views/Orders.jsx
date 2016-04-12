import React, {Component, Text, View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#81c04d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  }
})

export default class Orders extends Component {
  state = {
    shop: {}
  };

  componentDidMount = () => {
    fetch('http://unity-01.epages.com/rs/shops/DemoShop', {
      method: 'GET'
    })
      // This looks wrong -.-
      .then((response) => this.setState({shop: response._bodyText}))
      .catch((err) => console.log(err))
  };

  render = () => (
    <View>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTitle}>Shop</Text>
      </View>
      <View>
        <Text>{JSON.stringify(this.state.shop)}</Text>
      </View>
    </View>
  );
}
