import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Buttons from "./Buttons";
// import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { imageArr: [], search: "", page: 1 };

  SearchdanMalumotniOl = async (imgdata, pg = 1) => {
    if (pg) {
      this.setState({ page: pg });
      this.setState({ search: imgdata });
    }
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: imgdata,
        page: pg,
        per_page: 20,
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
        <Buttons
          func={this.SearchdanMalumotniOl}
          search={this.state.search}
          page={this.state.page}
        />
        <SearchBar malumotniOl={this.SearchdanMalumotniOl} />
        <ImageList getData={this.state.imageArr} />
      </div>
    );
  }
}

export default App;
