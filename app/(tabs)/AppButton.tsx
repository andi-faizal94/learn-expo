import { StyleSheet, Text, TouchableOpacity } from "react-native";
export const AppButton = ({ onPress, title, size, backgroundColor }: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.appButtonContainer,
      size === "sm"
        ? {
            paddingHorizontal: 10,
            paddingVertical: 10,
            elevation: 2,
          }
        : null,
      backgroundColor && { backgroundColor },
    ]}
  >
    <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  appButtonContainer: {
    elevation: 10,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
