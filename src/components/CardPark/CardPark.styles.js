import styled from 'styled-components'

export const DivCard = styled.div`
    background-color: white;
    border-radius: 10px;
    border: 1px solid grey;
    box-shadow: 15px 15px 75px -45px rgba(147, 149, 163, 0.5);
    margin: 20px;
    width: 100%;
`
export const DivText = styled.div`
    margin: 20px 30px;
`

export const DivContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    :last-child {
        justify-content: end;
    }

`

export const TitleBooking = styled.h2`
    margin: 20px 30px;
    color: darkgreen;
    font-weight: 500;
`

export const Text = styled.p`
    font-size: medium;
    font-weight: 500;
    color: darkslategrey;
`

export const ButtonDelete = styled.button`
    width: 50px;
    margin-right: 20px;
    background-color: white;
    border: none;
    outline: 0;

`

export const ImgDelete = styled.img`
    width: 100%;
`