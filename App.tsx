import React from "react";
import { View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import FeedScreen from "./src/screens/FeedScreen";
import LoginScreen from "./src/screens/LoginScreen";
import TermsScreen from "./src/screens/TermsScreen";

const queryClient = new QueryClient();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <FeedScreen />
      </QueryClientProvider>
    </View>
  );
};

export default App;
