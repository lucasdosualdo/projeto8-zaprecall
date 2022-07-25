import turn from '../assets/images/setinha.png';
import React from 'react';
import IconSituation from './IconSituation';

export default function FlashCard ({index, turnCard, tap, question, answer, title, situation, chooseSituation}) {
    return (
       <>
       { !tap? 
        (<CardClosed 
        index = {index}
        turnCard = {turnCard}
        title = {title}
        situation = {situation}
        />) : (
        <OpenCard
        question={question}
        answer = {answer}
        chooseSituation = {chooseSituation}
        index = {index}
        />)
       }
       </>
    )
    }
    
    function CardClosed ({title, turnCard, index, situation}) {
        if (situation ==='notyet') {
            return (
                <div className ={`flashcard-closed ${situation}`} onClick = {()=>turnCard(index)}>
                    <h4>{title}</h4>
                    <IconSituation situation ={situation}/>
                </div>
            )
        } else {
            return (
                <div className ={`flashcard-closed ${situation}`}>
                    <h4>{title}</h4>
                    <IconSituation situation ={situation}/>
                </div>
            )
        }
       }
    
    function OpenCard ({question, answer, chooseSituation, index}) {
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
                    <div className='naoLembrei' onClick = {() => chooseSituation(index, 'wrong')}>
                        <p>Não lembrei</p>
                    </div>
                    <div className='quaseNaoLembrei' onClick = {() => chooseSituation(index, 'almost')}>
                        <p>Quase não lembrei</p>
                    </div>
                    <div className='zap' onClick = {() => chooseSituation(index, 'right')}>
                        <p>Zap!</p>
                    </div>
                </div>
            </div>
        )}
        </>       
        )
    }



