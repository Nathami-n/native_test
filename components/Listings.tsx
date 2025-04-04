import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { defaultStyles } from "@/constants/styles";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  listings: any[];
  category: string;
}
const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState(false);

  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);
  const renderRow: ListRenderItem<any> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.listing}>
            <Image
              source={{
                uri: item.medium_url,
              }}
              style={styles.image}
            />
            <TouchableOpacity style={{position: "absolute", top: 30, right: 30}}>
              <Ionicons  name="heart-outline"
              size={24} color={"#000"}
              />
              </TouchableOpacity>
              {/* text */}
              <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 4
                
              }}>
                <Text style={{fontSize: 16, fontFamily: "mon-sb"}}>{item.name}</Text>
                <View style={{flexDirection: "row"}}>
                  <Ionicons name="star" size={16} color={"#000"} />
                  <Text style={{fontFamily: "mon-sb"}}>{item.review_scores_rating /20}</Text>
                </View>
              </View>
              <Text style={{fontFamily: "mon"}}>{item.room_type}</Text>

              <View style={{flexDirection: "row", gap: 4}}>
                <Text style={{fontFamily: "mon-sb"}}>${item.price}</Text>
                <Text style={{fontFamily: "mon"}}>/night</Text>

              </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View style={defaultStyles.container}>
      <FlatList
        ref={listRef}
        data={loading ? [] : listings}
        renderItem={renderRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
    marginVertical: 12
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10
  },
});

export default Listings;
