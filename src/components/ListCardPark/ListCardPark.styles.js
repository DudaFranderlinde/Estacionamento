import styled from "styled-components";

export const DivContent = styled.div`
    margin: 0;
    display: grid;
    grid-template-columns: 1fr; 
    gap: 10px; 
`;

export const DivButtons = styled.div`
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 5px; 

`

export const ButtonFilter = styled.button`    
    outline: 0;
    height: 2.5em;
    box-shadow: 0 0 0;
    font-size: medium;
    font-weight: 500;
    color: darkgreen;
    border: 2px solid darkgreen;
    border-radius: 5px;
    background-color: white;

    &:focus{
        background-color: darkgreen;
        color: white;
    }
`