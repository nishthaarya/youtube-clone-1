import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MenuIcon from "@material-ui/icons/Menu";
import { DebounceInput } from "react-debounce-input";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Navbar.css";
import { DataContext } from "../../Context/DataContextProvider";
import axios from 'axios'
import styled from 'styled-components'
import { Modal } from "@material-ui/core";
import { Login } from "../Login/Login";
import { Link, NavLink, Redirect } from "react-router-dom";

const Icon = styled.div`
  font-size: 15px;
  margin-right: 23px;
`
const Menu = styled.div`
  padding: 10px 20px;
  color: #606060;
  text-align: center;
  line-height: 20px;
     &:hover {
      background-color: #f2f2f2;
     }
`

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchlist: [],
      showModal: false,
      closeModal: true
    };
    this.toggleModal = this.toggleModal.bind(this)  
  }

  toggleModal(){
    this.setState({
      showModal: !this.state.showModal
    })
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
    const { value } = e.target;
    const { handleSearch } = this.context;

    this.setState({
      search: value,
    });
    handleSearch(this.state.search);
  };

  render() {
    const { search, searchlist, isAuth } = this.state;
    const { handleSearch, handleToggle, handleAuth } = this.context;
    // console.log(data);
    var list = searchlist?.filter((el, index) => index < 15);
    return (
      <>
        <div className="navbarContainer">
          <div className="left">
            <Menu onClick={handleToggle}>
              <MenuIcon />
            </Menu>
            <Link to = "/home">
            <div>
              <img
                src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg"
                className="homeBtn"
              />
            </div>
            </Link>
          </div>
          <div className="center">
            <DebounceInput 
            placeholder = "Search"
            className = "searchbar"
              minLength={2}
              debounceTimeout={300}
              onChange={this.handleChange}
            />

            {/* <input
              id="searchBar"
              placeholder="Search"
              value={search}
              onChange={this.handleChange}
            /> */}

            <button id="searchButton">
              <SearchIcon
                style={{ color: "grey", fontSize: "20px" }}
                onClick={() => handleSearch(search)}
              />
            </button>
          </div>

          <div className="right">
            <Icon>
              <VideoCallIcon />
            </Icon>

            <Icon>
              <AppsIcon />
            </Icon>

            <Icon>
              <NotificationsIcon />
            </Icon>
            <div  onClick = {this.toggleModal} >
            <Icon>
              <AccountCircleIcon />
            </Icon>
            </div>
          </div>
        </div>
        <Modal open={this.state.showModal} onClose = {this.toggleModal} >
          <Login/>
        </Modal>
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
