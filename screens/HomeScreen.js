import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Button,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";
import GuestDetailsModal from "../components/GuestDetailsModal";
import Announcement from "../components/Announcement";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const route = useRoute();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
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
      headerRight: () => (
        <TouchableOpacity>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="white"
            style={{ marginRight: 12 }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const customButton = (onConfirm) => {
    return <Button onPress={onConfirm} title="Submit" />;
  };

  const modalProps = [
    modalVisible,
    rooms,
    adults,
    children,
    setRooms,
    setAdults,
    setChildren,
    setModalVisible,
  ];

  const searchPlaces = (place) => {
    if (!route.params || !selectedDates) {
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }

    if (route.params && selectedDates) {
      navigation.navigate("Places", {
        rooms: rooms,
        adults: adults,
        children: children,
        selectedDates: selectedDates,
        place: place,
      });
    }
  };

  return (
    <>
      <View>
        <Header />

        <View
          style={{
            margin: 20,
            borderColor: "black",
            borderWidth: 3,
            borderRadius: 6,
          }}
        >
          {/* Destination */}
          <Pressable
            onPress={() => navigation.navigate("Search")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "black",
              borderWidth: 2,
              paddingVertical: 10,
            }}
          >
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
              onPress={() => navigation.navigate("Search")}
              placeholder="Enter your Destination"
              style={{ width: "100%" }}
              value={route?.params && route.params.input}
            />
          </Pressable>

          {/* Select Dates */}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "black",
              borderWidth: 2,
              paddingVertical: 10,
            }}
          >
            <Feather name="calendar" size={24} color="black" />
            <DatePicker
              style={{
                width: "100%",
                height: 30,
                borderRadius: 0,
                borderWidth: 0,
                borderColor: "transparent",
              }}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
                headerStyle: {
                  backgroundColor: "#008053",
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
              }}
              selectedBgColor="#008053"
              customButton={(onConfirm) => customButton(onConfirm)}
              onConfirm={(startDate, endDate) =>
                setSelectedDates(startDate, endDate)
              }
              allowFontScaling={false}
              placeholder={"Select your Dates"}
              mode={"range"}
              markText={" "}
              dateSplitter=" > "
              blockBefore={true}
            />
          </Pressable>

          {/* Rooms and Guests */}
          <Pressable
            onPress={() => setModalVisible(true)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "black",
              borderWidth: 2,
              paddingVertical: 10,
              width: "100%",
            }}
          >
            <Ionicons name="person-outline" size={24} color="black" />
            <Text
              onPress={() => setModalVisible(true)}
              style={{ color: "red" }}
            >
              {rooms} {rooms > 1 ? "rooms" : "room"} • {adults}{" "}
              {adults > 1 ? "adults" : "adult"} • {children}{" "}
              {children > 1 ? "childrens" : "children"}
            </Text>
          </Pressable>

          {/* Search Button */}
          <Pressable
            onPress={() => searchPlaces(route?.params.input)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
              borderColor: "black",
              borderWidth: 2,
              paddingVertical: 10,
              backgroundColor: "#008053",
            }}
          >
            <AntDesign name="search1" size={24} color="white" />
            <Text style={{ color: "white", marginLeft: 5, fontWeight: "bold" }}>
              Search
            </Text>
          </Pressable>
        </View>
      </View>

      <Announcement />
      <GuestDetailsModal props={modalProps} />
    </>
  );
};

export default HomeScreen;
