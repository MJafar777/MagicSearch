import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
// import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { imageArr: [] };

  SearchdanMalumotniOl = async (imgdata) => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: imgdata,
        page: 1,
        per_page: 1000,
      },
      headers: {
        Authorization: "Client-ID fFxqUKuJS8hx3nwzRQoYiHB5URcqFjkGG-FSsZUDOb4",
      },
    });
    this.setState({ imageArr: data.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar malumotniOl={this.SearchdanMalumotniOl} />
        <ImageList getData={this.state.imageArr} />
      </div>
    );
  }
}

export default App;
