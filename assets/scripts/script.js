const front = document.querySelector("#front");
const back = document.querySelector("#back");
const oracoes = [
    "<div class='help-Deus'></p><h2>Sinal da Cruz</h2><p>Em nome do Pai, do Filho e do Espírito Santo. Amém.</p><h2>Oferecimento do Terço</h2><p>Divino Jesus, nós Vos oferecemos este terço que vamos rezar, meditando nos mistérios da Vossa Redenção. Concedei-nos, por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes que nos são necessárias para bem rezá-lo e a graça de ganharmos as indulgências desta santa devoção.</div>",

    "<div class='help-Deus'><h2>Creio</h2><p>Creio em Deus Pai Todo-Poderoso, Criador do Céu e da Terra; e em Jesus Cristo, Seu único Filho, Nosso Senhor; Que foi concebido pelo poder do Espírito Santo. Nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto, sepultado; desceu a mansão dos mortos. Ressuscitou no terceiro dia. Subiu ao Céu, onde está sentado à direita de Deus Pai Todo-Poderoso, de onde há-de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na Comunhão dos Santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.</p></div>",

    "<div class='help-Deus'><h2>Pai Nosso</h2><p>Pai nosso, que estais nos Céus, santificado seja o Vosso Nome; venha a nós o Vosso Reino, seja feita a Vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal.  Amém.</p><h2>Ave Maria</h2><p>Ave Maria, cheia de graça, o Senhor é convosco; bendita sois Vós entre as mulheres e bendito é o fruto do Vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.</p></div>",

    "<div class='help-Deus'><h2>Glória</h2><p>Glória ao Pai, ao Filho e ao Espírito Santo. Assim como era no princípio, agora e sempre, pelos séculos dos séculos. Amem</p><h2>Ó meu Jesus</h2><p>Ó meu Jesus, perdoai-nos e livrai-nos do fogo do inferno; levai as almas todas para o Céu, e socorrei principalmente as que mais precisarem da vossa infinita misericórdia.</p></div>",

    "<div class='help-Deus'><h2>Agradecimento</h2><p>Infinitas graças vos damos, ó Soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos maternais. Dignai-vos, agora e para sempre tomar-nos debaixo do vosso poderoso amparo e para mais vos agradecer, vos saudamos com uma Salve Rainha:</p></div>",

    "<div class='help-Deus'><h2>Salve Rainha</h2><p>Salve, Rainha, Mãe de Misericórdia, vida, doçura e esperança nossa, Salve. A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, Advogada nossa, esses Vossos olhos misericordiosos a nós volvei; e depois deste desterro nos mostrai Jesus, bendito Fruto do Vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria.</p><p>Rogai por nós, Santa Mãe de Deus; para que sejamos dignos das promessas de Cristo. Amém.</p></div>",

    "<div class='help-Deus'><h2>Oração da Medalha de São Bento</h2><p>A Cruz sagrada seja a minha Luz. Não seja o Dragão meu guia. Retira-te Satanás! Nunca me aconselhes coisas vãs. É mal o que tu me ofereces. Bebe tu mesmo do teu veneno! (3x)</p><p>Amém</p></div>",
];
var count = 0;

window.addEventListener('keydown', (e) => {
    if (e.key < oracoes.length + 1 && e.key > 0) {
        flip(e.key - 1);
    }
});

function flip(n) {
    if (count % 2 == 0) {
        //Trás da carta
        back.innerHTML = oracoes[n];
        card.classList.toggle('flip');
        count++;
    } else if(count % 2 != 0) {
        //Frente da carta
        front.innerHTML = oracoes[n];
        card.classList.toggle('flip');
        count++;
    }
}