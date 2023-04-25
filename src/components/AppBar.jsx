import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e'
  },
  text: {
    fontSize: 22,
    color: 'white',
    fontWeight: theme.fontWeights.bold
  }
});

const AppBar = () => {
  return ( 
    <View style={styles.container}>
      {/* ... */}
      <Text style={styles.text}>Repositories</Text>
    </View>
  )
};

export default AppBar;