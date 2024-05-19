/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { parkingList } from "../../service/parkList-mock"
import { CardPark } from "../CardPark"
import * as S from "./ListCardPark.styles"
import { deleteBooking } from "../../service/deleteBooking"


export function ListCardPark () {
    const [listParkings, setListParkings] = useState([])
    const data = ()=> {
        setListParkings(parkingList)

    }


    useEffect(()=>{
            setListParkings(parkingList)
    }, [])

    const filterbyAvailable = () => {
        const filterStatusList = listParkings.filter((element)=> element.status === "Disponível")
        setListParkings(filterStatusList)
    }

    return(
        <S.DivContent>
            <S.DivButtons>
                <S.ButtonFilter onClick={data}>Todas</S.ButtonFilter>
                <S.ButtonFilter onClick={filterbyAvailable}>Disponíveis</S.ButtonFilter>
            </S.DivButtons>
            {listParkings.map((element, index)=> (
                <CardPark key={index} status={element.status} blockApart={element.block} 
                color={element.color} model={element.type} numberApart={element.apartment}
                ownerName={element.owner} parkNumber={element.number} plate={element.plate} button={index}/>
            ))}
        </S.DivContent>
    )
}