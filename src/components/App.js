import '../assets/css/reset.css';
import '../assets/css/style.css';
import InitialScreen from './InitialScreen';
import Questions from './Questions';
import React from 'react';

export default function App () {
    const [clikedInitial, setClikedInitial] = React.useState(false);
    return (
        <>
           { (clikedInitial===false) ?
            < InitialScreen setClikedInitial = {setClikedInitial}/> :
            <Questions />
        }
        </>
    )        
}
