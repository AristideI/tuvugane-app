import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  isFlat?: boolean;
}

export default function Button({ title, onPress, isFlat }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isFlat && styles.flatButton,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.text, isFlat && styles.flatText]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  flatButton: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 2,
  },
  flatText: {
    color: "white",
  },

  pressed: {
    opacity: 0.5,
  },
});
