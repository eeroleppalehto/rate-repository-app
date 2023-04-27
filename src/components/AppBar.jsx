import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { ScrollView } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 0,
    justifyContent: "space-between",
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
      <ScrollView horizontal>
        <Link style={{padding: 3}} to="/"><Text style={styles.text}>Repositories</Text></Link>
      </ScrollView>
      <Link style={{padding: 3}} to="/login"><Text style={styles.text}>Login</Text></Link>
    </View>
  )
};

export default AppBar;