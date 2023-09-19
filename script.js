function flip() {
    card.classList.toggle('flip');
    count++;
}

function textos(n) {
    if (count % 2 == 0) {
        //Trás da carta
        back.innerHTML = `<h1>${texts[n]}</h1>`;
        flip();
    } else {
        //Frente da carta
        front.innerHTML = `<h1>${texts[n]}</h1>`;
        flip();
    }
}