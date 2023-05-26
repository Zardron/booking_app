import { View, Text, Pressable, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { DestinationData } from "../assets/data";
import PropertyCard from "../components/PropertyCard";
import PopularPlacesModal from "../components/PopularPlacesModal";

const PlacesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
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

  const filters = [
    {
      id: "0",
      filter: "Price: Low - High",
    },
    {
      id: "1",
      filter: "Price: High - Low",
    },
  ];

  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: "white",
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={{ marginLeft: 6, fontSize: 15, fontWeight: "500" }}>
            Sort
          </Text>
        </Pressable>

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="filter-outline" size={22} color="gray" />
          <Text style={{ marginLeft: 6, fontSize: 15, fontWeight: "500" }}>
            Filter
          </Text>
        </Pressable>

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="map-marker-alt" size={22} color="gray" />
          <Text style={{ marginLeft: 6, fontSize: 15, fontWeight: "500" }}>
            Map
          </Text>
        </Pressable>
      </Pressable>

      <ScrollView style={{ backgroundColor: "#F5F5F5", marginBottom: 50 }}>
        <View style={{ marginLeft: 6, fontSize: 15, fontWeight: "500" }}>
          {DestinationData?.filter(
            (item) => item.place === route.params.place
          ).map((item) =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                rooms={route.params.rooms}
                adults={route.params.adults}
                children={route.paramschildren}
                selectedDates={route.params.selectedDates}
                property={property}
                availableRooms={property.rooms}
              />
            ))
          )}
        </View>
      </ScrollView>

      <PopularPlacesModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        filters={filters}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </View>
  );
};

export default PlacesScreen;
