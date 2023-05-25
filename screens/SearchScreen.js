import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Search Destination",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      },
      headerStyle: {
        backgroundColor: "#008053",
        height: 100,
      },
    });
  }, []);
  return (
    <SafeAreaView>
      <Text>SearchScreen</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;
