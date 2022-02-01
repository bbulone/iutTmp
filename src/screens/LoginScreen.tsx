import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Headline, TextInput, Button } from "react-native-paper";

export default function App() {
  const [email, setText] = React.useState("");
  const [password, setPass] = React.useState("");
  const [secure, setSecure] = React.useState(false);
  const toggleSecure = () => {
    setSecure(!secure);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Headline style={styles.headlineText}>Welcome to Starport</Headline>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={(email) => setText(email)}
        />
        <TextInput
          style={styles.input}
          label="Password"
          value={password}
          onChangeText={setPass}
          secureTextEntry={secure}
        />
        <Text onPress={toggleSecure}>{secure ? "Show" : "Hide"}</Text>
        <Button
          icon="door"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Login
        </Button>
      </View>
      <View>
        <Text style={styles.conditions}>Read conditions and Terms agree</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    backgroundColor: "purple",
    justifyContent: "center",
    height: 200,
  },
  headlineText: {
    color: "white",
  },
  form: {
    flex: 2,
    padding: 20,
    margin: 10,
  },
  input: {
    margin: 10,
  },
  montexte: {
    fontSize: 30,
  },
  conditions: {
    justifyContent: "center",

    alignItems: "center",
  },
});
