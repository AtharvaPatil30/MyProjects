window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "lightcoral",
        "lightseagreen",
        "mediumvioletred",
        "saddlebrown",
        "royalblue"
    ];

    //lets get the sound on the click

    pads.forEach((pad , index )=> {
        pad.addEventListener('click' , function(){
            sounds[index].currentTime = 0;
            sounds[index].play();


            createrbubble(index);
        });
    });


    //create function that makes bubles

    const createrbubble = (index) => {
        const bubles = document.createElement("div");
        visual.appendChild(bubles);
        bubles.style.backgroundColor = colors[index];
        bubles.style.animation = 'jump 1s ease';
        bubles.addEventListener('animationend' , function(){
            visual.removeChild(this);
        });
    };

} );

