import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from './Countries'

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
    return <Loading><p>Loading.....</p></Loading>
   }
  return (
    <>
    {data[0]?.name?.common}
    </>
  )
}
