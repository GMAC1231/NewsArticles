
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../components/categories";
import Articles from "../components/articles";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Technology");

  // Hardcoded categories for news
  const [categories, setCategories] = useState([
    {
      idCategory: "1",
      strCategory: "Technology",
      strCategoryThumb:
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      idCategory: "2",
      strCategory: "Sports",
      strCategoryThumb:
        "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      idCategory: "3",
      strCategory: "Business",
      strCategoryThumb:
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      idCategory: "4",
      strCategory: "Entertainment",
      strCategoryThumb:
        "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      idCategory: "5",
      strCategory: "Health",
      strCategoryThumb:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    },
  ]);

  // Keep all articles in state (unfiltered list)
  const [allArticles, setAllArticles] = useState([
    {
      idArticle: "1",
      title: "AI Revolution in Technology",
      description:
        "AI is changing the way we interact with technology and improving our lives.",
      thumbnail:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Technology",
      idCategory: "1",
    },
    {
      idArticle: "2",
      title: "Olympics 2024: What to Expect",
      description:
        "The 2024 Olympics are set to be one of the most competitive events ever.",
      thumbnail:
        "https://images.pexels.com/photos/5687405/pexels-photo-5687405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Sports",
      idCategory: "2",
    },
    {
      idArticle: "3",
      title: "Stock Market Soars",
      description:
        "Business sectors are experiencing a significant surge in stock prices.",
      thumbnail:
        "https://images.pexels.com/photos/5583964/pexels-photo-5583964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Business",
      idCategory: "3",
    },
    {
      idArticle: "4",
      title: "New Marvel Movie Breaks Records",
      description:
        "Marvel’s latest release has broken box office records worldwide.",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1682124853113-d1aad6ae96ef?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Entertainment",
      idCategory: "4",
    },
    {
      idArticle: "5",
      title: "Health Tips for 2024",
      description:
        "Top health experts share their best tips to stay fit and healthy.",
      thumbnail:
        "https://images.pexels.com/photos/4720778/pexels-photo-4720778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Health",
      idCategory: "5",
    },
    {
      idArticle: "6",
      title: "The Future of Blockchain",
      description: "Blockchain technology is poised to revolutionize numerous industries by offering a decentralized, transparent, and secure way to record transactions and manage data. Its inherent qualities, such as immutability and trustlessness, allow organizations to streamline processes, reduce fraud, and enhance accountability. In finance, blockchain can facilitate faster, cheaper cross-border transactions and eliminate the need for intermediaries. In supply chain management, it provides real-time tracking of goods, ensuring authenticity and improving efficiency. The healthcare sector can benefit from secure patient data management, enabling better interoperability among providers. Moreover, industries like real estate, voting, and intellectual property management are exploring blockchain for its potential to enhance transparency and reduce administrative burdens. As more organizations adopt this technology, the landscape of various sectors will likely transform, driving innovation and fostering greater collaboration across the globe.",
      thumbnail:
        "https://images.pexels.com/photos/6781340/pexels-photo-6781340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Technology",
      idCategory: "1",
    },
    {
      idArticle: "7",
      title: "The Rise of Esports",
      description: "Esports is becoming a mainstream phenomenon globally.",
      thumbnail:
        "https://images.pexels.com/photos/5207523/pexels-photo-5207523.jpeg",
      category: "Sports",
      idCategory: "2",
    },
    {
      idArticle: "8",
      title: "New Business Trends in 2024",
      description: "Innovative business practices are reshaping industries.",
      thumbnail:
        "https://images.pexels.com/photos/19797311/pexels-photo-19797311/free-photo-of-2024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Business",
      idCategory: "3",
    },
    {
      idArticle: "9",
      title: "AI Revolution in Technology",
      description: "AI is changing the way we interact with technology and improving our lives.",
      thumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Technology",
      idCategory: "1"
    },
    {
      idArticle: "10",
      title: "Advancements in Telemedicine",
      description: "Telemedicine is transforming patient care by providing remote consultations and healthcare services.",
      thumbnail: "https://images.pexels.com/photos/4054171/pexels-photo-4054171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Health",
      idCategory: "5"
    },
    {
      idArticle: "11",
      title: "Mental Health Awareness",
      description: "Raising awareness about mental health issues is crucial for fostering a supportive community.",
      thumbnail: "https://images.pexels.com/photos/4506145/pexels-photo-4506145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Health",
      idCategory: "5"
    },
    {
      idArticle: "12",
      title: "The Importance of Nutrition",
      description: "Nutrition plays a vital role in maintaining health and preventing diseases.",
      thumbnail: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Health",
      idCategory: "5"
    },
    {
      idArticle: "13",
      title: "Fitness Trends to Watch",
      description: "Explore the latest fitness trends that are shaping the way we exercise.",
      thumbnail: "https://images.pexels.com/photos/3821628/pexels-photo-3821628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Health",
      idCategory: "5"
    },
    {
      idArticle: "14",
      title: "The Future of Personalized Medicine",
      description: "Personalized medicine is revolutionizing healthcare by tailoring treatments to individual patients.",
      thumbnail: "https://images.pexels.com/photos/4153351/pexels-photo-4153351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Health",
      idCategory: "5"
    },
    {
      idArticle: "15",
      title: "The Rise of Streaming Services",
      description: "Streaming services are reshaping how we consume entertainment, offering diverse content at our fingertips.",
      thumbnail: "https://images.pexels.com/photos/1454635/pexels-photo-1454635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Entertainment",
      idCategory: "4"
    },
    {
      idArticle: "16",
      title: "Exploring Virtual Reality in Gaming",
      description: "Virtual reality is changing the gaming landscape, offering immersive experiences like never before.",
      thumbnail: "https://images.pexels.com/photos/5480263/pexels-photo-5480263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Entertainment",
      idCategory: "4"
    },
    {
      idArticle: "17",
      title: "The Impact of Social Media on Entertainment",
      description: "Social media platforms are becoming a significant source of entertainment, influencing trends and artists.",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Entertainment",
      idCategory: "4"
    },
    {
      idArticle: "18",
      title: "Behind the Scenes of Film Production",
      description: "Discover the intricate process of film production and what goes on behind the camera.",
      thumbnail: "https://images.pexels.com/photos/3823606/pexels-photo-3823606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Entertainment",
      idCategory: "4"
    },
    {
      idArticle: "19",
      title: "Music Trends to Watch",
      description: "Explore the emerging music trends that are shaping the industry and artists.",
      thumbnail: "https://images.pexels.com/photos/5061850/pexels-photo-5061850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Entertainment",
      idCategory: "4"
    },
    {
      idArticle: "20",
      title: "The Evolution of E-commerce",
      description: "E-commerce continues to evolve, offering new opportunities for businesses and consumers alike.",
      thumbnail: "https://images.pexels.com/photos/5082825/pexels-photo-5082825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Business",
      idCategory: "3"
    },
    {
      idArticle: "21",
      title: "Remote Work: The New Normal",
      description: "Remote work has become a standard practice, changing the dynamics of the workplace.",
      thumbnail: "https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Business",
      idCategory: "3"
    },
    {
      idArticle: "22",
      title: "Sustainable Business Practices",
      description: "Businesses are increasingly adopting sustainable practices to meet consumer demand and reduce their environmental impact.",
      thumbnail: "https://images.pexels.com/photos/3055791/pexels-photo-3055791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Business",
      idCategory: "3"
    },
    {
      idArticle: "23",
      title: "The Role of AI in Business",
      description: "Artificial intelligence is revolutionizing business operations, improving efficiency and decision-making.",
      thumbnail: "https://images.pexels.com/photos/3861990/pexels-photo-3861990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Business",
      idCategory: "3"
    },
    {
      idArticle: "24",
      title: "Entrepreneurship in the Digital Age",
      description: "The digital era has opened new avenues for entrepreneurs, fostering innovation and growth.",
      thumbnail: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Business",
      idCategory: "3"
    },
    {
      idArticle: "25",
      title: "The Rise of Esports",
      description: "Esports has gained massive popularity, becoming a legitimate form of competition and entertainment.",
      thumbnail: "https://images.pexels.com/photos/3396213/pexels-photo-3396213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Sports",
      idCategory: "2"
    },
    {
      idArticle: "26",
      title: "The Impact of Technology on Sports Training",
      description: "Technology is transforming sports training, providing athletes with advanced tools for performance improvement.",
      thumbnail: "https://images.pexels.com/photos/3378655/pexels-photo-3378655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Sports",
      idCategory: "2"
    },
    {
      idArticle: "27",
      title: "Women in Sports: Breaking Barriers",
      description: "Women athletes are making significant strides in various sports, breaking barriers and inspiring future generations.",
      thumbnail: "https://images.pexels.com/photos/3761534/pexels-photo-3761534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Sports",
      idCategory: "2"
    },
    {
      idArticle: "28",
      title: "Major Sports Events to Look Forward To",
      description: "Upcoming major sports events promise thrilling competitions and unforgettable moments.",
      thumbnail: "https://images.pexels.com/photos/3099493/pexels-photo-3099493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Sports",
      idCategory: "2"
    },
    {
      idArticle: "29",
      title: "The Role of Technology in Sports Analytics",
      description: "Technology is enhancing sports analytics, providing teams with valuable insights to improve performance.",
      thumbnail: "https://images.pexels.com/photos/1074043/pexels-photo-1074043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Sports",
      idCategory: "2"
    }
  ]);

  const handleChangeCategory = (category) => {
    setActiveCategory(category);
  };

  // Filter articles by active category during rendering
  const filteredArticles = allArticles.filter(
    (article) => article.category === activeCategory
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        testID="scrollContainer"
      >
        <View style={styles.headerContainer} testID="headerContainer">
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avatar}
          />
          <Text style={styles.greetingText}>Hello, User!</Text>
        </View>

        <View style={styles.titleContainer} testID="titleContainer">
          <Text style={styles.title}>Stay updated with the latest news,</Text>
          <Text style={styles.subtitle}>
            from around the <Text style={styles.highlight}>world</Text>
          </Text>
        </View>

        <View testID="categoryList">
            <Categories
            categories={categories}
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
        />
        </View>

        <View testID="articleList">
            <Articles articles={filteredArticles} categories={categories}/>
         
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // white
  },
  scrollContainer: {
    paddingBottom: 50,
    paddingTop: hp(14), // pt-14 equivalent
  },
  headerContainer: {
    marginHorizontal: wp(4), // mx-4 equivalent
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
    marginTop: hp(-8.5),
  },
  avatar: {
    height: hp(5),
    width: hp(5.5),
  },
  greetingText: {
    fontSize: hp(1.7),
    color: "#52525B", // neutral-600
    fontWeight: "600", // font-semibold
    backgroundColor: "#F3F4F6", // gray-100
    paddingHorizontal: wp(2), // px-2
    paddingVertical: hp(0.5), // py-1
    borderRadius: 9999, // full rounded
    textAlign: "center",
  },
  titleContainer: {
    marginHorizontal: wp(4), // mx-4
    marginBottom: hp(2), // mb-2
  },
  title: {
    fontSize: hp(3.8),
    fontWeight: "600", // font-semibold
    color: "#52525B", // neutral-600
  },
  subtitle: {
    fontSize: hp(3.8),
    fontWeight: "600", // font-semibold
    color: "#52525B", // neutral-600
  },
  highlight: {
    color: "#F59E0B", // amber-400
  },
});
