import miniLogo from '../assets/images/logo-pequeno.png';

export default function Header () {
    return (
        <div className='header'>
        < img src={miniLogo}  />
        <h1>ZapRecall</h1>
        </div>
    )
}