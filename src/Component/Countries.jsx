import React, { useEffect, useState } from 'react'
import { Country } from './Country'
import { styled } from 'styled-components'

const CardContainer = styled.section`
    padding: 0px 5%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
`;
export const Loading = styled.small`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
`

export const Countries = () => {
    const [data, setData]= useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
      const loadData = async () => {
        await fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(async (data) => {
          await setData(data)
          setLoading(false)
        });
      }
      loadData()
      }, []);
      if(isLoading){
        return <Loading><p>Loading...</p></Loading>
      }
  return (
    <CardContainer>
    {data.map(c => <Country country={c}/>)}
    </CardContainer>
  )
}


