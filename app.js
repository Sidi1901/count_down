const endDate="17 MARCH 2023 11:00:00 PM";

document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input");
const modal =document.getElementById("colid");

function ticking(){
    const end_date=new Date(endDate);
    const start_date=new Date();
    const diff=(end_date-start_date)/1000;

    if(diff<0){
        reaching();
        return;
    }

    inputs[0].value=Math.floor(diff/24/3600);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;

}

setInterval(ticking,1000);

function reaching(){
    modal.style.display="block";
    
}

