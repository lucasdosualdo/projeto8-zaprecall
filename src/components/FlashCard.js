import turn from '../assets/images/setinha.png';
import React from 'react';

export default function FlashCard ({index, turnCard, tap, question, answer, title}) {
    return (
       <>
       { !tap? 
        (<CardClosed 
        index = {index}
        turnCard = {turnCard}
        title = {title}
        />) : (
        <OpenCard
        question={question}
        answer = {answer}
        />)
       }
       </>
    )
    }
    
    function CardClosed ({title, turnCard, index}) {
        return (
                <div className = 'flashcard-closed'>
                    <h4>{title}</h4>
                    <ion-icon onClick = {()=>turnCard(index)} name="play-outline" ></ion-icon>
                </div>
        )
       }
    
    function OpenCard ({question, answer}) {
        const [turned, setTurned] = React.useState(false);
        return (
        <>
        {!turned ? (
            <div className = 'flashcard-open'>
                <h3>{question}</h3>
                <img src = {turn} onClick = {()=>setTurned(true)}/>
            </div>
        ) : (
            <div className = 'flashcard-open'>
                <h3>{answer}</h3>
                <div className='options'>
                    <div className='naoLembrei'><p>Não lembrei</p></div>
                    <div className='quaseNaoLembrei'><p>Quase não lembrei</p></div>
                    <div className='zap'><p>Zap!</p></div>
                </div>
            </div>
        )}
        </>       
        )
    }