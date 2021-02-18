import styled from 'styled-components'

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:10;
    backdrop-filter: blur(5px);
`;

export const ModalWrapper = styled.div`
    position: relative;
    max-width: 80%;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width:767px){
        max-width: 90%;
    }
    @media only screen and (max-width:1024px){
    }
`;

export const ModalImageWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 80%;
    height: 80vh;

    @media only screen and (max-width:767px){
        height: 60vh;
    }
    @media only screen and (max-width:1024px){
    }
`;


export const ModalImage = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt,
    }))`
    
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const ExtraInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;   
    padding: 1em;

    @media only screen and (max-width:767px){
        
    }
`;

export const ModalActions = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;

    @media only screen and (max-width:767px){
        
`;