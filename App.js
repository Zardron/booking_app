import { ModalPortal } from "react-native-modals";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <>
      <StackNavigator />
      <ModalPortal />
    </>
  );
}
