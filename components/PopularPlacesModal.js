import { View, Text, Pressable, Dimensions } from "react-native";
import React from "react";
import Modal, {
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const PopularPlacesModal = ({
  modalVisible,
  setModalVisible,
  filters,
  selectedFilter,
  setSelectedFilter,
}) => {
  const { width, height } = Dimensions.get("window");
  return (
    <Modal
      swipeThreshold={200}
      onBackdropPress={() => setModalVisible(false)}
      swipeDirection={["up", "down"]}
      footer={
        <ModalFooter>
          <ModalButton
            text="Apply"
            style={{
              margin: 20,
              color: "#fff",
              backgroundColor: "#008053",
            }}
            textStyle={{
              color: "white",
            }}
            onPress={() => setModalVisible(false)}
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
      visible={true}
      onTouchOutside={() => setModalVisible(false)}
    >
      <ModalContent style={{ width: width / 1.2, height: 280 }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              marginVertical: 10,
              flex: 2,
              height: 280,
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
                  <FontAwesome5 name="dot-circle" size={21} color="green" />
                ) : (
                  <FontAwesome name="circle-o" size={23} color="black" />
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
    </Modal>
  );
};

export default PopularPlacesModal;
