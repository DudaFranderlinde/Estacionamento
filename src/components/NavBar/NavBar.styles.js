import styled from "styled-components";

export const NavBar = styled.nav`
    background-color: #f9fafb;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    height: 100%;

    h1 {
      color: darkgreen;
      font-weight: 400;
      margin-left: 10px;
    }

    a {
      font-weight: 300;
      text-decoration: none;
      color: #2d2d34;
    }

    a.active {
      color: green;
      font-weight: 500;
    }
`

export const UlLink = styled.ul`
    display: flex;
    margin:  12px 0px;

    li {
        padding: 8px 24px;
        list-style-type: none;
    }
`

