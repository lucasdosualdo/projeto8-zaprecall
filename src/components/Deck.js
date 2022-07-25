import React from 'react';
import FinalResult from './FinalResult';
import FlashCard from './FlashCard';
import Footer from './Footer';
import Header from "./Header";
import IconSituation from './IconSituation';

export default function Deck ({questionDeck}) {
    const [newQuestions, setNewQuestions] = React.useState(questionDeck);
    const [valueQuestions, setValueQuestions] = React.useState([]);
    const [counter, setCounter] = React.useState(0);
    function turnCard (cardIndex) {
        let turnQuestionDeck = newQuestions.map((value, index)=>{
            if (index===cardIndex) {
                return {
                    ...value,
                    tap: true
                }
            } else {
                return {
                    ...value,
                    tap: false
                }
            }
        })
        setNewQuestions([...turnQuestionDeck])
        console.log(newQuestions);
    }

    function chooseSituation (cardIndex, situation) {
        let chooseQuestionDeck = newQuestions.map((value, index)=>{
            if (index===cardIndex) {
                return {
                    ...value,
                    tap: false,
                    situation: situation
                }
            } else {
                return {
                    ...value,
                    tap: false
                }
            }
        })
        setNewQuestions([...chooseQuestionDeck])
        setValueQuestions([...valueQuestions, situation])
        setCounter(counter + 1)
        console.log(newQuestions);
        console.log(valueQuestions);
        console.log(counter);
    }

    return (
        <>
        <Header />
        {
            newQuestions.map((value, index)=> (
                <FlashCard 
                index={index}
                turnCard = {turnCard}
                chooseSituation = {chooseSituation}
                tap={value.tap}
                question = {value.question}
                answer = {value.answer}
                title = {value.title}
                situation = {value.situation}
                />
            ))}
            <Footer>
                <FinalResult valueQuestions={valueQuestions}/>
                { valueQuestions.map(value => {
                    if (value !== 'notyet') {
                        return <IconSituation situation={value} />
                    }
                })}
                <h3>{counter}/4 CONCLUÍDOS</h3>

            </Footer>
        </>  
    )
}


