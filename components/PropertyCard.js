import { Dimensions, View, Text, Pressable, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PropertyCard = ({
  searchPlaces,
  rooms,
  adults,
  children,
  selectedDates,
  property,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View>
      <Pressable
        style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
      >
        <View>
          <Image
            style={{ height: height / 3.3, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 195 }}>{property.name}</Text>
            <FontAwesome name="heart-o" size={24} color="red" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 5,
            }}
          >
            <MaterialIcons name="stars" size={24} color="#008053" />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6CB4EE",
                padding: 2,
                borderRadius: 5,
                width: 100,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>Genius Level</Text>
            </View>
          </View>

          <Text
            style={{
              width: 200,
              marginTop: 5,
              color: "gray",
              fontWeight: "400",
            }}
          >
            {property.address.length > 40
              ? property.address.substr(0, 40)
              : property.address}
          </Text>

          <Text
            style={{
              width: 200,
              marginTop: 5,
              color: "gray",
              fontWeight: "400",
            }}
          >
            Price for 1 Night, {adults} {adults <= 1 ? "adult" : "adults"}
          </Text>

          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 16,
                textDecorationLine: "line-through",
              }}
            >
              ₱ {property.oldPrice * adults}.00
            </Text>
            <Text
              style={{
                fontSize: 16,
              }}
            >
              ₱ {property.newPrice * adults}.00
            </Text>
          </View>

          <View
            style={{
              marginTop: 5,
            }}
          >
            <Text>Deluxe Room</Text>
            <Text>Hotel Room: 1 bed</Text>
          </View>

          <View
            style={{
              marginTop: 5,
              backgroundColor: "red",
              padding: 2,
              borderRadius: 5,
              width: 150,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>Limited Time Deal</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;
