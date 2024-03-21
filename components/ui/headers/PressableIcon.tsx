import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PressableIcon({
  onPress,
  name,
}: {
  onPress: any;
  name: string;
}) {
  return (
    <Pressable onPress={onPress} style={{ paddingRight: 15 }}>
      <Ionicons name={name} size={30} color="white" />
    </Pressable>
  );
}
