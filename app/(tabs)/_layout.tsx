import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="otp-code" options={{ headerShown: false }} />
      <Stack.Screen name="code" options={{ headerShown: false }} />
      <Stack.Screen name="otp" options={{ headerShown: false }} />
      <Stack.Screen name="success" options={{ headerShown: false }} />
      <Stack.Screen name="success-all" options={{ headerShown: false }} />
    </Stack>
  );
}
