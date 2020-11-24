import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Navbar.css";
import { DataContext } from "../../Context/DataContextProvider";
import axios from 'axios'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchlist: []
    };
  }

  // debouncerer = (delay, callback) => {
  //   var debounce;
  //   return function () {
  //     var value = this.state.search;
  //     debounce && clearTimeout(debounce);
  //     debounce = setTimeout(function () {
  //       callback(value);
  //     }, delay);
  //   };
  // };
  componentDidMount(){
    console.log(this.state.search);
  }

  debouncer(){
    var api_key = "AIzaSyDnOErpl_HkR8b2BYSWlA4u6Ghtyr4ytSs";
        axios({
          method: "get",
          url:
            "https://youtube.googleapis.com/youtube/v3/search",
          params: {
            part: "snippet",
            key: api_key,
            maxResults: 15,
            q : this.state.search
          },
        })
          .then((response) => {
              console.log(response.data.items);
              return (
                  this.setState({
                      searchlist: response.data.items
                  })
              )
          })
          .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    e.persist()
    const { value } = e.target;
    this.setState({
      search: value,
    });
    
  };

  render() {
    const { search, searchlist } = this.state;
    const { handleSearch, handleToggle } = this.context;
    // console.log(data);
    return (
      <>
        <div className="navbarContainer">
          <div className="left">
            <button id="sidebarToggle" onClick={handleToggle}>
              <MenuIcon id="icon" />
            </button>

            <div id="homeBtn">
              <YouTubeIcon id="icon" style={{ color: "red" }} />
              <h1>YouTube</h1>
            </div>
          </div>
          <div className="center">
            <input
              id="searchBar"
              placeholder="Search"
              value={search}
              onChange={this.handleChange}
            />

            <button id="searchButton">
              <SearchIcon
                style={{ color: "grey" }}
                onClick={() => handleSearch(search)}
              />
            </button>
          </div>

          <div className="right">
            <button id="createVideo">
              <VideoCallIcon id="icon" />
            </button>

            <button id="appsicon">
              <AppsIcon />
            </button>

            <button id="createVideo">
              <NotificationsIcon />
            </button>

            <button id="createVideo">
              <AccountCircleIcon />
            </button>
          </div>
        </div>

        <div className="searchlist">
          <ul>
            {searchlist
              ?.filter((el, index) => index < 15)
              .map((el, ind) => {
                return <li key={ind}>{el.snippet.title}</li>;
              })}
          </ul>
        </div>
      </>
    );
  }
}
Navbar.contextType = DataContext;

export { Navbar };
