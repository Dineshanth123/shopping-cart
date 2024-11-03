import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image source={require("../assets/img2.png")} style={styles.image} />
      </View>

      
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Welcome to the Shopping Cart App! This is the best place to find
          amazing deals on a variety of products.
        </Text>
      </View>

      
      <View style={styles.buttonContainer}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  },
  imageContainer: {
    flex: 0.8, 
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", 
  },
  descriptionContainer: {
    padding: 22,
    backgroundColor: "#f8f8f8", 
    flex: 0.3, 
    justifyContent: "center",
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#1a75ff",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    padding: 20,
    flex: 0.2, 
  },
});

export default HomeScreen;
