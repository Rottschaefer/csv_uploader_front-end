import { StyledCard, StyledLocation, StyledPin, StyledText, StyledTextLocation } from "./StyledCard"
import basketball from "../../Assets/basketball.jpeg"
import soccer from "../../Assets/soccer.jpeg"
import tennis from "../../Assets/tennis.jpg"
import swimming from "../../Assets/swimming.jpg"
import running from "../../Assets/running.jpg"
import volley from "../../Assets/volley.jpg"

export const Card = ({ person }) => {

    let image

    switch (person.favorite_sport) {
        case 'Basketball':
            image = basketball;
            break;
        case 'Football':
            image = soccer;
            break;
        case 'Tennis':
            image = tennis;
            break;
        case 'Swimming':
            image = swimming;
            break;
        case 'Running':
            image = running;
            break;
        case 'Volleyball':
            image = volley;
            break;
        default:
            image = 'https://example.com/images/default.jpg';
    }


    return (
        <StyledCard image={image}>
            <StyledText>{person.name}</StyledText>
            <StyledLocation>
            <StyledPin/>
            <StyledTextLocation>{`${person.city}, ${person.country}`}</StyledTextLocation>
            </StyledLocation>
            <StyledText>{person.favorite_sport}</StyledText>

        </StyledCard>
    )
} 