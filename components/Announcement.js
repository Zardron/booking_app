import React from "react";
import { Image } from "react-native";
import { Pressable, ScrollView, Text, View } from "react-native";

const Announcement = () => {
  return (
    <View>
      <Text style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "bold" }}>
        Travel More Spend Less!
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: 20 }}
      >
        <Pressable
          style={{
            width: 200,
            height: 130,
            marginTop: 10,
            backgroundColor: "#008053",
            borderRadius: 10,
            padding: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 15,
              marginVertical: 7,
            }}
          >
            Genius
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "300",
              fontSize: 13,
            }}
          >
            You are at genius level one in our loyalty program
          </Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 130,
            marginTop: 10,
            borderColor: "#008053",
            borderWidth: 2,
            borderRadius: 10,
            padding: 20,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 15,
              marginVertical: 7,
            }}
          >
            15% Discounts
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "300",
              fontSize: 13,
            }}
          >
            Complete 5 stays to unlock level 2
          </Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 130,
            marginTop: 10,
            borderColor: "#008053",
            borderWidth: 2,
            borderRadius: 10,
            padding: 20,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 15,
              marginVertical: 7,
            }}
          >
            10% Discounts
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "300",
              fontSize: 13,
            }}
          >
            Enjoy Discounts at participating at properties worldwide
          </Text>
        </Pressable>

        <Pressable
          style={{
            width: 180,
            height: 130,
            marginTop: 10,
            borderColor: "#008053",
            borderWidth: 2,
            borderRadius: 10,
            padding: 20,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 15,
              marginVertical: 7,
            }}
          >
            10% Discounts
          </Text>
          <Text
            style={{
              color: "black",
              fontWeight: "300",
              fontSize: 13,
            }}
          >
            Enjoy Discounts at participating at properties worldwide
          </Text>
        </Pressable>
      </ScrollView>

      <Pressable
        style={{
          marginTop: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 200, height: 50, resizeMode: "cover" }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
          }}
        />
      </Pressable>
    </View>
  );
};

export default Announcement;
