import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
const Detailpage = () => {
  const [comment, setcomment] = useState({
    title: "",
  });

  const onSubmitHandler = (todo) => {
    axios.post("http://localhost:3001/comment", todo);
  };
  //env처리해서 안보여주게하기

  return (
    <Stlayout>
      <form
        className="FORM-GROUP"
        onSubmit={(e) => {
          // 👇 submit했을 때 브라우저의 새로고침을 방지합니다. //포스트구문 전부

          onSubmitHandler(comment);
        }}
      >
        <h1>댓글</h1>
        <input
          className="inpot"
          type="text"
          required
          onChange={(ev) => {
            const { value } = ev.target;
            setcomment({
              ...comment,
              title: value,
            });
          }}
        />
        <div>
          <button
            disabled={comment.title === "" ? true : false}
            className="buttons"
          >
            추가하기
          </button>
        </div>
      </form>
    </Stlayout>
  );
};

export default Detailpage;

const Stlayout = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-width: 800px;
`;
