import styled from 'styled-components'

export const Content = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5 , 1fr);
min-height: 700px;
gap: 10px;
`
export const Title = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr;
color: var(--text);  
height: 50px;
text-align: center;
font-size:1.2rem;
`

export  const Perfil = styled.div`
display: grid;
height:200px;
grid-template-columns: 200px 1fr;
grid-template-rows: 1fr;


div img{
    display:grid;
    height: 150px;
    width: 150px;
    border-bottom-left-radius:  50%;
    border-top-left-radius:     50%;
    border-top-right-radius:    50%;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
    margin: auto;
    border: 5px solid var(--default-color); 
}

div p{
    display:grid;
    margin: 30px;
    color: var(--text);
    font-size: 1.1rem;
}

@media only screen and (max-width: 600px){
    display: grid;
    height:350px;
    gap: 20px;  
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    div img{
        display:grid;
        justify-content: center;
        margin: 10px auto 10px auto;
        align-items: center; 
    }
}
`
export const Contact = styled.div`
display: grid;
min-width: 400px;
margin: auto;
grid-template-columns: repeat(4, 1fr);
grid-template-rows:1fr;
color:var(--text);
justify-content: space-around;
align-items: center;

a i{
    text-decoration: none;
    color: var(--text);
    width: 2rem;
    height: 2rem;
    font-size: 2.5rem;
    transition: color 0.2s;
    cursor: pointer;
}

a i:hover{
    color: var(--default-color)
}

@media only screen and (max-width: 600px){
    min-width: 350px;
    margin: 100px auto 20px auto;
}
`


export const Skills = styled.div`
height: 400px;
margin-top: 50px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
gap: 10px;

@media only screen and (max-width: 600px){
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr;
}

.Skills{
    background: transparent;
    display: grid;
    height: 400px;
    align-items: space-around;
    padding:0;
    margin: 5px;
    gap:0px;

    .description{
        margin: 1rem;
        h3{
            color: var(--text);
        }
        p{
            color: var(--text);
        }
    }
    
    div{
        display: block;
        background: transparent;
        height: 50px;

        h3{
            color: var(--text);
            font-size: 15px;
            height: 10px;
        }
 
        span{
            position: relative;
            color: var(--text);
            font-size: 12px;
            height: 20px;
        }

        div{
            border-radius:0;
            padding:0;
            background: #fff;
            box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            height: 10px;

            div{
                background: var(--default-color);
                border-radius: 5px;
                margin: -1px;
            }
        }
    }
}
div {
    display: grid;
    background-color: var(--default-color);
    border-radius: 1rem;
    color:   rgba(255, 255, 255, 0.8);
    padding: 20px;

    h3{
        color: var(--text);
        font-weight: 600;
        font-size: 20px;

        
        p{
            font-weight: 400;
            font-size: 18px;
            color: rgba(255, 255, 255, 0.8);
        }
    }

    span{
        color: var(--text);
        font-weight: 600;
        font-size: 18px;
        margin-top: 0.7rem;

        p{
            font-weight: 400;
            font-size: 18px;
            color: rgba(255, 255, 255, 0.8);
        }
    }
}
`