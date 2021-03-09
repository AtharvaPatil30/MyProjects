const game  = ()=> {
    let pscore = 0;
    let cscore = 0;

    const startgame = ()=>{
        const playbutton = document.querySelector('.intro button ');
        const introscren = document.querySelector('.intro');
        const match = document.querySelector('.match ');

        playbutton.addEventListener('click' , () =>{
            introscren.classList.add("fadeout");
            match.classList.add("fadein");
        });
    };

    const playmatch = () => {
        const options = document.querySelectorAll('.options button ');
        const playerhand = document.querySelector('.player-hand');
        const computerhand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img ')

        hands.forEach(hand => {
            hand.addEventListener('animationend' , function(){
                this.style.animation = "" ;
            });
        });


        const computeroptions = ["rock" , "paper" , "scissors"];
        options.forEach(option =>{
            option.addEventListener("click" , function() {
                //computer choice
                const computernumber = Math.floor(Math.random() * 3) ;
                const computerchoice = computeroptions [computernumber];
                console.log(computerchoice);


                setTimeout(() => {
                    
                comparehands(this.textContent , computerchoice );

                playerhand.src = `${this.textContent}.png`;
                computerhand.src = `${computerchoice}.png`;

                },2000  )


                playerhand.style.animation = "shakeplayer 2s ease";
                computerhand.style.animation = "shakecomputer 2s ease";




            });

        });





        
    };



    const updatescore = () =>{
        const playerscore= document.querySelector('.player-score p ');
        const computerscore= document.querySelector('.computer-score p ');
        playerscore.textContent = pscore;
        computerscore.textContent = cscore;

    };














    const comparehands = (playerchoice , computerchoice) => {
        const winner = document.querySelector('.winner');

        if(playerchoice === computerchoice ){
            winner.textContent= 'It is a Tie ';
            return;

        }
        if(playerchoice==='rock'){
            if(computerchoice==='scissors'){
                winner.textContent = 'Player Wins';
                pscore++;
                updatescore();
                return;
            }
            else{
                winner.textContent= 'Computer Wins ';
                cscore++;
                updatescore();
                return;
            }
        }


        if(playerchoice==='paper'){
            if(computerchoice==='scissors'){
                winner.textContent = 'Computer Wins';
                cscore++;
                updatescore();
                return;
            }
            else{
                winner.textContent= 'Player Wins ';
                pscore++;
                updatescore();
                return;
            }
        }


        if(playerchoice==='scissors'){
            if(computerchoice==='rock'){
                winner.textContent = 'Computer Wins';
                cscore++;
                updatescore();
                return;
            }
            else{
                winner.textContent= 'PLayer Wins ';
                pscore++;
                updatescore();
                return;
            }
        }

    }



    startgame();
    playmatch();

    

};

game();