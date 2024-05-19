import * as S from "./CardPark.styles";
import { Flip, ToastContainer, toast } from 'react-toastify';
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export function CardPark ({parkNumber, plate, model, color, status, ownerName, numberApart, blockApart}) {
    const click = () => {
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
                    <S.Text>Placa do Veículo: {plate}</S.Text>
                    <S.Text>Modelo do Veículo: {model} </S.Text>
                    <S.Text>Cor do Veículo: {color}</S.Text>
                    <S.Text>Status: {status}</S.Text>
                </S.DivText>
                <S.DivText>
                    <S.Text>Nome do proprietário: {ownerName} </S.Text>
                    <S.Text>Número do Apartamento: {numberApart}</S.Text>
                    <S.Text>Bloco do Apartamento: {blockApart}</S.Text>
                </S.DivText>
            </S.DivContent>
            <ToastContainer/>
        </S.DivCard>
    )
}

CardPark.propType = {
    parkNumber: PropTypes.number.isRequired, 
    plate: PropTypes.string.isRequired, 
    model: PropTypes.string.isRequired, 
    color: PropTypes.string.isRequired, 
    status: PropTypes.string.isRequired, 
    ownerName: PropTypes.string.isRequired, 
    numberApart: PropTypes.number.isRequired, 
    blockApart: PropTypes.number.isRequired,
}