//global constants
const fieldWidth = 700
const fieldHeight = 400
const diameter = 80

const maxLeft = fieldWidth - diameter - 6
const maxTop = fieldHeight - diameter - 6
const vx = 5 //1 Farme เคลื่อนที่ได้ไว 5 px ต่อ frame ในแหน x
const vy = 5 //1 Farme เคลื่อนที่ได้ไว 5 px ต่อ frame ในแหน y
// rotaion
const rotationSpeed = 3 //speed of rotation

//global variables
let goRight = true
let goDown = true
let x = 0
let y = 0
// rotaion
let rotation = 0

// button
let running = false

const runClick = () => {
    running = !running
    //บังคับให้ render
    removeActiveClass()
    render()
}
const calculate = () => {
    if(goRight){
        x = x + vx
        if(x >= maxLeft){
            goRight = false
        }
    }else{
        x = x - vx
        if(x <= 0){
            goRight = true
        }
    }

    if (goDown) {
        y = y + vy
        if (y >= maxTop) {
            goDown = false
        }
    }else{
        y = y - vy
        if (y <= 0) {
            goDown = true
        }
    }

    // update rotation
    rotation += rotationSpeed
    if (rotation >= 360) rotation = 0
}
const render = () => {
    //run button
    //local constant
    const btn = document.getElementById('run')
    if(running){
        btn.innerHTML= '<span class="bi bi-pause-fill">&nbsp;Stop</span>'
        btn.classList.remove('btn-success')
        btn.classList.add('btn-warning')
    }else{
        btn.innerHTML = '<span class="bi bi-play-fill">&nbsp;Run</span>'
        btn.classList.remove('btn-warning')
        btn.classList.add('btn-success')
    }
    // ball position
    document.getElementById('ball').style.left = x + 'px'
    document.getElementById('ball').style.top = y + 'px'
    document.getElementById('ball').style.transform = `rotate(${rotation}deg)`
}
const process = () => {
    if(running){
        calculate()
        render()
    }
}
const initial = () => {
    //field
    document.getElementById('field').style.height = fieldHeight + 'px'
    document.getElementById('field').style.width = fieldWidth + 'px'
    //ball
    document.getElementById('ball').style.height = diameter + 'px'
    document.getElementById('ball').style.width = diameter + 'px'
}

document.addEventListener('DOMContentLoaded', function() {
    //animation (40 f/s)
    setInterval(process, 25)
    //initialize
    initial()
})

const removeActiveClass = () => {
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach(button => button.classList.remove('active'))
}
const buttonClick = (id) => {
    removeActiveClass()
    document.getElementById(id).classList.add('active')
}
const noneClick = () => {
    buttonClick('none')
    let ball = document.getElementById('ball')
    ball.innerHTML = '<img class="ballimage" src="./img/white.jpg" alt="">'
}
const basketballClick = () => {
    buttonClick('basketball')
    let ball = document.getElementById('ball')
    ball.innerHTML = '<img class="ballimage" src="./img/basketball.png" alt="">'
}
const footballClick = () => {
    buttonClick('football')
    let ball = document.getElementById('ball')
    ball.innerHTML = '<img class="ballimage" src="./img/football.png" alt="">'
}
const voleyballClick = () => {
    buttonClick('voleyball')
    let ball = document.getElementById('ball')
    ball.innerHTML = '<img class="ballimage" src="./img/voleyball.png" alt="">'
}
const humanClick = () => {
    buttonClick('human')
    let ball = document.getElementById('ball')
    ball.innerHTML = '<img class="ballimage" src="./img/human.png" alt="">'
}
const cartoonClick = () => {
    buttonClick('cartoon')
    let ball = document.getElementById('ball')
    ball.innerHTML = '<img class="ballimage" src="./img/cartoon.png" alt="">'
}
const logoClick = () => {
    buttonClick('logo')
    let ball = document.getElementById('ball')
    ball.innerHTML = '<img class="ballimage" src="./img/Logo.png" alt="">'
}

// เพิ่มตัวแปร rotation และ rotationSpeed เพื่อควบคุมการหมุนของลูกบอล
// ในฟังก์ชัน calculate จะทำการเพิ่มค่าของ rotation ทุกครั้งที่ลูกบอลเคลื่อนที่
// ในฟังก์ชัน render จะใช้ style.transform เพื่อหมุนลูกบอลตามค่าของ rotation
// ทุกครั้งที่ rotation ถึง 360 องศา จะถูกรีเซ็ตกลับไปเป็น 0