import {
  Calendar,
  Calendar1,
  ChevronDown,
  ChevronLeft,
  Heart,
  ListTodo,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import ModalComponent from "./ModalComponent";
import ListItem from "./ListItem";
import RoutineCard from "./RoutineCard";
import Productlist from "./Productlist";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [active, setactive] = useState("All");
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

  const routines = [
    {
      id: "1",
      title: "Focus & Work",
      sunflowerCount: 47,
      items: "3 Reminder Items",
      progress: 0.8,
      image: require("@/assets/images/mountain.png"), // Replace with your image URL
    },
    {
      id: "2",
      title: "Skin Care Routine",
      sunflowerCount: 8,
      items: "3 Reminder Items",
      progress: 0.4,
      image: require("@/assets/images/devine.png"), // Replace with your image URL
    },
  ];

  const items = [
    {
      id: "1",
      title: "Skin Care Routine",
      subtitle: "Ache Reduction",
      duration: " 12 Weeks",
      reminders: " 3 Reminder Items",
      image: require("@/assets/images/model.png"),
    },
    {
      id: "2",
      title: "Hair Care Tips",
      subtitle: "For Shiny Hair",
      duration: " 6 Weeks",
      reminders: " 2 Reminder Items",
      image: require("@/assets/images/model2.png"),
    },
  ];

  return (
    <ScrollView className="bg-white">
      <View>
        <View className="flex flex-row pt-3">
          <TouchableOpacity onPress={() => navigation.navigate("index")}>
            <ChevronLeft size={23} color="#101018" style={{ marginLeft: 16 }} />
          </TouchableOpacity>

          <Text className="text-black font-semibold text-lg px-1">
            Routines
          </Text>
        </View>
        <View className="px-4 pt-3">
          <Text className="font-semibold">Today's Routines</Text>
          <Text className="text-light-gray">
            You have 4 Routines remaining for the day
          </Text>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ListItem item={item} />}
            showsVerticalScrollIndicator={false}
          />

          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <View className="flex flex-row justify-between">
              <Text className="text-light-gray">More Routines (2)</Text>
              <ChevronDown
                size={25}
                color="#101018"
                style={{ marginLeft: 16 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex bg-gray-100">
          <View className="mx-4">
            <Text className="text-lg font-semibold ">My Routine</Text>
          </View>
          <View className="mx-2">
            <FlatList
              data={routines}
              renderItem={({ item }) => <RoutineCard {...item} />}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </View>
        </View>
        <View className="my-3">
          <View className="flex flex-row justify-between px-4">
            <Text className="text-lg font-semibold text-black">Explore</Text>
            <Text className="text-lg font-semibold text-dark-green">
              See More
            </Text>
          </View>
          <View className=" my-3">
            <FlatList
              data={[
                "All",
                "Created by Dr.",
                "Created by me",
                "Imported",
                "Recommended",
              ]}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setactive(item)}>
                  <View
                    className={`px-5 py-3 mt-3 mx-3 rounded-xl ${
                      active === item
                        ? "bg-fade-green text-black"
                        : "border border-light-gray"
                    }`}
                  >
                    <Text
                      className={`font-semibold ${
                        active === item ? "text-dark" : "text-light-gray"
                      }`}
                    >
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        {/* ---------- */}

        <View className="relative w-full h-[175px] overflow-visible mb-10 px-2">
          {/* Main container with background */}
          <View className="w-full h-full bg-gray-50 rounded-xl overflow-hidden">
            {/* Background gradient curves */}
            <View className="absolute inset-0">
              <Image
                source={require("@/assets/images/subcard.png")}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>

            {/* Content container */}
            <View className="flex-1 p-6">
              {/* Text content */}
              <View className="w-[60%]">
                <Text className="text-2xl font-bold text-black mb-1">
                  Skin Care Routine
                </Text>
                <Text className="text-xl font-bold text-black mb-4">
                  Glass Skin
                </Text>

                {/* Button */}
                <TouchableOpacity className="border border-black rounded-md py-2 px-6 self-start">
                  <Text className="text-black text-base">Explore now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Image
            source={require("@/assets/images/women.png")}
            className="absolute right-0 bottom-[-10px] w-[45%] h-[120%]"
            resizeMode="contain"
          />
        </View>

        {/* ---------------------- */}

        <View className="p-3 pt-1">
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Productlist {...item} />}
            numColumns={2}
            columnWrapperStyle={{
              marginBottom: 16,
              justifyContent: "space-between",
            }}
          />
        </View>
      </View>
      <ModalComponent
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
    </ScrollView>
  );
};

export default HomePage;
