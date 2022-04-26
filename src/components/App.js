import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
// import SearchBar from "./SearchBar";
class App extends React.Component {
  state = { kalit: "", urrll: null };
  SearchdanMalumotniOl = (data) => {
    this.setState({ kalit: data });
  };

  getData = async () => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: this.state.kalit,
      },
      headers: {
        Authorization: "Client-ID fFxqUKuJS8hx3nwzRQoYiHB5URcqFjkGG-FSsZUDOb4",
      },
    });
    console.log(data.data.results);
  };

  getUrl(data) {
    console.log(data);
  }

  componentDidUpdate() {
    // this.setState(})
    this.getData();
  }

  render() {
    return (
      <div>
        <SearchBar malumotniOl={this.SearchdanMalumotniOl} />
        <ImageList getData={this.getUrl} />
      </div>
    );
  }
}

export default App;
