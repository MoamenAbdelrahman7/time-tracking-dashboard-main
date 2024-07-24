
const allCardItems=document.querySelectorAll(".items .activity-card");

function buttonhandler(buttonId){
    
        fetch("./data.json")
        .then(res => {
            if(!res.ok){
                console.log("Something went wrong!"); 
                return;
            }
            return res.json();
        })
        .then(data =>{
            console.log("data fetched successfully")
            console.log(data)
            for( let cardItemIndex=0; cardItemIndex< allCardItems.length;cardItemIndex++) {
                allCardItems[cardItemIndex].querySelector(".total-hours h1").innerHTML=data[cardItemIndex].timeframes[buttonId].current+"hrs";
                allCardItems[cardItemIndex].querySelector(".total-hours p").innerHTML="Last Week - "+data[cardItemIndex].timeframes[buttonId].previous+"hrs";
            }
             })
        .catch(error => {console.log(error);});
    }

const info_card=document.getElementById("info-card");

const buttons=info_card.querySelectorAll("button");
for( let btIndex=0; btIndex<buttons.length;btIndex++) {
    buttons[btIndex].addEventListener("click",() => {
        console.log(btIndex)
        let selectedButton=document.querySelector(".selected");
        selectedButton.classList.remove("selected");
        buttons[btIndex].classList.add("selected");
        // buttonHandlers[btIndex]();
        buttonhandler(buttons[btIndex].id)
        console.log(buttons[btIndex].id)
    });
};












