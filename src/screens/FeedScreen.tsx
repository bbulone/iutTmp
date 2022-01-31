import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

import { data } from "../../api/data";

const App = () => {

  return (
    <SafeAreaView style={styles.safeContainer}>

    <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      {/* <View style={styles.container}>
        <Text>{JSON.stringify(data.results)}</Text>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default App;