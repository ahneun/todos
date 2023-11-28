import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    font-size: 10px;
    background-color: #0065d8;
`

function Input() {
    const handleSubmit = (event)=>{
        event.preventDefault()
        alert("list가 추가됐습니다")
    }
  return (
    <InputStyled>
        <form onSubmit={handleSubmit}> 
            <input type='text'/>
            <input type='text'/>
            <button type='submit'>버튼</button>
        </form>
    </InputStyled>
  )
}

export default Input