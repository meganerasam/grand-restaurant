import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    InfoColumnTwoThird,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './Info2Elements';
import Img1 from '../../images/info-1.jpg';
import Img2 from '../../images/info-2.jpg';

const Info2 = ({
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) => {
    return (
        <>
            <InfoSec lightBg={true}>
                <Container>
                    <InfoRow imgStart={false}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={true}>Discover</TopLine>
                                <Heading lightText={true}>Our story</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap
                                    into electronic typesetting, remaining essentially unchanged. It was popularised
                                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </Subtitle>
                                <p></p>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumnTwoThird>
                            <ImgWrapper start={true}>
                                <Img src={Img1} alt={alt} />
                                <Img src={Img2} alt={alt} />
                            </ImgWrapper>
                        </InfoColumnTwoThird>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default Info2;
