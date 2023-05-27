import { View, Text, Pressable, Dimensions } from "react-native";
import React from "react";
import BottomModal, {
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import { FontAwesome } from "@expo/vector-icons";

const PopularPlacesModal = ({
  modalVisible,
  setModalVisible,
  filters,
  selectedFilter,
  setSelectedFilter,
  searchPlaces,
  setSortedData,
}) => {
  const { width, height } = Dimensions.get("window");

  const highToLow = (a, b) => {
    if (a.newPrice > b.newPrice) {
      return -1;
    }
    if (a.newPrice < b.newPrice) {
      return 1;
    }
    return 0;
  };
  const lowToHigh = (a, b) => {
    if (a.newPrice < b.newPrice) {
      return -1;
    }
    if (a.newPrice > b.newPrice) {
      return 1;
    }
    return 0;
  };

  const applyFilter = (filter) => {
    setModalVisible(false);
    switch (filter) {
      case "Price: High - Low":
        searchPlaces.map((val) => val.properties.sort(highToLow));
        setSortedData(searchPlaces);
        break;
      case "Price: Low - High":
        searchPlaces.map((val) => val.properties.sort(lowToHigh));
        setSortedData(searchPlaces);
        break;
      default:
        setModalVisible(false);
    }
  };

  return (
    <BottomModal
      swipeThreshold={200}
      onBackdropPress={() => setModalVisible(false)}
      swipeDirection={["up", "down"]}
      footer={
        <ModalFooter>
          <ModalButton
            onPress={() => applyFilter(selectedFilter)}
            text="Apply"
            style={{
              margin: 20,
              color: "#fff",
              backgroundColor: "#008053",
            }}
            textStyle={{
              color: "white",
            }}
          />
        </ModalFooter>
      }
      modalTitle={<ModalTitle title="Sort and Filter" />}
      modalAnimation={
        new SlideAnimation({
          slideFrom: "bottom",
        })
      }
      onHardwareBackPress={() => setModalVisible(false)}
      visible={modalVisible}
      onTouchOutside={() => setModalVisible(false)}
    >
      <ModalContent style={{ width: width / 1.2, height: 250 }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              marginVertical: 10,
              flex: 2,
              height: 230,
              borderRightWidth: 1,
              borderColor: "#E0E0E0",
            }}
          >
            <Text style={{ textAlign: "center" }}>Sort </Text>
          </View>

          <View style={{ flex: 3, margin: 10 }}>
            {filters.map((item, index) => (
              <Pressable
                onPress={() => setSelectedFilter(item.filter)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
                key={index}
              >
                {selectedFilter.includes(item.filter) ? (
                  <FontAwesome name="circle" size={24} color="green" />
                ) : (
                  <FontAwesome name="circle-o" size={24} color="black" />
                )}

                <Text
                  style={{ fontSize: 16, fontWeight: "500", marginLeft: 6 }}
                >
                  {item.filter}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ModalContent>
    </BottomModal>
  );
};

export default PopularPlacesModal;
