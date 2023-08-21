import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from './Countries'
import { styled } from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  padding: 0px 5%;
`
const FlagContainer = styled.div`
  width: 100%;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const Information = styled.p`
  font-size: 18px;
  text-transform: uppercase;
  margin: 4px 0px;
`
export const CountryDetails = () => {
    const {name} = useParams()
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        const loadingData = async () =>{
          const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
          const data = await res.json()
          await setData(data)
          setLoading(false)
        }
        loadingData()
    },[])

   if(isLoading){
    return <Loading><Information>Loading.....</Information></Loading>
   }
  return (
    <>
    <Container>
      <FlagContainer className="flag">
        <Image src={data[0]?.flags?.png} alt={data[0]?.flags?.alt} />
      </FlagContainer>
      <div className="name"><h1>{name}</h1>
      <InformationContainer className="country-information">
        <div className="left-side">
          <Information>native name: {data[0]?.name?.nativeName?.eng?.common}</Information>
          <Information>population: {data[0]?.population}</Information>
          <Information>region: {data[0]?.region}</Information>
          <Information>sub region: {data[0]?.subregion}</Information>
          <Information>capital</Information>
        </div>
        <div className="right-side">
          <Information>top level domain</Information>
          <Information>currencies</Information>
          <Information>language</Information>
        </div>
      </InformationContainer>
      <div className="footer">

      </div>
      </div>
    </Container>
    </>
  )
}
