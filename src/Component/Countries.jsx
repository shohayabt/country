import React, { useEffect, useState } from 'react'
import { Country } from './Country'
import { styled } from 'styled-components'

const CardContainer = styled.section`
    padding: 0px 5%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
`


export const Countries = () => {
    const [data, setData]= useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);

  return (
    <CardContainer>
    {data.map(c => <Country country={c} key={c.name}/>)}
    </CardContainer>
  )
}


