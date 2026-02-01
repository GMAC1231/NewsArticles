import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteArticles: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
        const article = action.payload; // Expecting the entire article object
        const existingIndex = state.favoriteArticles.findIndex(
          (item) => item.id === article.idArticle // Assuming articles have an 'id' property
        );
        if (existingIndex >= 0) {
          state.favoriteArticles.splice(existingIndex, 1); // Remove from favorites
        } else {
          state.favoriteArticles.push(article); // Add to favorites
        }
      },
   
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
