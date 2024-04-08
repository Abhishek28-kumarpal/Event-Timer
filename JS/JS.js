const enddate= "11 April 2024 11:00:00 PM"
document.getElementById("enddate").innerText=enddate;

// Select all input 

const inputs=document.querySelectorAll("input")

// create function 

function clock(){
const end = new Date(enddate)
const now = new Date()
const diff= (end-now)/1000 ;


//convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}


clock();

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */
setInterval(
    () => {
        clock()
    },
    1000
)