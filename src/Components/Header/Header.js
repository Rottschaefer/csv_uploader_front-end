import { StyledHeader, StyledLogo } from "./StyledHeader"
import logo from "../../Assets/logo.jpg"

export const Header = () => {
    return(
        <StyledHeader>
        <StyledLogo src={logo}/>
        </StyledHeader>
    )
}