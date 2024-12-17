import { SearchOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const SeacrhBarContainer = styled.div`
  max-width: 550px;
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.text_secondary + 90};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  gap: 6px;
  align-items:center
`;

const SeacrhBar = () => {
  return (
    <SeacrhBarContainer>
        <SearchOutlined />
        <input 
        placeholder='Search with prompt or name . . .'
        style={{
            border: "none",
            outline: "none",
            width: "100%",
            color: "inherit",
            fontSize: "16px",
            background: "transparent",
        }}/>
    </SeacrhBarContainer>
  )
}

export default SeacrhBar