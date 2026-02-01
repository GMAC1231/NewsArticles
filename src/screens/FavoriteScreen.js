import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function FavoriteScreen() {
  const navigation = useNavigation();

  const favoriteArticlesList = useSelector(
    (state) => state.favorites?.favoriteArticles ?? []
  );

  const GoBackButton = () => (
    <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
      <Text style={styles.backButtonText}>Go back</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("ArticleDetail", { article: item })}
      activeOpacity={0.8}
    >
      <Image
        source={{
          uri:
            item.thumbnail ||
            "https://via.placeholder.com/150/cccccc/000000?text=No+Image",
        }}
        style={styles.articleImage}
        resizeMode="cover"
      />
      <Text style={styles.articleTitle} numberOfLines={2}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  if (!favoriteArticlesList.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorite articles yet!</Text>
        <GoBackButton />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Heading */}
      <View testID="FavoriteArticles" style={styles.headerContainer}>
        <Text style={styles.heading}>My Favorite Articles</Text>
      </View>

      <GoBackButton />

      <FlatList
        data={favoriteArticlesList}
        keyExtractor={(item, index) =>
          item.idArticle?.toString() || index.toString()
        }
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: hp(4),
    marginLeft: wp(5),
  },
  heading: {
    fontSize: hp(3.8),
    fontWeight: "600",
    color: "#4B5563",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(10),
  },
  emptyText: {
    fontSize: hp(2.5),
    color: "#6B7280",
    textAlign: "center",
  },
  backButton: {
    backgroundColor: "#2563EB",
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(5),
    borderRadius: 8,
    marginTop: hp(2),
    alignSelf: "flex-start",
    marginLeft: wp(5),
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  listContentContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  cardContainer: {
    backgroundColor: "#fff",
    marginBottom: hp(2),
    padding: wp(4),
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  articleImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: 10,
    marginRight: wp(4),
  },
  articleTitle: {
    flex: 1,
    fontSize: hp(2),
    fontWeight: "bold",
    color: "#374151",
  },
});
