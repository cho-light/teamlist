import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getCommnetsByTodoId } from "../redux/modules/commentsSlice";
const Comments = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.comments.commentsByTodoId);

  useEffect(() => {
    dispatch(__getCommnetsByTodoId(id));
  }, [dispatch, id]);
  console.log(data);

  return (
    <div>
      <div className="comment">
        {data?.map((comment) => (
          <div key={comment.id}>
            <div>
              {comment.content}
              {comment.username}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
