import styled from 'styled-components'

export const Container = styled.div`

    .navigation{
        position: fixed;
        top: 10px;
        left: 20px;
        bottom: 20px;
        width: 70px;
        box-sizing: initial;
        background: var(--default-color);
        border-left: 5px solid var(--default-color);
        border-radius: 10px;
        transition: width 0.1s;
        overflow-x: hidden;
        z-index: 100;
    }
    .navigation.active{
        width: 270px;
    }

    .navigation ul{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-left:  5px;
        padding-top: 80px;
    }

    .navigation ul li{
        position: relative;
        list-style: none;
        width: 100%;
        border-top-left-radius: 20px ;
        border-bottom-left-radius: 20px ;
    }


    .navigation ul li b:nth-child(1){
        position: absolute;
        top: -20px;
        height: 20px;
        width: 100%;
        background-color: var(--background);
        display:none;
    }

    .navigation ul li b:nth-child(1)::before{
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--default-color);
        border-bottom-right-radius: 20px;
    }

    .navigation ul li b:nth-child(2){
        position: absolute;
        bottom:-20px;
        height: 20px;
        width: 100%;
        background-color: var(--background);
        display:none;
    }
.navigation ul li b:nth-child(2)::before{
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--default-color);
    border-top-right-radius: 20px;
}

.navigation ul li.active b:nth-child(1),
.navigation ul li.active b:nth-child(2){
    display: block;
}
.navigation ul li.active{ 
    background-color: var(--background)
}

.navigation ul li a{
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: var(--text)
}

    .navigation ul li .active a {
        color: var(--color);
    }

    .navigation ul li  a .fas{
        position: relative;
        display: block;
        min-width: 60px;
        height: 55px;
        line-height: 60px;
        text-align: center;
    }

    .navigation ul li a .fas{
        font-size: 1.2rem;
    }

    .navigation ul li a .title{
    position: relative;
    display: block;
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    white-space: nowrap;

}


.toggle{
    position: fixed;
    top: 15px;
    left: 30px;
    width: 50px;
    height: 50px;
    border: 0;
    border-radius: 10px;
    background-color: var(--default-color);
    cursor: pointer;
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 110;
}

.toggle i{
    position: absolute;
    color: rgba(255, 255, 255, 0.7);
    font-size: 24px;
}

.toggle.active{
    background: var(--warningColor);
}

@media only screen and (max-width: 600px){
    .navigation{
      display:none;
    }
    .navigation.active{
        top: 0;
        left: 0;
        bottom: 0;
        height: 100vh;
        overflow: hidden;
        width: 100vw;
        border-radius: 0;
        display: block;
    }


}

`