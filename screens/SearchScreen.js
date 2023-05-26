import { View, SafeAreaView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import SearchResults from "../components/SearchResults";
import { DestinationData } from "../assets/data";

const SearchScreen = () => {
  const [input, setInput] = useState();

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
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#008053",
          borderWidth: 2,
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="Enter Your Destination"
          onChangeText={(text) => setInput(text)}
        />
        <AntDesign name="search1" size={22} color="black" />
      </View>

      <SearchResults data={DestinationData} input={input} setInput={setInput} />
    </SafeAreaView>
  );
};

export default SearchScreen;
