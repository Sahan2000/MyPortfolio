let color = ['red','green','blue','yellow','lightpink','pink'];
let items = $('.color');

for (let i = 0; i<items.length; i++){
    items.eq(i).css('background',color[i]);
}

setInterval(() => {

    color = [color[5],color[0],color[1],color[2],color[3],color[4]];

    for (let i = 0; i<items.length; i++){
        items.eq(i).css('background',color[i]);
    }

},1000);