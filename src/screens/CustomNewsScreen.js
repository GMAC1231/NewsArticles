import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";

export default function CustomNewsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const article = route?.params?.article;

  const favoriteArticles = useSelector(
    (state) => state.favorites.favoriteArticles
  );

  const isFavourite = article
    ? favoriteArticles.some((item) => item.idArticle === article.idArticle)
    : false;

  const handleToggleFavorite = () => {
    if (article) {
      dispatch(toggleFavorite(article));
    }
  };

  if (!article) {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>No Article Details Available</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      testID="scrollContent"
    >
      {/* Article Image */}
      <View style={styles.imageWrapper} testID="imageContainer">
        <Image
          source={{
            uri:
              article.image ||
              "https://via.placeholder.com/600x400.png?text=No+Image",
          }}
          style={styles.articleImage}
        />

        {/* Top Buttons (Overlay) */}
        <View style={styles.topButtonsContainer} testID="topButtonsContainer">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconButton}
          >
            <Text style={styles.iconText}>←</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleToggleFavorite}
            style={styles.iconButton}
          >
            <Text style={styles.iconText}>{isFavourite ? "♥" : "♡"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Article Content */}
      <View style={styles.contentContainer} testID="contentContainer">
        <Text style={styles.articleTitle}>{article.title}</Text>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Content</Text>
          <Text style={styles.contentText}>
            {article.description || "No description available."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: hp(4),
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
    alignItems: "center",
  },
  articleImage: {
    width: wp(100),
    height: hp(50),
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  topButtonsContainer: {
    position: "absolute",
    top: hp(4),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(5),
  },
  iconButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    elevation: 3,
  },
  iconText: {
    fontSize: hp(2.2),
  },
  contentContainer: {
    paddingHorizontal: wp(5),
    paddingTop: hp(3),
  },
  articleTitle: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#374151",
    marginBottom: hp(2),
  },
  sectionContainer: {
    marginBottom: hp(2),
  },
  sectionTitle: {
    fontSize: hp(2.4),
    fontWeight: "bold",
    color: "#374151",
    marginBottom: hp(1),
  },
  contentText: {
    fontSize: hp(1.8),
    color: "#4B5563",
    lineHeight: hp(2.6),
  },
  title: {
    fontSize: hp(2.5),
    fontWeight: "bold",
  },
});
