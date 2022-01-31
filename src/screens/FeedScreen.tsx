import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Card, Paragraph, Title, Button } from "react-native-paper";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

import { data } from "../../api/data";

const App = () => {
  const renderItem = ({ item }) => {
    console.log({ item });
    return (
      <Card>
        <Card.Title title="" subtitle="" />
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph>{item.model}</Paragraph>
        </Card.Content>
       
      
      </Card>
    );
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(props) => props.name}
      />
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
