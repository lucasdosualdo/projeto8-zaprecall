export default function FinalResult ({valueQuestions}) {
    if (valueQuestions.length === 4) {
        return (
            <Result valueQuestions={valueQuestions}/>
        )
    } else {
        return null
    }
    }
    
    function Result ({valueQuestions}) {
    
        const result = valueQuestions.find(value => value === 'wrong');
        return (
            <>
                {result ? (<>
                        <h3>😥<strong>Putz...</strong></h3>
                        <h3>Ainda faltam alguns...</h3>
                        <h3>Mas não desanime!</h3>
                </>) : (<>
                        <h3>🥳<strong>Parabêns!</strong></h3>
                        <h3>Você não esqueceu de nenhum flashcard!</h3>
                    </>)}
            </>
        )
    }