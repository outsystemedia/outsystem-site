import styled, { createGlobalStyle, css } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #000;
        height: 100%;
        margin: 0;
        color: #555;
    }
`;

export const SharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
`;

export const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`;

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${SharedStyles}
`;

export const StyledTextArea = styled.textarea`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    ${SharedStyles}
`;

export const StyledButton = styled.button`
    display: block;
    background-color: #f7797d;
    color: #fff;
    font-size: large.9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 80px;
    cursor: pointer;
    box-sizing: border-box;
`;

export const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 40px 0;
`