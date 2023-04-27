import { Text, View, StyleSheet, Image } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  langCard: {
    borderRadius: 5,
    backgroundColor: theme.colors.primary
  },
  textBG: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    padding: theme.padding.medium,
    borderRadius: 5,
    flexGrow: 0,
    textAlign: 'center'
  },
  textBold: {
    fontWeight: '700',
    textAlign: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  flexItemRowA: {
    flexDirection: "row",
    padding: 10
  },
  flexItemRowB: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-evenly",
  },
  flexItemColumn: {
    flexDirection: "column",
    padding: 10
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
  }
});

const RepositoryItem = ({repositoryObj}) => {
  const starCount = numToString(repositoryObj.stargazersCount)
  const forkCount = numToString(repositoryObj.forksCount)

  return (
    <View style={{borderStyle: 'solid', borderRadius: 5, borderColor: 'black', borderWidth: 1, backgroundColor: 'white'}}>
      <View style={styles.flexItemRowA}>
        <Image style={styles.avatar} source={{ uri: repositoryObj.ownerAvatarUrl}}/>
        <View style={{ paddingLeft: 5 }}>
          <Text style={{fontWeight: '700', paddingBottom: 2}}>{repositoryObj.fullName}</Text>
          <Text style={{paddingBottom: 4}}>{repositoryObj.description}</Text>
          <View style={{flexDirection: "row"}}>
            <View style={{flexGrow: 0}}><Text style={styles.textBG}>{repositoryObj.language}</Text></View>
            <View style={{flexGrow: 1}}></View>
          </View>
        </View>
      </View>
      <View style={styles.flexItemRowB}>
        <View>
          <Text style={styles.textBold}>{starCount}</Text>
          <Text style={styles.textCenter}>Stars</Text>
        </View>
        <View>
          <Text style={styles.textBold}>{forkCount}</Text>
          <Text style={styles.textCenter}>Forks</Text>
        </View>
        <View>
          <Text style={styles.textBold}>{repositoryObj.reviewCount}</Text>
          <Text style={styles.textCenter}>Reviews</Text>
        </View>
        <View>
          <Text style={styles.textBold}>{repositoryObj.ratingAverage}</Text>
          <Text style={styles.textCenter}>Rating</Text>
        </View>
      </View>
    </View>
  )
};

const numToString = numberInt => {
  let numString = numberInt.toString();

  if (numString.length > 3) {
    numString = numString.substring(0, numString.length - 3) + '.' + numString.charAt(numString.length - 3) + 'k';
  }
  return numString
};



export default RepositoryItem;

