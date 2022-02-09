import styled from 'styled-components'

export const Content = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 80px  70px 1fr;
justify-content: center;
align-items: center;
margin: 10px;
gap: 50px;


h1{
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
    color: var(--text)
}
`
export const Header = styled.header`
display:grid;
grid-template-columns: 120px 1fr;
grid-template-rows: 1fr;
gap:10px;

div{
    display: grid;
    align-items: center;
    justify-content: center;

    img{
        height: 80px;
    }
}
h1{
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
    color: var(--text)
}
`

export const Main =  styled.main`
display: grid;
grid-template-columns: repeat(3, 1fr);
justify-content: center;
align-items: center;
gap: 50px;



@media only screen and (max-width: 600px){
    display: grid;
    grid-template-columns: 1fr;
}

div{
    display: grid;
    background: var(--default-color);
    height: 400px;
    border-radius: 0.5rem;
}


`

export const Pagination = styled.footer`
display: grid;
grid-template-columns: 50px 1fr 50px 50px;
grid-template-rows: 50px;
justify-content: center;
align-items: center;
background:var(--default-color);
border-radius: 0.5rem;
padding: 0.5rem;
gap: 10px;

div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    

    button{
        height: 2.5rem;
        width: 2.5rem
    }
}
button{
    display: grid;
    width: 2.5rem;
    height: 2.5rem;
    padding:5px;
    border-radius: 50%;
    border: 2px solid var(--text);
    color: var(--text);
    background: transparent;    
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    cursor: pointer;
}

button:hover {
    filter: brightness(0.9);
}

button.active{
    background:#000;
    color: #fff;
    border-color: #fff;
}
`