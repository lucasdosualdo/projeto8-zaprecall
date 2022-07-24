import Header from "./Header";
import Footer from "./Footer";
import turn from '../assets/images/setinha.png';
import React from 'react';

export default function Questions() {
    

    return (
        <>
        <Header/>


        < Deck /> 

        
        <Footer />
        </>    
    )
}

function Deck () {
    const [clikedPlay, setClikedPlay] = React.useState(false);

    const deck = [
        "Pergunta 1",
        "Pergunta 2",
        "Pergunta 3",
        "Pergunta 4"
    ]

    const questions = [
        {
            question: 'O que é JSX?',
            answer: 'Uma extensão de linguagem do JavaScript'
        },
        {
            question: 'O React é __',
            answer: 'uma biblioteca JavaScript para construção de interfaces'
        },
        {
            question: 'Componentes devem iniciar com __',
            answer: 'letra maiúscula'
        },
        {
            question: 'Podemos colocar __ dentro do JSX',
            answer: 'expressões'
        },
        {
            question: 'O ReactDOM nos ajuda __',
            answer: 'interagindo com a DOM para colocar componentes React na mesma'
        },
        {
            question: 'Usamos o npm para __',
            answer: 'gerenciar os pacotes necessários e suas dependências'
        },
        {
            question: 'Usamos props para __',
            answer: 'passar diferentes informações para componentes'
        },
        {
            question: 'Usamos estado (state) para __',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        },      
    ]

   const spread = [...questions];
   const sort = spread.sort(()=>Math.random() - 0.5);

   const questionDeck = [];
   for (let i = 0; i < 4 ; i++) {
    questionDeck.push(sort[i]);
   }

   console.log(questionDeck);

   function CardClosed () {
    return (
        <>
        {deck.map((flashcard) =>(
            <div className = 'flashcard-closed' >
                <h4>{flashcard}</h4>
                <ion-icon onClick = {()=>setClikedPlay(true)} name="play-outline" ></ion-icon>
            </div>
        ))}
        </>     
    )
   }

   function OpenCard () {
    return (
        <div className = 'flashcard-open'>
            {questionDeck.map((value) => (
                <h3>{value.question}</h3>
            ))}
            <img src = {turn} />
        </div>
    )
    }

    return (
        <>
        {(clikedPlay===false) ?
        <CardClosed /> :
        <OpenCard />
        }
        </>
        
    )
}



