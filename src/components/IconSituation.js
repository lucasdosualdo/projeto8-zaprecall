export default function IconSituation ({situation}) {
    if (situation==='notyet') {
        return (
        <ion-icon name="play-outline"></ion-icon>
        ) 
    } 
    if (situation === 'right') {
        return (
            <ion-icon name="checkmark-circle"></ion-icon>
        )
    } 
    if (situation === 'almost') {
        return (
            <ion-icon name="help-circle"></ion-icon>
        )
    } 
    if (situation ==='wrong') {
        return (
            <ion-icon name="close-circle"></ion-icon>
        )
    }
}