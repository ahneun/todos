import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    font-size: 35px;
    background-color: #b3a38f;
    color: #f5f4f3;
`

export default function Header() {
  return (
    <HeaderStyled>
       <p>덕덕쓰</p>
       <p>TO DO LIST</p>
    </HeaderStyled>
  )
}
