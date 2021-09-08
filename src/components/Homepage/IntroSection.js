import { Constants } from "../../data/constants.js"
import styled from "styled-components"
import homepageSplash from "../../images/Homepage/homepage-splash.png";
import Button from "../Template/Button.js";

const IntroSection = () => {

    return (
        <SectionContainer>
            <TextContainer>
                <StyledHeaderText>SOME CATCHY TEXT</StyledHeaderText>
                <StyledSubText>Some convincing text should go here</StyledSubText>
            </TextContainer>
            <ButtonContainer>
                <StyledButtonOne>BTN</StyledButtonOne>
                <StyledButtonTwo>BTN2</StyledButtonTwo>
            </ButtonContainer>
            <StyledImage src={homepageSplash} />
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: 775px;
    background-color: ${Constants.GREEN};
    position: relative;
    display: flex;
`
const StyledImage = styled.img`
    position: absolute;
    right: 0;
    height: 100%;
    width: 60%;
    max-width: 600px;
`

const StyledHeaderText = styled.h1`
    color: white;
    font-weight: 700;
    font-size: 73px;
    line-height: 86px;
`

const StyledSubText = styled.h3`
    color: ${Constants.LIGHT_GREEN};
    font-weight: 300;
    font-size: 37px;
    line-height: 43px;
`

const TextContainer = styled.div`
    margin-left: 10%;
    margin-top: 8%;
    display: flex;
    flex-flow: column wrap;
    max-width: 35%;
`

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 5%;
    margin-left: 10%;
`

const StyledButtonOne = styled(Button)`
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    width: 200px;
    height: 60px;
`

const StyledButtonTwo = styled(Button)`
    background-color: ${Constants.DARK_GREEN};
    margin-left: 19px;
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    width: 200px;
    height: 60px;
`

export default IntroSection;