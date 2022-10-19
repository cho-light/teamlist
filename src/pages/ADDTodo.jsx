import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __addTodoThunk } from "../redux/modules/todosSlice";
import AddCommentForm from "../components/AddCommentForm";

export const Formepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
  const goToListpage = () => {
    navigate("/todos");
  };
  const goToHomepage = () => {
    navigate("/");
  };
  const onSubmitHandler = (todo) => {
    dispatch(__addTodoThunk(todo));
    navigate("/todos");
  };

  return (
    <Stlayout>
      <Header />
      <form
        className="FORM-GROUP"
        onSubmit={(e) => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다. //포스트구문 전부

          onSubmitHandler(todo);
          goToListpage(e);
        }}
      >
        <h1>작성자</h1>
        <input
          className="inpot"
          type="text"
          required
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              user: value,
            });
          }}
        />
        <h1>제목</h1>
        <input
          className="inpot"
          type="text"
          required
          title="제목을 10글자이상입력하세요"
          pattern=".{10,1000}"
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              title: value,
            });
          }}
        />
        <h1>내용</h1>
        <textarea
          className="inpoot"
          cols="250"
          rows="10"
          type="text"
          required
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              body: value,
            });
          }}
        />
        <div>
          <button onClick={goToHomepage} className="buttons">
            이전으로
          </button>
          <button
            disabled={todo?.body === "" ? true : false}
            className="buttons"
          >
            추가하기
          </button>
        </div>
      </form>
    </Stlayout>
  );
};

export default Formepage;

const Stlayout = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-width: 800px;
`;
