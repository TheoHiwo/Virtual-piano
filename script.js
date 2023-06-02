
// white keys

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") {
        let audio = new Audio("white_keys2/C.wav")
        audio.play()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyS") {
        let audio = new Audio("white_keys2/D.wav")
        audio.play()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyD") {
        let audio = new Audio("white_keys2/E.wav")
        audio.play()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyF") {
        let audio = new Audio("white_keys2/F.wav")
        audio.play()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyG") {
        let audio = new Audio("white_keys2/G.wav")
        audio.play()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyH") {
        let audio = new Audio("white_keys2/A.wav")
        audio.play()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyJ") {
        let audio = new Audio("white_keys2/B.wav")
        audio.play()
    }
});

//black keys

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyW") {
        let audio = new Audio("black_keys2/C.wav")
        audio.play()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyE") {
        let audio = new Audio("black_keys2/D.wav")
        audio.play()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyT") {
        let audio = new Audio("black_keys2/F.wav")
        audio.play()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyY") {
        let audio = new Audio("black_keys2/G.wav")
        audio.play()
    }
});

document.addEventListener("keydown", function(event) {
    if (event.code === "KeyU") {
        let audio = new Audio("black_keys2/A.wav")
        audio.play()
    }
});



/*
document.addEventListener("keydown", function (event) {
    const pianoKeys = ["A", "S", "D", "F", "G", "H", "J"];
    for (const x in pianoKeys) {
        if (event.code === "Key"+ pianoKeys[x]) {
        let audio = new Audio("white_keys/"+`${pianoKeys[x]}` + ".mp3")
        audio.play()
            return;
        }
    }
    console.log("wrong key pressed\"");
})

*/











