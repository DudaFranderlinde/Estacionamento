import { NavLink } from 'react-router-dom'
import * as S from './NavBar.styles'

export function NavBar() {
    return (
        <S.NavBar>
            <h1>PARKING CAR</h1>
            <S.UlLink>
                <li>
                    <NavLink to={`/`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={`/booking`}>Reservar</NavLink>
                </li>
            </S.UlLink>
        </S.NavBar>
    )
}