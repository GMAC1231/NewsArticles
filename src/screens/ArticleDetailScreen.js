import {View,Text,ScrollView,TouchableOpacity,Image,StyleSheet,} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux"; // Redux hooks
import { toggleFavorite } from "../redux/favoritesSlice"; // Redux action

export default function ArticleDetailScreen(props) {
  const article = props.route.params; // Article passed from previous screen

  const dispatch = useDispatch();
  const favoriteArticles = useSelector(
    (state) => state.favorites.favoriteArticles
  );
  const isFavourite = favoriteArticles?.some(
    (favArticle) => favArticle.idArticle === article.idArticle
  ); // Check by idArticle

  const navigation = useNavigation();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(article)); // Dispatch the article to favorites
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Article Image */}
      <View style={styles.imageContainer} testID="imageContainer">
          <Image
          source={{ uri: article.thumbnail }}
          style={styles.articleImage}
        />
      </View>

     <View style={styles.topButtonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleToggleFavorite}
          style={[
            styles.favoriteButton,
            {
              backgroundColor: "white",
            },
          ]}
        >
          <Text>{isFavourite ? "♥" : "♡"}</Text>
        </TouchableOpacity>
      </View>
                 

      {/* Article Description */}
  
        <View style={styles.contentContainer}>
          {/* Title and Category */}
          <View
            style={styles.articleDetailsContainer}
            testID="articleDetailsContainer"
          >
            <Text style={styles.articleTitle} testID="articleTitle">
               {article.title}
              </Text>
            <Text style={styles.articleCategory} testID="articleCategory">
                 {article.category}        
              </Text>
          </View>

          <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{article.description}</Text>
          <View
            
            style={styles.sectionContainer}
            testID="sectionContainer"
          >
          
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  articleImage: {
    width: wp(98),
    height: hp(40),
    borderRadius: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginTop: 4,
  },
  topButtonsContainer: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: hp(4),
  },
  backButton: {
    padding: 8,
    borderRadius: 50,
    marginLeft: wp(5),
    backgroundColor: "white",
  },
  favoriteButton: {
    padding: 8,
    borderRadius: 50,
    borderWidth: 1,
    marginRight: wp(5),
  },

  contentContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(4),
  },
  articleDetailsContainer: {
    marginBottom: hp(2),
  },
  articleTitle: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#4B5563", // text-neutral-700
  },
  articleCategory: {
    fontSize: hp(2),
    fontWeight: "500",
    color: "#9CA3AF", // text-neutral-500
  },
  sectionContainer: {
    marginBottom: hp(2),
  },
  sectionTitle: {
    fontSize: hp(2.5),
    fontWeight: "bold",
    color: "#4B5563", // text-neutral-700
  },
  descriptionText: {
    fontSize: hp(1.8),
    color: "#4B5563", // text-neutral-700
    textAlign: "justify",
    lineHeight: hp(2.5),
  },
});
