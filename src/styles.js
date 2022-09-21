import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
`


export const Content = styled.div`
    background-image: linear-gradient(180deg, #2596be, #145369);
    border-radius: 2rem;
    outline: 1px solid #041014;
    outline-offset: -1px;
    width: 300px;
    overflow:hidden;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RowExpand = styled.div`
    display: flex;
    flex-basis: 50%;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

