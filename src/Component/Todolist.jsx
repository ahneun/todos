import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TodoStyled = styled.div`
  padding: 20px;
  background-color: #00d861;
`;

function Todolist() {
  const todos = useSelector((state) => state.todos);

  return (
    <TodoStyled>
      <h1>Working...🔥</h1>
      {todos.map((item) => {
        return (
          <>
            <h2>{item.title}</h2>
            <h2>{item.body}</h2>
          </>
        );
      })}
    </TodoStyled>
  );
}

export default Todolist;
