const axios = require("axios");


// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
      //Books should go here
    return axios.get("/api/", { params: { q: query } });
  }
};
