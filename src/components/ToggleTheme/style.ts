import styled  from "styled-components";

export const Container = styled.div`

label{
    background: var(--default-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    position: relative;
    padding: 0.3rem;
    height: 2rem;
    width:4rem; 
}

.ToggleTheme{
    opacity:0;
    position: absolute; 
}
.ToggleTheme:checked + .label .ball{
    transform: translateX(2rem)
}

.ball{
    background-color: #fff;
    width:  1.5rem;
    height:  1.5rem;
    border-radius: 50%;
    position: absolute;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s linear;
}

.fa-moon{
    color: #f1c42f;
    text-shadow: 1px 1px 2px #000;
}

.fa-sun{
    color: #f39c12;
    text-shadow: 1px 1px 2px #000;
}
`