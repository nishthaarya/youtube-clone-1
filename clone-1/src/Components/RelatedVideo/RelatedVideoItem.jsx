import React from "react";
import styles from "./RelatedVid.module.css";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Img = styled.img`
  width: 170px;
  height: 100px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 600;
`;
const Channel = styled.div`
  color: #757474;
  font-size: 13px;
  font-weight: 400;
  padding-top: 5px;
`;

function diffDate(createdDate) {
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
function RelatedVideoItem(el) {
  let createdDate = new Date(el.snippet.publishedAt);
  let diff = diffDate(createdDate);
  console.log(el);
  return (
    <Card>
      <div>
        <Img src={el.snippet.thumbnails.default.url}></Img>
      </div>
      <Right>
        <Title> {el.snippet.title} </Title>
        <Channel> {el.snippet.channelTitle} </Channel>
        <Channel> 108k views • {diff} </Channel>
      </Right>
    </Card>
  );
}
export { RelatedVideoItem };
