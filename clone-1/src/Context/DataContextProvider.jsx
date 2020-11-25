import React from 'react'
import axios from 'axios'

const DataContext = React.createContext();

export default class DataContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isToggle: false,
            loading: false,
            videoId: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    componentDidMount() {
        this.setState({
          loading: true
        });

        axios({
          method: "get",
          url: "https://youtube.googleapis.com/youtube/v3/videos",
          params: {
            part: "snippet",
            chart: "mostPopular",
            key: "AIzaSyDKJVc3u1Y_Q3hMf9b5WMkSF6mHT-4c69Q",
            maxResults: 50,
          },
        })
          .then((res) => {
            this.setState({
              data: res.data.items,
              loading: false,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    handleSearch(search){
    var api_key = "AIzaSyDnOErpl_HkR8b2BYSWlA4u6Ghtyr4ytSs";
        axios({
          method: "get",
          url:
            "https://youtube.googleapis.com/youtube/v3/search",
          params: {
            part: "snippet",
            key: api_key,
            maxResults: 50,
            q : search
          },
        })
          .then((response) => {
              console.log(response.data.items);
              return (
                  this.setState({
                      data: response.data.items
                  })
              )
          })
          .catch((err) => console.log(err));
    }
    handleToggle(){
        const {isToggle} = this.state
        if (isToggle === false) {
          this.setState({
            isToggle: true
          })
        }
        else {
          this.setState({
            isToggle: false
          })
        }
    }
    sendVideoId(id){
      this.setState({
        videoId: id
      })
    }
    componentDidUpdate(){
        console.log(this.state.isToggle)
    }

    render() {
        const { 
            handleSearch,
            handleToggle,
            sendVideoId
         } = this;

        const {
            data, loading, isToggle, videoId
         } = this.state;

        const value =
         {
            handleSearch,
            handleToggle,
            data,
            isToggle,
            sendVideoId,
            videoId
        };
        return (
           <DataContext.Provider value={value}>
               {this.props.children}
           </DataContext.Provider>
        )
    }
}

export {DataContext, DataContextProvider}

