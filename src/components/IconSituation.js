export default function IconSituation ({situation}) {
    if (situation==='notyet') {
        return (
        <ion-icon name="play-outline"></ion-icon>
        ) 
    } 
    if (situation === 'right') {
        return (
            <ion-icon name="checkmark-circle" style={{ color: '#2FBE34' }}></ion-icon>
        )
    } 
    if (situation === 'almost') {
        return (
            <ion-icon name="help-circle" style={{ color: '#FF922E' }}></ion-icon>
        )
    } 
    if (situation ==='wrong') {
        return (
            <ion-icon name="close-circle" style={{ color: '#FF3030' }}></ion-icon>
        )
    }
}