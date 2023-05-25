import React from "react";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Modal, {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const GuestDetailsModal = ({ props }) => {
  const [
    modalVisible,
    rooms,
    adults,
    children,
    setRooms,
    setAdults,
    setChildren,
    setModalVisible,
  ] = props;
  return (
    <Modal
      swipeThreshold={200}
      onBackdropPress={() => setModalVisible(false)}
      swipeDirection={["up", "down"]}
      footer={
        <ModalFooter>
          <ModalButton
            disabled={adults < 1 ? true : false && rooms < 1 ? true : false}
            text="Apply"
            style={{
              margin: 20,
              color: "#fff",
              backgroundColor:
                adults < 1
                  ? "gray"
                  : "#008053" && rooms < 1
                  ? "gray"
                  : "#008053",
            }}
            textStyle={{
              color: "white",
            }}
            onPress={() => setModalVisible(false)}
          />
        </ModalFooter>
      }
      modalTitle={<ModalTitle title="Select rooms and guests" />}
      modalAnimation={
        new SlideAnimation({
          slideFrom: "bottom",
        })
      }
      onHardwareBackPress={() =>
        setModalVisible(adults < 1 ? true : false && rooms < 1 ? true : false)
      }
      visible={modalVisible}
      onTouchOutside={() =>
        setModalVisible(adults < 1 ? true : false && rooms < 1 ? true : false)
      }
    >
      <ModalContent style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          {/* Rooms */}
          <Text style={{ marginRight: 15, width: 75 }}>
            {rooms > 1 ? "Rooms:" : "Room:"}
          </Text>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={{
                width: 50,
                height: 40,
                borderColor: "black",
                borderWidth: 2,
                backgroundColor: rooms <= 0 ? "gray" : "#008053",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                borderRightWidth: 0,
              }}
              onPress={() => setRooms(rooms - 1)}
              disabled={rooms <= 0}
            >
              <Text>
                <AntDesign name="minus" size={24} color="white" />
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 50,
                height: 40,
                borderColor: "black",
                borderWidth: 2,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{rooms}</Text>
            </Pressable>

            <Pressable
              style={{
                width: 50,
                height: 40,
                borderColor: "black",
                borderWidth: 2,
                backgroundColor: "#008053",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                borderLeftWidth: 0,
              }}
              onPress={() => setRooms(rooms + 1)}
            >
              <Text>
                <AntDesign name="plus" size={24} color="white" />
              </Text>
            </Pressable>
          </Pressable>
        </View>

        {/* Adults */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ marginRight: 15, width: 75 }}>
            {adults > 1 ? "Adults:" : "Adult:"}
          </Text>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={{
                width: 50,
                height: 40,
                borderColor: "black",
                borderWidth: 2,
                backgroundColor: adults <= 0 ? "gray" : "#008053",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                borderRightWidth: 0,
              }}
              onPress={() => setAdults(adults - 1)}
              disabled={adults <= 0}
            >
              <Text>
                <AntDesign name="minus" size={24} color="white" />
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 50,
                height: 40,
                borderColor: "black",
                borderWidth: 2,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{adults}</Text>
            </Pressable>

            <Pressable
              style={{
                width: 50,
                height: 40,
                borderColor: "black",
                borderWidth: 2,
                backgroundColor: "#008053",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                borderLeftWidth: 0,
              }}
              onPress={() => setAdults(adults + 1)}
            >
              <Text>
                <AntDesign name="plus" size={24} color="white" />
              </Text>
            </Pressable>
          </Pressable>
        </View>

        {/* Children */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ marginRight: 15, width: 75 }}>
            {children > 1 ? "Childrens:" : "Children:"}{" "}
          </Text>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={{
                width: 50,
                height: 40,
                borderColor: "black",
                borderWidth: 2,
                backgroundColor: children <= 0 ? "gray" : "#008053",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                borderRightWidth: 0,
              }}
              onPress={() => setChildren(children - 1)}
              disabled={children <= 0}
            >
              <Text>
                <AntDesign name="minus" size={24} color="white" />
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 50,
                height: 40,
                borderColor: "black",
                borderWidth: 2,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{children}</Text>
            </Pressable>

            <Pressable
              style={{
                width: 50,
                height: 40,
                borderColor: "black",
                borderWidth: 2,
                backgroundColor: "#008053",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                borderLeftWidth: 0,
              }}
              onPress={() => setChildren(children + 1)}
            >
              <Text>
                <AntDesign name="plus" size={24} color="white" />
              </Text>
            </Pressable>
          </Pressable>
        </View>
      </ModalContent>
    </Modal>
  );
};

export default GuestDetailsModal;
