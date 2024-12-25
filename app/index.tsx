import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Bell, ChevronDown, ChevronRight, Search } from "lucide-react-native";
import CircularProgressBar from "./CircularProgressBar";
import ListItem from "./ListItem";
import ModalComponent from "./ModalComponent";

import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const data = [
    {
      id: "1",
      image: require("@/assets/images/item1.png"),
      title: "Drinking Water",
      type: "Consumable",
      time: "09:30 AM",
      noofsun: "8",
      sun: require("@/assets/images/sun.png"),
    },
    {
      id: "2",
      image: require("@/assets/images/item2.png"),
      title: "Amrutum Kuntal Care Hair S..",
      type: "Application Based",
      time: "2:00 PM",
      noofsun: "",
      sun: "",
    },
  ];

  return (
    <View className="bg-white flex-1 ">
      <View className="w-full h-48 relative overflow-hidden rounded-b-3xl">
        <ImageBackground
          source={require("@/assets/images/header2.png")}
          resizeMode="cover"
          className="absolute w-full h-full"
        />
        <View className="absolute top-7 left-4">
          <Text className="text-2xl font-semibold text-dark-green">
            Namaste Mayank
          </Text>
          <Text className="text-lg text-dark-green">Welcome to Amrutam</Text>
        </View>
        <View className="absolute top-4 right-4 flex-row items-center space-x-4">
          <TouchableOpacity className="bg-light-gray w-12 h-12 rounded-full items-center justify-center">
            <Bell size={21} color="white" />
          </TouchableOpacity>
          <View className="w-12 h-12 items-center justify-center pl-4">
            <Image
              source={require("@/assets/images/avatar1.png")}
              className="w-12 h-12 rounded-full"
            />
          </View>
        </View>
      </View>
      <View className="bg-white flex-1 px-3">
        <View className="mt-3 px-1">
          <View className="relative w-full">
            <View className="absolute top-3 left-3">
              <Search size={20} color="#666" />
            </View>
            <TextInput className="pl-10 border-2 border-border rounded-xl h-12" />
          </View>
        </View>

        <ImageBackground
          source={require("@/assets/images/subheader.png")}
          className="w-full flex-row items-center mt-3"
          style={{
            width: "100%",
            height: 175,
            borderRadius: 15,
            overflow: "hidden",
          }}
        >
          <View
            className="w-full p-6 flex-row items-center"
            style={{
              borderRadius: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View className="flex-1">
              <Text className="text-white text-2xl font-semibold">
                You have taken
              </Text>
              <Text className="text-white text-2xl font-bold">
                5000 steps today
              </Text>
              <Text className="text-white text-sm mt-2">
                Check out your Health Activity
              </Text>
              <TouchableOpacity
                className="bg-white rounded-full px-4 py-2 mt-4 w-40 flex-row justify-center items-center"
                onPress={() => navigation.navigate("Homepage")}
              >
                <Text className="text-dark-green text-sm font-bold mr-2">
                  My Health
                </Text>
                <ChevronRight size={18} color="green" />
              </TouchableOpacity>
            </View>
            <View>
              <CircularProgressBar progress={50} size={80} strokeWidth={12} />
            </View>
          </View>
        </ImageBackground>

        <View className="px-2 py-5">
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Text className="font-semibold">Today's Routines</Text>
            <Text className="text-light-gray">
              You have 4 Routines remaining for the day
            </Text>
          </TouchableOpacity>
          <View className="h-1"></View>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ListItem item={item} />}
            showsVerticalScrollIndicator={false}
          />

          <View className="flex flex-row justify-between">
            <Text className="text-light-gray">More Routines (2)</Text>
            <TouchableOpacity onPress={() => navigation.navigate("routine")}>
              <ChevronDown
                size={25}
                color="#101018"
                style={{ marginLeft: 16 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ModalComponent
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
    </View>
  );
};

export default Home;
