import React from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TheatersIcon from "@material-ui/icons/Theaters";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";
import FlagIcon from "@material-ui/icons/Flag";
import { DataContext } from "../../Context/DataContextProvider";
import { Link } from "react-router-dom";

const SideBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  background-color: #ffffff;
  color: #606060;
`;

const Img = styled.img`
  width: 23px;
  border-radius: 100px;
  height: 23px;
`;

const Heading = styled.div`
  color: #989898;
  font-weight: bold;
  font-size: 123x;
`;

const Line = styled.div`
  width: 100%;
  height: 0.1px;
  background-color: grey;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #d4d5d2;
`;

const SideItem = styled.div`
  font-size: 13.5px;
  font-weight: light;
  display: flex;
  flex-direction: row;
  padding-left: 25px;
  padding-top: 8px;
  padding-bottom: 6px;
  line-height: 28px;
  flex-wrap: wrap;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const ItemName = styled.div`
  margin-left: 30px;
  color: #0c0c0c;
  font-size: 14px;
`;

const Foots = styled.div`
  color: #606060;
  font-weight: bold;
  font-size: 12px;
  margin-right: 5px;
`;

const SideSmallBox = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
`
const SideItemBox = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  font-size: 10px;
  color: #606060;
  text-align: center;
  line-height: 20px;
     &:hover {
      background-color: #f2f2f2;
     }
`

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrending1 = this.handleTrending1.bind(this)
  }

  handleTrending1() {
    const {handleTrending} = this.context
    handleTrending()
  }

  render() {
    const { isToggle } = this.context;

    return !isToggle ? (
      <SideBox>
        <SideItem>
          <HomeIcon />
          <ItemName>Home</ItemName>
        </SideItem>
        <SideItem
        onClick = 
          {this.handleTrending1}
        >
          <WhatshotIcon />
          <ItemName 
          >Trending</ItemName>
        </SideItem>
        <SideItem>
          <SubscriptionsIcon />
          <ItemName>Subscriptions</ItemName>
        </SideItem>
        <Line />
        <SideItem>
          <VideoLibraryIcon />
          <ItemName>Library</ItemName>
        </SideItem>
        <SideItem>
          <HistoryIcon />
          <ItemName> History</ItemName>
        </SideItem>
        <SideItem>
          <WatchLaterIcon />
          <ItemName>Watch later</ItemName>
        </SideItem>
        <SideItem>
          <ThumbUpAltIcon />
          <ItemName>Liked videos </ItemName>
        </SideItem>
        <Line />
        <SideItem>
          <Heading>SUBSCRIPTIONS</Heading>
        </SideItem>
        <SideItem>
          <Img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/07/14/609341-tanmay-bhat.jpg" />
          <ItemName>Tanmay Bhat</ItemName>
        </SideItem>
        <SideItem>
          <Img src="https://starsunfolded.com/wp-content/uploads/2020/05/Shreya-Jain-2.jpg" />
          <ItemName>Shreya Jain</ItemName>
        </SideItem>
        <SideItem>
          <Img src="https://cdn.newsapi.com.au/image/v1/f5d9dba78510f7cda4b13c1aa38b353e" />
          <ItemName>Chloe Ting</ItemName>
        </SideItem>
        <SideItem>
          <Img src="https://www.adweek.com/wp-content/uploads/2019/11/Marques-Brownlee-talentpool-content-2019.png" />
          <ItemName>Marquees Brownlee</ItemName>
        </SideItem>
        <Line />
        <SideItem>
          <Heading>MORE FROM YOUTUBE</Heading>
        </SideItem>
        <SideItem>
          <YouTubeIcon />
          <ItemName> Youtube Premium</ItemName>
        </SideItem>
        <SideItem>
          <TheatersIcon />
          <ItemName>Movies</ItemName>
        </SideItem>
        <SideItem>
          <SportsEsportsIcon />
          <ItemName>Gaming</ItemName>
        </SideItem>
        <SideItem>
          <LiveTvIcon />
          <ItemName>Live</ItemName>
        </SideItem>
        <SideItem>
          <FitnessCenterIcon />
          <ItemName>Fitness</ItemName>
        </SideItem>
        <SideItem>
          <EmojiObjectsIcon />
          <ItemName>Learning</ItemName>
        </SideItem>
        <Line />
        <SideItem>
          <SettingsIcon />
          <ItemName>Settings</ItemName>
        </SideItem>
        <SideItem>
          <FlagIcon />
          <ItemName>Report history</ItemName>
        </SideItem>
        <SideItem>
          <HelpIcon />
          <ItemName>Help</ItemName>
        </SideItem>
        <SideItem>
          <FeedbackIcon />
          <ItemName>Send feedback</ItemName>
        </SideItem>
        <Line />
        <SideItem>
          <Foots>About</Foots>
          <Foots>Press</Foots>
          <Foots>Copyright</Foots>
          <Foots>Contact Us</Foots>
          <Foots style={{ marginRight: "30px" }}>Creators</Foots>
          <Foots>Advertise</Foots>
          <Foots>Developers</Foots>
        </SideItem>
        <SideItem>
          <Foots>Terms</Foots>
          <Foots>Privacy</Foots>
          <Foots>Policy & Safety</Foots>
          <Foots>How YouTube works</Foots>
          <Foots>Test new features</Foots>
        </SideItem>
      </SideBox>
    ) : (
      <SideSmallBox>
        <SideItemBox>
          <div><HomeIcon/></div>
          <div>Home</div>
        </SideItemBox>
        <SideItemBox onClick = 
          {this.handleTrending1}>
          <div><WhatshotIcon/></div>
          <div>Trending</div>
        </SideItemBox>
        <SideItemBox>
          <div><SubscriptionsIcon/></div>
          <div>Subscriptions</div>
        </SideItemBox>
        <SideItemBox>
          <div><VideoLibraryIcon/></div>
          <div>Library</div>
        </SideItemBox>
      </SideSmallBox>
    );
  }
}

Sidebar.contextType = DataContext