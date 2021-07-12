import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Buttonebook = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#7c96b8' : '#808080')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '10px 20px' : '10px 20px')};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '15px' : '12px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all .2s ease-in-out;
        background: ${({primary}) => (primary ? '#808080' : 'blue')};
    }
`




