import logo from '../assets/images/logo.png';

export default function InitialScreen ({setIsClicked } ) {
    return (
        <>
            <div className= 'initial-box'>            
                < img src={logo}  />
                <h1>ZapRecall</h1>
                <div className = 'initial-button' onClick = {() => setIsClicked(true)}>
                    
                    Iniciar Recall!
                </div>
            </div>
        </>
    )
}


