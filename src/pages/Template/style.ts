import styled from 'styled-components'

export const  TemplateContainer = styled.section`
    display: grid;
    height: 97vh;
    grid-template-columns: var(--widthSidebar) 1fr;
    grid-template-rows: 1fr;

    @media only screen and (max-width: 600px){
        display: grid;
        grid-template-columns: 10px 1fr;
        grid-template-rows: 1fr;
    }

`

export const Main = styled.div`
    display: grid;
    grid-template-columns:  1fr;
    grid-template-rows: 85px 1fr;

`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
    justify-content: left;
    gap:1rem;
`

export const Container = styled.div`
display: grid;
height: 520px;
grid-template-columns: 1fr;
overflow:auto;
grid-template-rows: 1fr;
border-radius: 0.2rem;
padding: 5px;

@media only screen and (max-width: 600px){
    height: 90vh;
}
`