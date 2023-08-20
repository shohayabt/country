import React from 'react'
import { Card, CardInformation, Image, ImageSection, Information, Name } from './Styled/Component.styled'
import { Navigate, useNavigate } from 'react-router-dom'



export const Country = (props) => {
    const navigate = useNavigate()
    const navigateToDetailsPage = name => {
        navigate(`/country/${name}`)
        
    }
    return (
        <>
            <Card className="card" onClick={() => navigateToDetailsPage(props.country.name.common)}>
                <ImageSection className="image-section">
                    <Image src={props.country.flags.png} alt="flags.png" />
                </ImageSection>
                <CardInformation className="card-information">
                    <Name className="name">{props.country.name.common}</Name>
                    <Information className="population">POPULATION: {props.country.population}</Information>
                    <Information className="region">REGION: {props.country.population}</Information>
                    <Information className="capital">CAPITAL: {props.country.population}</Information>
                </CardInformation>
            </Card>
        </>
    )
};
