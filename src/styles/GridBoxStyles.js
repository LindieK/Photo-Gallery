import styled from 'styled-components'

export const GridBox = styled.div`
    position: relative;
    top: 14em;
    width:75vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
    padding: 1em;
    margin: 0 auto;

    @media only screen and (max-width:767px){
        grid-template-columns: 1fr;
        top: 10em;
        width: 90vw;
    }
    @media only screen and (min-width:768px) and (max-width: 992px){
        grid-template-columns: 1fr 1fr;
        top: 12em;
    }
`;