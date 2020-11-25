import React from "react";
import { DataContext } from "../../Context/DataContextProvider";
import axios from "axios";
import data from "data.json";

class RelatedVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: this.context.videoId,
      relatedVideos: [data],
    };
  }

  apiCall() {
    var api_key = "AIzaSyDnOErpl_HkR8b2BYSWlA4u6Ghtyr4ytSs";
    axios({
      method: "get",
      url: "https://youtube.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        key: api_key,
        maxResults: 20,
        type: "video",
        relatedToVideoId: this.state.videoId,
      },
    })
      .then((response) => {
        console.log(response.data.items);
        return this.setState({
          relatedVideos: response.data.items,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    e.persist();
    const { value } = e.target;
    this.setState({
      search: value,
    });
  };

  render() {
    const { search, relatedVideos } = this.state;
    const { handleSearch, handleToggle } = this.context;
    return (
      <>
        <div>
          <div>
            {}
          </div>
          <ul>
            {relatedVideos
              ?.filter((el, index) => index < 40)
              .map((el, index) => {
                return <RealtedVideoItem {...el} key={index}/>;
              })}
          </ul>
        </div>
      </>
    );
  }
}
RelatedVideo.contextType = DataContext;

export { RelatedVideo };
