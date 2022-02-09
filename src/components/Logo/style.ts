import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    background: var(--default-color);
    height: 70px;
    width: 90px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 2px solid rgba(255, 255, 255, 0.9);

    button {
        height: 60px;
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.9);
        font-weight:600;
        font-size: 1.3rem;
    }

    @media only screen and (max-width: 600px){
        background: transparent !important;
        border: none;
        cursor: default;
        button{
            display:none;
        }
    }
`