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
                        <p>😥<strong>Putz...</strong></p>
                        <p>Ainda faltam alguns...</p>
                        <p>Mas não desanime!</p>
                </>) : (<>
                        <p>🥳<strong>Parabêns!</strong></p>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                    </>)}
            </>
        )
    }