new Sortable(select, {
    group: {
        name: 'shared',
        put: 'false',
        pull: 'clone'
    },
    sort: "true",
    delay: 0,
    animation: 150,
    direction: 'horizontal',
    onStart: function (/**Event*/ evt) {
        document.getElementById("drop").innerHTML = "and Drop it Here!";
    },
    onEnd: function (/**Event*/ evt) {
        document.getElementById("drop").innerHTML = "";
    },
});

new Sortable(list, {
    group: {
        name: 'shared',
    },
    animation: 150,
    direction: 'horizontal',
    removeOnSpill: true,
    onStart: function (/**Event*/ evt) {
        document.getElementById("drop").innerHTML = "drop it outside the card to remove";
    },
    onEnd: function (/**Event*/ evt) {
        document.getElementById("drop").innerHTML = "";
    }
});

const synth = window.speechSynthesis;

const speak = text => {
    if (synth.speaking) {
        console.log("already talking");
        return
    }
    let utterThis = new SpeechSynthesisUtterance(text);
    utterThis.rate = map(speed.value, 1, 100, 0
        , 2);
    console.log(utterThis.rate);
    synth.speak(utterThis);
}

const map = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

document.querySelector("#play").onclick = () => {
    // let textInput = document.querySelector("#text-input").value;
    // let phrase = "";

    // let split = textInput.split("");

    // split.forEach(letter =>{
    //     // console.log(letter);
    //     // for (i = 0; i < 5; i++){
    //         phrase += letter;
    //     // }
    // })
    // speak(phrase);
    // console.log(phrase);

    var node, list, arrValue;
    // list = [];
    let phrase = "";
    let fullPhrase = "";
    let msgDom = document.querySelector(".msg");

    for (node = document.getElementById('list').firstChild; node; node = node.nextSibling) {
        if (node.nodeType == 1 && node.tagName == 'LI') {
            // list.push(node.innerHTML);
            phrase += node.getAttribute('alt') + " ";
            // console.log(node.getAttribute('alt'));
        }
    }
    for (x = 0; x < rep.value; x++){
        fullPhrase += phrase;
    }
    msgDom.innerHTML = fullPhrase;
    speak(fullPhrase);
}



document.querySelector("#clear").onclick = () => {
    document.querySelector("#list").innerHTML = "";
    document.querySelector(".msg").innerHTML = "";
}

document.querySelector("#stop").onclick = () => {
    synth.cancel();
}

// let speed = document.getElementById("speed");
// let outputSpeedSpeed = document.getElementById("outputSpeed");

// let rep = document.getElementById("rep");
// let outputRep = document.getElementById("outputRep");

// outputSpeed.innerHTML = speed.value + "% speed" ;
// outputRep.innerHTML = "repeat " + rep.value + " times";

// speed.oninput = function() {
//     outputSpeed.innerHTML = this.value + "% speed";
// }
// rep.oninput = function() {
//     outputRep.innerHTML = "repeat " + this.value + " times";
// }