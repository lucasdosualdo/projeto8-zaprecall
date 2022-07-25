import React from 'react';
import FlashCard from './FlashCard';

export default function Deck ({questionDeck}) {
    const [newQuestions, setNewQuestions] = React.useState(questionDeck);

    function turnCard (cardIndex) {
        let attQuestionDeck = questionDeck.map((value, index)=>{
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
        setNewQuestions([...attQuestionDeck])
        console.log(newQuestions);
    }

    return (
        <div>
        {
            newQuestions.map((value, index)=> (
                <FlashCard 
                index={index}
                turnCard = {turnCard}
                tap={value.tap}
                question = {value.question}
                answer = {value.answer}
                title = {value.title}
                />
            ))}

        </div>  
    )
}