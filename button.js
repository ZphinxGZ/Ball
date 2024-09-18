const keyCheck = (ele) =>{
    console.log(ele.key)

    switch(ele.key){
        case " ":
            runClick()
            break
        case "1":
            noneClick()
            break
        case '2':
            basketballClick()
            break
        case '3':
            footballClick()
            break
        case '4':
            voleyballClick()
            break
        case '5':
            humanClick()
            break
        case '6':
            cartoonClick()
            break
        case '7':
            logoClick()
            break
        default:
            break
    }
}
document.addEventListener('DOMContentLoaded', () =>{
    document.addEventListener('keydown',keyCheck)
})