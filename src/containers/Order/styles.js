import styled from 'styled-components'

export const Container = styled.div `

    background-color: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    height: 100%;
    min-height: 100vh;

`

export const Image = styled.img `
    margin-top: 11px;
`

export const ContainerItem = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
    
`

export const H1 = styled.h1 `
    font-size: 28px;
    line-height: 33px;

    text-align: center;

    color: #FFFFFF;
    margin-bottom: 50px;
`

export const Button = styled.button `
    display: flex;

    width: 342px;
    height: 68px;
    background: rgba(255, 255, 255, 0.14);
    border: none;
    outline: none;
    cursor: pointer;

    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    color: #FFFFFF;

    margin-top: 85px;
    margin-bottom: 50px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    
`

export const Order = styled.li `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 18px 0px;

    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;

    color: #fff;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    img {
        cursor: pointer;
    }

`

export const Div = styled.div `
    width: 188px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
`

export const P = styled.p `
    font-style: normal;
    font-weight: bold;
    
    margin-top: 8px;
        
`