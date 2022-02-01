import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  Image,
  View,
} from "react-native";
import { Card, Paragraph, Title, Button } from "react-native-paper";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

import { data } from "../../api/data";
import { useImage } from "./hooks/useImage";
import { useStarships } from "./hooks/useStarships";
import ScreenContainer from "./ScreenContainer";

interface StarshipCardProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

const FeedScreen = () => {
  const { data, isError, isLoading, refetch } = useStarships();
  if (isLoading) {
    return (
      <View>
        <Text>Loading </Text>
      </View>
    );
  }
  if (isError) {
    return (
      <View>
        <Text>ERRORRR</Text>
      </View>
    );
  }
  const renderItem = ({ item }) => {
    console.log(item);
    const source = useImage("cr90corvette");

    return (
      <Card>
        <Card.Title title="" subtitle="" />
        <Card.Content>
          <Card.Cover source={source} />
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
        keyExtractor={(item) => item.name}
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
  logo: {
    width: 200,
    height: 200,
  },
});

export default FeedScreen;
