import React from 'react';
import styles from './Videos.module.css'
import {
    UserOutlined,ClockCircleFilled,MenuUnfoldOutlined
  } from '@ant-design/icons';

function diffDate(createdDate){
    const date = new Date(createdDate).getTime()
    const y = new Date(createdDate)
    const date1= new Date()
    let yearsDiff =  date1.getFullYear() - y.getFullYear();
    let months =(date1.getMonth() - y.getMonth())
    let secDiff = Math.floor( ( date1 - date) / 1000 );
    let minutesDiff = Math.floor( secDiff / 60 );
    let hoursDiff = Math.floor( minutesDiff / 60 );
    let daysDiff = Math.floor( hoursDiff / 24 );
    return yearsDiff > 0 ? `${yearsDiff} years ago` : months > 0 ? `${months} monthes ago` : daysDiff > 0 ? `${daysDiff} days ago` : 
            hoursDiff > 0 ? `${hoursDiff} hours ago` : minutesDiff > 0 ? `${minutesDiff} minutes ago` : `${secDiff} seconds ago` 

}

function VideoItem(item){
    let createdDate = new Date(item.snippet.publishedAt)
    let diff = diffDate(createdDate)
    // console.log(item.snippet.publishedAt);
    return(
        <div className={styles.Video_card}>
            <div className={styles.thumbnail}>
            {/* <div className={styles.thumbnailshover}></div> */}
            <img
              src={item.snippet.thumbnails.default.url}
              alt="thumbnail"
            />
            <span>
            <ClockCircleFilled style={{color : "white", marginBottom: "10px",background:"black",width:35,height:30,paddingTop:8}}/>
            <MenuUnfoldOutlined style={{color : "white",background:"black",width:35,height:28,paddingTop:8}}/>
            </span>
            </div>
            <div>
            <UserOutlined style={{margin : "5px 15px 0 0", border: "1px solid black",borderRadius: "50%",height : "25px",width:"30px",paddingTop:5}}/>
            <div className={styles.VideoInfo}>

            <h5>{item.snippet.title}</h5>
            <p className={styles.channelname}>{item.snippet.channelTitle}</p>
    <p className={styles.viewsandtime}><span> 20k views • {diff}</span>
                
            </p>
            </div>
            </div>
            
        </div>
    )
}

export {VideoItem}