import React from "react";
import styled from 'styled-components';
import styles from './Login.module.css'
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const SideBox = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  width: 280px;
  background-color: #ffffff;
  color: #606060 !important;
  margin-bottom: 10px
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
            isAuth: false,
            email: "aryanishthaa@gmail.com",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const {email, password} = this.state

        if (email === "arynishthaa@gmail.com" && password === "nishtha") {
            this.setState({
                isAuth: true
            })
        }
    }

    render() {
        const {email, password, isAuth} = this.state

        return !isAuth ? (
            <SideBox className = {styles.box}>
                <SideItem1 className = {styles.name}>
                    <div><AccountCircleIcon fontSize = "large"/> </div>
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

                    <ItemName>Purchases and Memberships</ItemName>
                </SideItem>
            </SideBox>
        ) : (<SideBox></SideBox>)
    }
}

export {Login}