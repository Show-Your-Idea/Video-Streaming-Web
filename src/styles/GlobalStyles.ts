import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.color.black}
    }
    
    button{
        background: inherit;
        border:none;
        box-shadow:none;
        border-radius:0;
        padding:0;
        overflow:visible;
        cursor:pointer;
    }

    input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    }
`;

export default GlobalStyle;
