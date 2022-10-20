import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getCommnetsByTodoId } from "../redux/modules/commentsSlice";
import { __deleteComment } from "../redux/modules/commentsSlice";

const Comments = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.comments.commentsByTodoId);


  const onDeleteButtonHandler = () => {
    const result = window.confirm("삭제할꺼야?");
    if(result) {
      dispatch(__deleteComment(comment.id));
    } else {
      return;
    }
  }


  useEffect(() => {
    dispatch(__getCommnetsByTodoId(id));
  }, [dispatch, id]);
  console.log(data);

  return (
    <div>
      <div className="comment">
        {data?.map((comment) => (
          <div key={comment.id}>

            <h4> 작성자:{comment.username}</h4>
            <h4>내용:{comment.content}</h4>
            <button>수정</button>
            <button
            onClick={onDeleteButtonHandler}
            >삭제
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
