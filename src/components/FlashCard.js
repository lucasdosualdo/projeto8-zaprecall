import turn from '../assets/images/setinha.png';

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
    
    function OpenCard ({question}) {
        return (
            <div className = 'flashcard-open'>
                <h3>{question}</h3>
                <img src = {turn} />
            </div>
        )
    }