import React from "react";
import styled from "styled-components";
import { useDispatch} from "react-redux";
import { __deleteTodoThunk } from "../redux/modules/todosSlice";
import { useNavigate } from "react-router-dom";
import {TiDeleteOutline} from "react-icons/ti"

const Card = ({todo}) =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDeleteHandler = () => {
        dispatch(__deleteTodoThunk(todo.id));
    };
    return(
        <div>
        <StCards 
        onClick={() =>{
            navigate(`/todo/${todo.id}`);
        }}
        >
            <StCardtop>
                <StCardtitle>π {todo.title}</StCardtitle>
                <TiDeleteOutline
                size="30"
                color="red"
                onClick={(e)=> {
                    e.stopPropagation();
                    const result = window.confirm("μ­μ νμκ² μ΅λκΉ?")
                    if(result) {
                        return onDeleteHandler();
                    }else{
                        return;
                    }
                }}
                >
                    μ­μ 
                </TiDeleteOutline>
            </StCardtop>

                <StCardbottom>μμ±μ: {todo.user}</StCardbottom>    
        </StCards>

        </div>
    );
};

export default Card;

const StCards = styled.div`
    box-sizing: border-box;
    padding: 12px;
    height: 90px;
    border: 1px solid #ddd;
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    width: 100%;
    margin: 12px auto 12px auto;
    cursor: pointer;
`

const StCardtop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StCardtitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const StCardbottom = styled.div`
  margin: 20px 0px;
  font-size: 12px;
`;
