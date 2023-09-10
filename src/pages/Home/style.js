import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

export const Layout = styled.main`
    
    width: 90%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 15px;
    height: 70%;
    width: 35%;
    
    
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
    background: #dedede;
    
    
    & .send{
        width: 75px;
        height: 30px;
        border: 1px #bfbdbd solid;
        transition: 1.5s ease-out;
        background-color: #dedede;
        cursor: pointer;
    }
    & .send:hover{
        background-color: #65008a;
        color: white;
    }

    & .password{
        border: 1px #bfbdbd solid;
        outline: 0;

        
    }
    
    & .range{
    margin-left: 15px;
    display: flex;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 200px;
}

    & .range::-webkit-slider-runnable-track {
    background-color: #b5b5b5;
    border-radius: 0.5rem;
    height: 0.5rem;
    }
    & .range::-webkit-slider-thumb {
    -webkit-appearance: none; 
    appearance: none;
    margin-top: -4px; 
    background-color: #65008a;
    border-radius: 0.5rem;
    height: 1rem;
    width: 1rem;


}
`
export const RangeBox = styled.div`
    display: flex;
    gap: 5px;
`
 export const NumberBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 5px;
`

 export const SymbolBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 5px;
`

 export const LowerBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 5px;
`

 export const UpperBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 5px;
`



export const CheckBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    flex-direction: column;
`


