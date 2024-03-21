import { Image, StyleSheet, Text, View } from "react-native";

export default function Logo() {
  return (
    <Image source={require("../../../assets/lo.png")} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 100,
    objectFit: "contain",
    marginLeft: 15,
  },
});
