import { View, StyleSheet, TextInput, Keyboard } from "react-native";

interface AuthTextInputProps {
  name: string;
  value: string;
  onUpdateValue: (value: string) => void;
  secure: boolean;
}
export default function AuthTextInput({
  name,
  value,
  onUpdateValue,
  secure,
}: AuthTextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={name}
        keyboardType="default"
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholderTextColor={"#888"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  input: {
    width: "100%",
    backgroundColor: "#101010",
    padding: 15,
    borderRadius: 20,
    color: "white",
  },
});
