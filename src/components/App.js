import '../assets/css/reset.css';
import '../assets/css/style.css';
import InitialScreen from './InitialScreen';
import Questions from './Questions';
import React from 'react';

export default function App () {
    const [isClicked, setIsClicked] = React.useState(false);
    return (
        <>
           { (isClicked===false) ?
            < InitialScreen setIsClicked = {setIsClicked}/> :
            <Questions />
        }
        </>
    )        
}