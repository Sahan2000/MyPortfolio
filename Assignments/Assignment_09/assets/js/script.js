var current_light = -1;
var current_direction = "RIGHT";
var light_count = 7;

const updatePanel=()=>{
    $(".light").css("background", "white");
    if (current_direction === "RIGHT"){
        current_light++;
    $(".light").eq(current_light).css("background", "red");
        if (current_light-1 >= 0){
            $(".light").eq(current_light-1).css("background", "pink");
        }


        if (current_light === light_count-1){
            current_direction ="LEFT";
        }
    }else {
        current_light--;
        $(".light").eq(current_light).css("background", "red");
        $(".light").eq(current_light+1).css("background", "pink");
        if (current_light === 0){
            current_direction = 'RIGHT';
        }
    }
}

let intervalId = null;
$("#start").on('click', ()=>{
    if (intervalId === null){
        intervalId=setInterval(updatePanel,100);
        $('audio')[0].play();
    }
});

$("#stop").on('click', ()=>{
    clearInterval(intervalId);
    intervalId = null;
    $('audio')[0].pause();
});