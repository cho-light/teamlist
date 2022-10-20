import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CommentList = () => {
  //
  const [comment, setComment] = useState(null); ///              GET구문
  // axios를 통해서 get 요청을 하는 함수를 생성합니다.                     //Get 구문
  // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.

  const fetchTodos = async () => {
    const { data } = await axios.get(`http://localhost:3001/comment/`); //env처리 git에 안올라감
    setComment(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };
  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchTodos();
  }, []);

  return (
    <div>
      <div>
        {comment?.map((comment) => (
          <div key={comment.id} className="LIST-BOX">
            <h1>댓글: {comment.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
