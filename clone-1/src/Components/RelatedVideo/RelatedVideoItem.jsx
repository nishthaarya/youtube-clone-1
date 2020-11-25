// AIzaSyB54tyieozL3BLkpxHssdGOcdI3RCzVs_Q

import React from "react";


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
  console.log(el)
  return (
    <div >
      <div>
        <img src={el.snippet.thumbnails.default.url} alt="thumbnail" />
      </div>
      <div>
        <div >
          <h5>{el.snippet.title}</h5>
          <p >{el.snippet.channelTitle}</p>
          <p >
            <span> 20k views</span>
            <span>{diff}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export { RelatedVideoItem };

