import React from "react";
import styled from 'styled-components';
import styles from './Login.module.css'
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import InputIcon from '@material-ui/icons/Input';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import TranslateIcon from '@material-ui/icons/Translate';
import LanguageIcon from '@material-ui/icons/Language';
import SecurityIcon from '@material-ui/icons/Security';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { DataContext } from "../../Context/DataContextProvider";

const SideBox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  float: right;
  width: 300px;
  background-color: #ffffff;
  color: #606060 !important;
  margin-bottom: 10px;
  z-index: 999;
`;

const ItemName = styled.div`
  margin-left: 30px;
  color: #0c0c0c;
  font-size: 14px;
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const SideItem1 = styled.div `
  font-size: 13.5px;
  font-weight: light;
  display: flex;
  flex-direction: row;
  padding-left: 25px;
  padding-top: 8px;
  padding-bottom: 15px;
  line-height: 28px;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Line = styled.div`
  width: 100%;
  height: 0.1px;
  background-color: grey;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #d4d5d2;
`;


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "aryanishthaa@gmail.com"
        }
    }

    render() {
        console.log(this.props)
        const {email} = this.state

        const {isAuth} = this.context
        console.log("isauth -- " , isAuth)

        if (isAuth === true) { return (
            <SideBox className = {styles.box}>
                <SideItem1 className = {styles.name}>
                    <div className = {styles.icon1}><AccountCircleIcon fontSize = "large"/> </div>
                    <div className = {styles.realname}>
                        <div> Nishtha Arya </div>
                        <div className = {styles.email}> {email} </div>
                        <div className = {styles.gmail}>Manage your Google Account</div>
                    </div>
                </SideItem1>
                <Line/>
                <SideItem>
                    <AccountBoxIcon/>
                    <ItemName>Create a channel</ItemName>
                </SideItem>
                <SideItem>
                    <MonetizationOnIcon/>
                    <ItemName>Purchases and Memberships</ItemName>
                </SideItem>
                <SideItem>
                    <SettingsIcon/>
                    <ItemName>YouTube Studio</ItemName>
                </SideItem>
                <SideItem>
                    <PeopleAltIcon/>
                    <ItemName>Switch account</ItemName>
                </SideItem>
                <SideItem>
                    <InputIcon/>
                    <ItemName>Sign out</ItemName>
                </SideItem>
                <Line/>
                <SideItem>
                    <Brightness4Icon/>
                    <ItemName>Appearance: Light</ItemName>
                </SideItem>
                <SideItem>
                    <TranslateIcon/>
                    <ItemName>Language: English</ItemName>
                </SideItem>
                <SideItem>
                    <LanguageIcon/>
                    <ItemName>Location: India</ItemName>
                </SideItem>
                <SideItem>
                    <SettingsIcon/>
                    <ItemName>Settings</ItemName>
                </SideItem>
                <SideItem>
                    <SecurityIcon/>
                    <ItemName> Your data in YouTube </ItemName>
                </SideItem>
                <SideItem>
                    <HelpIcon/>
                    <ItemName>Help</ItemName>
                </SideItem>
                <SideItem>
                    <FeedbackIcon/>
                    <ItemName>Send Feedback</ItemName>
                </SideItem>
                <SideItem>
                    <KeyboardIcon/>
                    <ItemName>Keyboard Shortcuts</ItemName>
                </SideItem>
                <Line/>
                <SideItem>
                    <ItemName>Restricted Mode: Off</ItemName>
                </SideItem>
            </SideBox>
        ) }
    }
}
Login.contextType = DataContext
export {Login}
