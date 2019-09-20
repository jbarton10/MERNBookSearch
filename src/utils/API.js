
import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query) {
      //Books should go here
    return axios.get("/api/", { params: { q: query } });
  }
};
