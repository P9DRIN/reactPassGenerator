
import { useState } from 'react'
import { Container, Layout, InputBox, CheckBox, RangeBox, NumberBox, SymbolBox, LowerBox, UpperBox } from './style.js'

export default function Home(){

    const [data, setData] = useState(8)
    const [realPassword, setRealPassword] = useState('')

    const [number, setNumber] = useState(false);
    const [symb, setSymb] = useState(false);
    const [lowCase, setLowCase] = useState(false);
    const [upCase, setUpCase] = useState(false);

    let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let num = [0,1,2,3,4,5,6,7,8,9]
    let symbol = ["!", "@" , "#", "$", "&", "%" ]

    const generatePassword =
        (
            hasNum,
            hasSymbol,
            hasLowercase,
            hasUppercase,
            length = data,
        ) => {
            const newArray = [
                ...(hasNum ? num : []),
                ...(hasSymbol ? symbol : []),
                ...(hasLowercase ? lower : []),
                ...(hasUppercase ? upper : []),
            ]
            
            if(newArray.length === 0) return;

            let tempPass = "";

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * newArray.length);

                tempPass += newArray[randomIndex];

            }
           setRealPassword(tempPass)
        }
     
        function createPassword(){
            generatePassword(
            number,
            symb,
            lowCase,
            upCase,
            data,
            )
            
        }
        

        return(
        <>
            <Container>
                <Layout>
                    <InputBox>
                        

                    <input type='text' defaultValue='' value={realPassword} className='password'></input>

                    <RangeBox>

                    <input type='range' min="8" max="16" step="1" value={data} onChange={(e) => setData(e.target.value)} className='range'/>
                    <span>{data}</span>
                    </RangeBox>
                       
                    
                    <CheckBox> 
                    
                    <NumberBox>

                    <span>Number</span>
                    <input type='checkbox' className='checkBox' 
                    onClick={(e) => setNumber(!number)} 
                    name="checkedA"></input>
                    </NumberBox>

                    <SymbolBox>

                    <span>Symbols</span>
                    <input type='checkbox' className='checkBox'
                    onClick={(e) => setSymb(!symb)} 
                    name="checkedB"></input>
                    </SymbolBox>

                    <LowerBox>

                    <span>Lower Case Sensitive</span>
                    <input type='checkbox' className='checkBox' 
                    onClick={(e) => setLowCase(!lowCase)} 
                    name="checkedC"></input> 
                    </LowerBox>

                    <UpperBox>

                    <span>Upper Case Sensitive</span>
                    <input type='checkbox' className='checkBox' 
                    onClick={(e) => setUpCase(!upCase)} 
                    name="checkedD"></input> 
                    </UpperBox>

                    

                    </CheckBox>

                    <button onClick={createPassword} className='send'>Generate</button>

                    </InputBox>
                </Layout>
            </Container>
        </>
    )
}