import React from 'react'
import axios from 'axios'

const DataContext = React.createContext();

export default class DataContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isToggle: false,
            loading : false
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
            key: "AIzaSyBn6b2JTx6poyQPcJ9KdGlkmrsPxF2xL1U",
            maxResults: 50
          }
        })
          .then((res) => {
            this.setState({
              data: res.data.items,
              loading: false
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
        const {isToggle} = this.state ;
        this.setState({
            isToggle: !isToggle
        })
    }
    componentDidUpdate(){
        console.log(this.state.isToggle)
    }

    render() {
        const { 
            handleSearch,
            handleToggle
         } = this;

        const {
            data
         } = this.state;

        const value =
         {
            handleSearch,
            handleToggle,
            data
        };
        return (
           <DataContext.Provider value={value}>
               {this.props.children}
           </DataContext.Provider>
        )
    }
}

export {DataContext, DataContextProvider}
