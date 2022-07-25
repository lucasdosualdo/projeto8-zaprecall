import Header from "./Header";
import Footer from "./Footer";
import React from 'react';
import Deck from "./Deck";

export default function Questions() {
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

   let sortQuestions = questions.map(value =>{
    return {
        ...value,
        tap: false
    }
   })
   
    sortQuestions = sortQuestions.sort(()=>Math.random() - 0.5);
    console.log(sortQuestions);

   let questionDeck = [];
   for (let i = 0; i < 4 ; i++) {
    questionDeck.push(sortQuestions[i]);
   }
   questionDeck = questionDeck.map((value, index)=> {
    return {
        ...value,
        index: {index},
        title: `Pergunta ${index+1}`
    }
   })

   console.log(questionDeck);
    return (
        <>
        <Header/>
        < Deck 
        questionDeck = {questionDeck}
        /> 
        <Footer />
        </>    
    )
}




