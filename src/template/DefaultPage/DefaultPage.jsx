import PropTypes from "prop-types";
import { StyledContainer } from "./DefaultPage.styles";
import { NavBar } from "../../components/NavBar";

export const DefaultPage = ({ children }) => {
  return (
    <>
      <NavBar />
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

DefaultPage.propTypes = {
  children: PropTypes.node.isRequired,
};