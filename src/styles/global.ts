import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #f8f2f5;
    --color: #fff;
    --default-color: #4d5bf9;
    --text: #333;
    --warningColor: #ff4d89;
    --widthSidebar: 120px;
}

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
} 
 

/* Estilização da scrollbars */

::-webkit-scrollbar{
  width: 5px;
  height: 6px;
}

::-webkit-scrollbar-track{
  box-shadow: inset 0 0 5px var(--background);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb{
  background: var(--default-color) ;
  border-radius: 10px;
}



html{
    @media (max-width:1080px){
        font-size: 93.75%;
    }
    @media (max-width:720px){
        font-size: 87.5%;
    }
}
body {
    background:var(--background);
    height: 100vh;
    overflow: hidden;
    color: var(--color);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family:'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor:pointer;
}

[disabled] {
    opacity:0.6;
    cursor: not-allowed;
}

img {
    filter: brightness(0.9);
}




`