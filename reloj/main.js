const secsStick=document.querySelector('.second-stick')
const minStick=document.querySelector('.minute-stick')
const hourStick=document.querySelector('.hour-stick')

function setDate(){
    const now=new Date();
    
    const seconds=now.getSeconds();
    const secondsDegree=((seconds / 60) * 360) + 90;
    secsStick.style.transform=`rotate(${secondsDegree}deg)`
    
    const min=now.getMinutes();
    const minDegree=((min / 60) * 360) + 90;
    minStick.style.transform=`rotate(${minDegree}deg)`
    
    const hour=now.getHours();
    const hourDegree=((hour / 12) * 360) + 90;
    hourStick.style.transform=`rotate(${hourDegree}deg)`
}



setInterval(setDate, 1000);