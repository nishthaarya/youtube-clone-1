import React from "react";
import { DataContext } from "../../Context/DataContextProvider";
import axios from "axios";
import { RelatedVideoItem } from './RelatedVideoItem'
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import PlaylistAddSharpIcon from "@material-ui/icons/PlaylistAddSharp";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import styled from 'styled-components'
import styles from './RelatedVid.module.css'
import PersonIcon from '@material-ui/icons/Person';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

const VideoPage = styled.div`
  
`

const Line = styled.div`
  width: 100%;
  height: .5px;
  background-color: #909090;
  opacity: .2
`

class RelatedVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedVideos: [],
     // videoId: this.context.videoId
    };
  }
  componentDidMount() {
    var api_key = "AIzaSyAwwGZv6c1QFexBeicJhRd1QXuh41XrcOA";
    axios({
      method: "get",
      url: "https://youtube.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        key: api_key,
        maxResults: 20,
        type: "video",
        relatedToVideoId: this.context.videoId,
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
  diffDate = (createdDate) => {
  const date = new Date(createdDate).getTime();
  const y = new Date(createdDate);
  const date1 = new Date();
  let yearsDiff = date1.getFullYear() - y.getFullYear();
  let months = date1.getMonth() - y.getMonth();
  let secDiff = Math.floor((date1 - date) / 1000);
  let minutesDiff = Math.floor(secDiff / 60);
  let hoursDiff = Math.floor(minutesDiff / 60);
  let daysDiff = Math.floor(hoursDiff / 24);
  return yearsDiff > 0
    ? `${yearsDiff} years ago`
    : months > 0
    ? `${months} monthes ago`
    : daysDiff > 0
    ? `${daysDiff} days ago`
    : hoursDiff > 0
    ? `${hoursDiff} hours ago`
    : minutesDiff > 0
    ? `${minutesDiff} minutes ago`
    : `${secDiff} seconds ago`;
}
  render() {
    const { search, relatedVideos, videoId } = this.state;
    const { handleSearch, handleToggle } = this.context;
    const embedUrl = `${BASE_EMBED_URL}${videoId}`
     let createdDate = new Date(relatedVideos[0]?.snippet.publishedAt);
     let diff = this.diffDate(createdDate);
    return (
      <div className = {styles.full}>
        <div className = {styles.left}>
          <div>
          <iframe width={'966'} height={'544'} src={embedUrl} frameBorder='0'
            allow='autoplay; encrypted-media' allowFullScreen title={'video'}/>
          </div>
          <div>
            <div>
              <div className = {styles.title}>{relatedVideos[0]?.snippet.title}</div>
              <div className = {styles.details}>
                <div style = {{marginRight: "400px", marginTop: "10px"}}> 108k views  • {diff} </div>
                  <div className = {styles.icons}><ThumbUpIcon/></div> <div style= {{marginTop: "15px", fontWeight: "bold", marginRight: "10px", color: "#606060"}}>5K</div>
                  <div className = {styles.icons}><ThumbDownIcon/></div> <div style= {{marginTop: "15px", fontWeight: "bold", marginRight: "10px", color: "#606060"}}>1.2K</div>
                  <div className = {styles.icons}> <ScreenShareIcon/> </div> <div style= {{marginTop: "15px", fontWeight: "bold", marginRight: "10px", color: "#606060"}}>SHARE</div>
                  <div className = {styles.icons}> <PlaylistAddSharpIcon/> </div>
                  <div style= {{marginTop: "15px", fontWeight: "bold", marginRight: "10px", color: "#606060"}}>SAVE</div>
                  <div className = {styles.icons}> <MoreHorizIcon/> </div>
              </div>
              <Line/>
              <div className = {styles.name}>
                <div>
                <PersonIcon fontSize = "large"/>
                </div>
              <div>{relatedVideos[0]?.snippet.channelTitle}
              <br/>
              {relatedVideos[0]?.snippet.description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className = {styles.right}>
          <ul>
            {relatedVideos
              ?.filter((el, index) => index < 40 && index > 0)
              .map((el, index) => {
                return <RelatedVideoItem {...el} key={index} />;
              })}
          </ul>
        </div>
      </div>
    );
  }
}
RelatedVideo.contextType = DataContext;
export { RelatedVideo };