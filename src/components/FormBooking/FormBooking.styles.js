import styled from 'styled-components'

export const FormBooking = styled.form`
    height: 100%;
    width: 800px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 15px 15px 75px -45px rgba(188,182,182,0.75);
    display: flex;
    flex-direction: column;
    justify-content: center; 
`

export const DivTitle = styled.div`
    height: 50px;
    text-align: center;
    color: green;

`

export const DivInputs = styled.div`
    margin-bottom: 10px;
    margin-left: 40px;
    margin-right: 40px;
`

export const DivSpare = styled.div`
    height: 60px;
    margin-top: 15px;
`
export const LabelTitleInput = styled.label`
    margin: 0px;
    font-size: x-small;
    font-weight: 400;
`

export const Input = styled.input`
    width: 99%;
    height: 25px;
    border: 1px solid rgb(119, 0, 0);
    border-radius: 2.5px;
    outline: 0; 
    margin-bottom: 0px;
`

export const ButtonSubimit = styled.button`
    margin-top: 20px;
    width: 100%;
    height: 30px;
    background-color: darkgreen;
    border-radius: 0px 0px 2.5px 2.5px;
    color: white;
    font-weight: bolder;
    border: none;
`

export const Alert = styled.span`
    color: red;
    font-size: 10px;
`