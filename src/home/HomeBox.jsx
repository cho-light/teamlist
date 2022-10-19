import React from "react";
import styled from "styled-components"

import {BsArrowRightCircle} from "react-icons/bs"

const HomeBox = ({title,onClick}) => {


    return (
        <St_HomeBox onClick={onClick}>
            <div>{title}</div>
            <BsArrowRightCircle size="32"></BsArrowRightCircle>
        </St_HomeBox>
    )
}

export default HomeBox;

const St_HomeBox = styled.div`
width: 500px;
height: 100px;
border: 1px solid #ddd;
display: flex;
justify-content: space-between;
align-items: center;
`