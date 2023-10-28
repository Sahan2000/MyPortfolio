const items = $('.item div');

setInterval(() => {
    let one = items.eq(0).html();
    let two = items.eq(1).html();
    let three = items.eq(2).html();
    let four = items.eq(3).html();
    let five = items.eq(4).html();
    let six = items.eq(5).html();

    items.eq(0).html(six);
    items.eq(1).html(one);
    items.eq(2).html(two);
    items.eq(3).html(three);
    items.eq(4).html(four);
    items.eq(5).html(five);

}, 1000);
