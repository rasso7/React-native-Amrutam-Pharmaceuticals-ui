import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="routine"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="index"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="Homepage"
        options={{ headerShown: false, animation: "fade" }}
      />
    </Stack>
  );
}
