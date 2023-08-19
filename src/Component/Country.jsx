import React from 'react'
import data from '../assets/data/data'
import styled from "styled-components"

const Card = styled.div`
    width: 300px;
    box-shadow: 0px 2px 6px -1px rgba(143,143,143,1);

`;
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`;
const CardInformation = styled.div`
    padding:5px 10px;
    padding-bottom:30px;
`
const Name = styled.h1`
    font-size: 18px;
    line-height: 2rem;
    text-transform:uppercase;
`
const ImageSection = styled.div`
    height: 200px;
    overflow: hidden;
`
const Information = styled.p`
    font-size: 14px;
    margin: 4px 0px;
`
export const Country = (props) => {
    // console.log(props.country.population)
  return (
    <>
    <Card className="card">
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
}
