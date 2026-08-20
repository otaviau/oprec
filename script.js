console.log("Script berhasil dimuat");

const targetDate = new Date(2026, 9, 25, 23, 59, 59);

console.log(targetDate);
console.log(new Date());

function updateCountdown(){

    const now = new Date();

    let diff = targetDate - now;

    if(diff <= 0){

        document.getElementById("days").textContent="00";
        document.getElementById("hours").textContent="00";
        document.getElementById("minutes").textContent="00";
        document.getElementById("seconds").textContent="00";

        return;

    }

    const days=Math.floor(diff/86400000);

    diff%=86400000;

    const hours=Math.floor(diff/3600000);

    diff%=3600000;

    const minutes=Math.floor(diff/60000);

    diff%=60000;

    const seconds=Math.floor(diff/1000);

    document.getElementById("days").textContent=String(days).padStart(2,"0");
    document.getElementById("hours").textContent=String(hours).padStart(2,"0");
    document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");
    document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);