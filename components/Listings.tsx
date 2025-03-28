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
  },
  image: {
    width: "100%",
    height: 300,
  },
});

export default Listings;
