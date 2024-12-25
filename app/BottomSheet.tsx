import React, { useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Animated, Pressable } from "react-native";

type BottomSheetProps = {
  setStatus: (status: boolean) => void;
};

const BottomSheet: React.FC<BottomSheetProps> = ({ setStatus }) => {
  const slide = useRef(new Animated.Value(300)).current;

  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slide, {
      toValue: 300,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slideUp();
  }, []);

  const closeModal = () => {
    slideDown();
    setTimeout(() => {
      setStatus(false);
    }, 800);
  };

  return (
    <Pressable onPress={closeModal} className="absolute inset-0 bg-black/50 justify-end">
      <Pressable className="w-full h-2/5">
        <Animated.View
          style={{ transform: [{ translateY: slide }] }}
          className="w-full h-full bg-white rounded-t-2xl p-5"
        >
          <Text className="text-2xl font-bold">Login / SignUp</Text>
          <View className="mt-5">
            <TextInput
              placeholder="Enter Username"
              className="w-full h-10 border rounded-lg border-gray-300 px-4 mb-4"
            />
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={true}
              className="w-full h-10 border rounded-lg border-gray-300 px-4 mb-4"
            />
            <TouchableOpacity className="bg-blue-500 rounded-lg py-2 items-center mt-3">
              <Text className="text-white text-lg font-semibold">Login</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Pressable>
    </Pressable>
  );
};

export default BottomSheet;
