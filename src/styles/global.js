import {
    createGlobalStyle
} from 'styled-components';

import background from '../assets/images/background.svg';

export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }

    *:focus{
        outline:0;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        -webkit-font-smoothing:antiliased;
        background:#191920 url(${background}) no-repeat center top;
    }

    body, input, button{
        font:14px 'Roboto', sans-serif;
    }

    a {
        text-decoration:none;
    }

    ul{
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }
`;
