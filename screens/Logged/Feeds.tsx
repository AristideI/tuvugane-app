import { StyleSheet, ScrollView } from "react-native";
import PostComponent from "../../components/feeds/PostComponent";

export default function Feeds() {
  return (
    <ScrollView style={styles.container}>
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
