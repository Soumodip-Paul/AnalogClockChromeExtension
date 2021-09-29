setTime()

setInterval(() => setTime(),1000)

function setTime() {
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    
    let hourRotation = hour * 30 + min * 0.5 ;

    let mRotation = min * 6;
    let sRotation = sec * 6;

    document.getElementById("hour").style.transform = `rotate(${hourRotation}deg)`
    document.getElementById("min").style.transform = `rotate(${mRotation}deg)`
    document.getElementById("sec").style.transform = `rotate(${sRotation}deg)`
    document.getElementById("date").innerText = date.toDateString()
    
}