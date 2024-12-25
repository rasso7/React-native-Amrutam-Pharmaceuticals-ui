import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Modal,
} from "react-native";
import { ArrowLeft, X } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
export default function RoutinesScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-2">
        {/* Header Section */}
        <ImageBackground
          source={require("@/assets/images/routine.png")}
          className="w-full flex-row items-center mt-2"
          style={{
            width: "100%",
            height: 180,
            borderRadius: 15,
            overflow: "hidden",
          }}
        >
          <View className="px-3">
            <TouchableOpacity
              className="mt-4 mb-6"
              onPress={() => navigation.navigate("index")}
            >
              <ArrowLeft size={24} color="#000" />
            </TouchableOpacity>

            {/* Title and subtitle */}
            <View className="mb-6">
              <Text className="text-2xl font-semibold text-gray-900 mb-1">
                Routines
              </Text>
              <Text className="text-gray-500">
                You have two routines currently
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* Add Routine Button - positioned at bottom */}
        <View className="mt-auto mb-8 px-2">
          <TouchableOpacity
            className="w-full bg-dark-green py-4 rounded-lg"
            onPress={() => setModalVisible(true)}
          >
            <Text className="text-white text-center font-medium">
              Add Routine
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Add Routine */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center inset-0 bg-black/50">
          {/* Modal Container */}
          <View className="w-4/5 bg-white rounded-lg p-6 shadow-lg relative">
            {/* Close Button */}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#3A643B] justify-center items-center"
            >
              <X size={22} color="#3A643B" />
            </TouchableOpacity>

            {/* Modal Content */}
            <View className="mt-12">
              <TouchableOpacity className="w-full bg-dark-green rounded-lg py-3 mb-4">
                <Text className="text-white text-center font-medium">
                  Create New Routine
                </Text>
              </TouchableOpacity>
              <View>
                <Text className="text-gray-600 pl-2">
                  • Your own personalized routine
                </Text>
                <Text className="text-gray-600 pl-2">
                  • Add up to 7 reminders
                </Text>
              </View>

              <View className="flex flex-row items-center justify-center my-3">
                {/* Left Line */}
                <View className=" border-[0.5px]  border-dark-green w-[30%] "></View>
                <Text className="text-gray-500 mx-4">OR</Text>
                {/* Right Line */}
                <View className="border-[0.5px] border-dark-green w-[30%]"></View>
              </View>

              <TouchableOpacity className="w-full border border-dark-green rounded-lg py-3 mb-4">
                <Text className="text-dark-green text-center font-medium">
                  Import From Templates
                </Text>
              </TouchableOpacity>

              <View>
                <Text className="text-gray-600 pl-2">
                  • Multiple templates created by us
                </Text>
                <Text className="text-gray-600 pl-2">
                  • Customize according to your need
                </Text>
                <Text className="text-dark-green underline text-center">
                  view sample templates
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
