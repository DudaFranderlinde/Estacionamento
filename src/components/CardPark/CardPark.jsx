import * as S from "./CardPark.styles";
import { Flip, ToastContainer, toast } from 'react-toastify';
import PropTypes from "prop-types";
import { deleteBooking } from "../../service/deleteBooking";

// eslint-disable-next-line react/prop-types
export function CardPark ({parkNumber, plate, model, color, status, ownerName, numberApart, blockApart, button}) {
    const click = () => {
        deleteBooking(button)
        toast.warning('Deletando!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
            });
    }
    return (
        <S.DivCard>
            <S.DivContent>
                <S.TitleBooking> Vaga {parkNumber}</S.TitleBooking>
                <S.ButtonDelete onClick={click}>
                    <S.ImgDelete src="./src/assets/delete.png"/>
                </S.ButtonDelete>
            </S.DivContent>
            <S.DivContent>
                <S.DivText>
                    <S.Text>Placa do Veículo: {plate? plate: "N/A"}</S.Text>
                    <S.Text>Tipo de Veículo: {model? model: "N/A"} </S.Text>
                    <S.Text>Cor do Veículo: {color? color: "N/A"}</S.Text>
                    <S.Text>Status: {status}</S.Text>
                </S.DivText>
                <S.DivText>
                    <S.Text>Nome do proprietário: {ownerName? ownerName: "N/A"} </S.Text>
                    <S.Text>Número do Apartamento: {numberApart? numberApart: "N/A"}</S.Text>
                    <S.Text>Bloco do Apartamento: {blockApart? blockApart: "N/A"}</S.Text>
                </S.DivText>
            </S.DivContent>
            <ToastContainer/>
        </S.DivCard>
    )
}

CardPark.propType = {
    parkNumber: PropTypes.number.isRequired, 
    plate: PropTypes.string, 
    model: PropTypes.string, 
    color: PropTypes.string, 
    status: PropTypes.string.isRequired, 
    ownerName: PropTypes.string, 
    numberApart: PropTypes.number, 
    blockApart: PropTypes.number,
    button: PropTypes.func,
}