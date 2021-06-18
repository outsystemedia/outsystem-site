import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Buttonclub = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#7c96b8' : '#000')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
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
        background: ${({primary}) => (primary ? '#000' : 'crimson')};
    }
`