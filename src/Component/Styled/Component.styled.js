import styled from "styled-components"

export const Card = styled.div`
    box-shadow: 0px 2px 6px -1px rgba(143,143,143,1);
    cursor: pointer;

`;
export const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`;
export const CardInformation = styled.div`
    padding:5px 10px;
    padding-bottom:30px;
`;
export const Name = styled.h1`
    font-size: 18px;
    line-height: 2rem;
    text-transform:uppercase;
`;
export const ImageSection = styled.div`
    height: 200px;
    overflow: hidden;
    border-bottom:1px solid black;
`;
export const Information = styled.p`
    font-size: 14px;
    margin: 4px 0px;
`