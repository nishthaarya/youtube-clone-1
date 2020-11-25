import React from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { VideoItem } from "./VideoItem";
import styles from './Videos.module.css'

class Videos extends React.Component {
  constructor(props) {
    super(props)
    this.selectVideo = this.selectVideo.bind(this);
  }
  selectVideo(id){
    const { sendVideoId } = this.context;
    const { history } = this.props;
    history.push(`/videos/${id}`);
    sendVideoId(id)
  }
  
  render() {
    const { data, loading, sendVideoId, isSearching } = this.context;
    console.log(data);
    return loading ? <h4>Loading...</h4> :(
      <>
        <div className={styles.main_content}>
          {data.map((item) => {
            console.log(item.id, item.id.videoId)
            return !isSearching ? (
              <VideoItem
                key={item.id}
                {...item}
                onclick={() => this.selectVideo(item.id.videoId)}
              />
            ) : (
              <VideoItem
                key={item.id.videoId}
                onclick={() => this.selectVideo(item.id.videoId)}
                {...item}
              />
            );
          })
        }
        </div>
      </>
    );
  }
}

Videos.contextType = DataContext;
export { Videos };
