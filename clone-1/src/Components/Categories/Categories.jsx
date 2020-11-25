import React from "react";
import styled from "styled-components";

const BigBox = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  flex-wrap: nowrap;
`;

const Category = styled.button`
  padding: 7px 14px;
  background-color: #f2f2f2;
  color: #030303;
  border-radius: 15px;
  margin: 5px;
  border: 1px solid #d4d5d2;
  font-size: 14px;
  &:hover {
    background-color: #e5e5e5;
  }
`;

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        "All",
        "Apple",
        "Fitness",
        "Drama",
        "Food",
        "Travel",
        "Recipes",
        "Shopping",
        "Skincare",
        "React",
        "Dancehall",
        "Coding",
        "Comedy",
        "Funny"
      ]
    };
  }

  render() {
    const { categories } = this.state;

    return (
      <BigBox>
        {categories.map((item) => (
          <Category> {item} </Category>
        ))}
      </BigBox>
    );
  }
}
