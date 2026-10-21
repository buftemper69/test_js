'use strict'
// let heading = document.getElementsByTagName('h1');
let secondheading = document.getElementById('heading');
let butt = document.getElementById('switch');
let parag = document.getElementById('email');
let mail = document.getElementById('mail');
let counter = document.getElementById('12')


// function cam_text(parag) {
//     let text = parag.innerText.toLowerCase();



//     for (let i = 0; i < text.length; ++i) {
//         if (text[i] == "_") {
//             text = text.replace(text[i + 1], text[i + 1].toUpperCase());
//             text = text.replace(text[i], "");

//         }
//     }
//     parag.innerText = text;
// }

function double_text(parag, count) {
    let text = parag.innerText;
    let result = "";

    for (let i = 0; i < count - 1; ++i) {
        result += text;

    }
    parag.innerText = result;
}

function cam_text(parag) {

    let text = parag.innerText.toLowerCase();
    let result = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "_") {

            if (text[i + 1]) {
                result += text[i + 1].toUpperCase();
                i++;
            }
        } else {
            result += text[i];
        }
    }

    parag.innerText = result;
}

function del_at(parag) {
    let text_arr = parag.innerText.split("");
    let index = 0;
    for (let i = 0; i < text_arr.length; ++i) {
        if (text_arr[i] == "@") {
            index = i;
        }
    }

    let right_text = "";
    for (let i = 0; i < index; ++i) {
        right_text += text_arr[i];
    }


    parag.innerText = right_text;

}

function del_gaps(parag) {
    let text = parag.innerText;
    parag.innerText = text.replaceAll(' ', '');
}

function changeText(secondheading, str) {
    secondheading.innerText = str;
}

function button(butt, str) {
    butt.innerText = str;

    const randomX = Math.floor(Math.random() * 600); // Случайная координата X
    const randomY = Math.floor(Math.random() * 600); // Случайная координата Y

    butt.style.position = 'absolute';
    butt.style.left = randomX + 'px';
    butt.style.top = randomY + 'px';


}

butt.addEventListener('click', () => changeText(secondheading, "PIpuN"));

butt.addEventListener('mouseover', function() { button(this, "ZzZzZzZzZz"); })

mail.addEventListener('click', () => {
    let count = counter.value.trim();
    const text = parag.innerText;
    console.log(count);

    double_text(parag, count);

})



console.log(secondheading);
console.log(butt);