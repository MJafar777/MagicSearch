import React from "react";
// import ReactDom from "react-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { kalitSoz: "" };
  }
  func = (event) => {
    event.preventDefault();
    this.setState({ kalitSoz: event.target.value });
  };
  onFormSubmit = async (e) => {
    e.preventDefault();
    this.props.malumotniOl(this.state.kalitSoz);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <form onSubmit={this.onFormSubmit} className="ui search">
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
              onChange={this.func}
              className="prompt"
              type="text"
              placeholder="Search images..."
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
