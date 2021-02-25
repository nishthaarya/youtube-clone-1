import React from "react";
import styles from './RelatedVid.module.css'
import styled from 'styled-components'
import { DataContext } from "../../Context/DataContextProvider";

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Img = styled.img `
  width: 170px;
  height: 100px
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px
`

const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 600;
`
const Channel = styled.div`
  color: #757474;
  font-size: 13px;
  font-weight: 400;
  padding-top: 5px
`

class RelatedVideoItem extends React.Component {
  constructor(props) {
    super(props)

    this.selectVideo = this.selectVideo.bind(this)
    this.diffDate = this.diffDate.bind(this)
  }

  diffDate(createdDate) {
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

  selectVideo(id) {
    const { sendVideoId } = this.context;
    const { history } = this.props;
    console.log(this.props, "history", history);
    history.push(`/videos/${id}`);
    sendVideoId(id);
  }

  render()  {
    let createdDate = new Date(this.props.snippet.publishedAt);
    let diff = this.diffDate(createdDate);

    // console.log(this.props);
    return (
      <div onClick = {() => this.selectVideo(this.props.id.videoId)} >
        <Card>
        <div>
          <Img src = {this.props.snippet.thumbnails.default.url}></Img>
        </div>
        <Right>
          <Title> {this.props.snippet.title} </Title>
          <Channel> {this.props.snippet.channelTitle} </Channel>
          <Channel> 108k views • {diff} </Channel>
        </Right>
       </Card>
      </div>
    );
    } 
}

RelatedVideoItem.contextType = DataContext
export { RelatedVideoItem };

//{el.snippet.thumbnails.default.url}
// {el.snippet.title}
// {el.snippet.channelTitle}
// views
// {diff}
