import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import Header from "../components/Header";
import styled from "styled-components";
import HomeBox from "../home/HomeBox"
import Layout from "../components/Layout"
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const goToADDTodo = () => {
    navigate("/add");
  };
  const goToTodoList = () => {
    navigate("/todos");
  };

 

  return (
    <Stlayout>
      <div>
        <div>
          <Header />
          <h1>무엇을 할까요 ? 할게 있나요?</h1>

          <div onClick={goToADDTodo}>
            <div>할일 기록하기</div>
            <BsArrowRightCircle size="32"></BsArrowRightCircle>
          </div>
          <div onClick={goToTodoList}>
            <div>할일 리스트</div>
            <BsArrowRightCircle size="32"></BsArrowRightCircle>
          </div>

          {/* <HomeBox title="할일 기록하기" onClick={goToADDTodo} />

        <HomeBox title="TODO LIST" onClick={goToTodoList} /> */}
        </div>
      </div>
    </Stlayout>
  );
};

export default Home;

const Stlayout = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-width: 800px;
  align-items: center;
  justify-content: center;
  background-color: lightskyblue;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
