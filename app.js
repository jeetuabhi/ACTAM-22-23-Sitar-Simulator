function play(event,isOnclick){
    let root_path = '/audio/';
    let btn_name = "";
    if(isOnclick){
        console.log(event.target.name);
        btn_name = event.target.name;
    } else {
        console.log(event.key);
        btn_name = String(event.key);
    }

    
    switch (btn_name) {
        
        case "q":
        case "play1":
            aud = new Audio('/audio/C_sa_mid.wav');
            aud.play();
            document.getElementById("btn-Q").style.color='#FF0000';
            document.getElementById("btn-Q").style.boxShadow='11px 11px 22px #141414';
            setTimeout(function(){
                document.getElementById("btn-Q").style.color='#f5deb3';
                document.getElementById("btn-Q").style.boxShadow='inset 2px 2px 0px #7d7c7e, inset -2px -2px 0px #1c1c1c';
            },500);
          break;
        case "w":
        case "play2":
            aud = new Audio('/audio/B_ni_mid.wav');
            aud.play();
            document.getElementById("btn-W").style.color='#FF0000';
            document.getElementById("btn-W").style.boxShadow='11px 11px 22px #141414';
            setTimeout(function(){
                document.getElementById("btn-W").style.color='#f5deb3';
                document.getElementById("btn-W").style.boxShadow='inset 2px 2px 0px #7d7c7e, inset -2px -2px 0px #1c1c1c';
            },500);
          break;
        case "e":
        case "play3":
            aud = new Audio('/audio/C_sa_mid.wav');
            aud.play();
            document.getElementById("btn-E").style.color='#FF0000';
            document.getElementById("btn-E").style.boxShadow='11px 11px 22px #141414';
            setTimeout(function(){
                document.getElementById("btn-E").style.color='#f5deb3';
                document.getElementById("btn-E").style.boxShadow='inset 2px 2px 0px #7d7c7e, inset -2px -2px 0px #1c1c1c';
            },500);
          break;
        case "r":
        case "play4":
            aud = new Audio('/audio/D_re_mid.wav');
            aud.play();
            document.getElementById("btn-R").style.color='#FF0000';
            document.getElementById("btn-R").style.boxShadow='11px 11px 22px #141414';
            setTimeout(function(){
                document.getElementById("btn-R").style.color='#f5deb3';
                document.getElementById("btn-R").style.boxShadow='inset 2px 2px 0px #7d7c7e, inset -2px -2px 0px #1c1c1c';
            },500);
            break;
        case "t":
        case "play5":
            aud = new Audio('/audio/E_ga_mid.wav');
            aud.play();
            document.getElementById("btn-T").style.color='#FF0000';
            document.getElementById("btn-T").style.boxShadow='11px 11px 22px #141414';
            setTimeout(function(){
                document.getElementById("btn-T").style.color='#f5deb3';
                document.getElementById("btn-T").style.boxShadow='inset 2px 2px 0px #7d7c7e, inset -2px -2px 0px #1c1c1c';
            },500);
            break;
        case "y":
        case "play6":
            aud = new Audio('/audio/F_ma_mid.wav');
            aud.play();
            document.getElementById("btn-Y").style.color='#FF0000';
            document.getElementById("btn-Y").style.boxShadow='11px 11px 22px #141414';
            setTimeout(function(){
                document.getElementById("btn-Y").style.color='#f5deb3';
                document.getElementById("btn-Y").style.boxShadow='inset 2px 2px 0px #7d7c7e, inset -2px -2px 0px #1c1c1c';
            },500);
            break;
        case "u":
        case "play7":
            aud = new Audio('/audio/G_pa_mid.wav');
            aud.play();
            document.getElementById("btn-U").style.color='#FF0000';
            document.getElementById("btn-U").style.boxShadow='11px 11px 22px #141414';
            setTimeout(function(){
                document.getElementById("btn-U").style.color='#f5deb3';
                document.getElementById("btn-U").style.boxShadow='inset 2px 2px 0px #7d7c7e, inset -2px -2px 0px #1c1c1c';
            },500);
            break;
        case "i":
        case "play8":
            aud = new Audio('/audio/A_Dha_mid.wav');
            aud.play();
            document.getElementById("btn-I").style.color='#FF0000';
            document.getElementById("btn-I").style.boxShadow='11px 11px 22px #141414';
            setTimeout(function(){
                document.getElementById("btn-I").style.color='#f5deb3';
                document.getElementById("btn-I").style.boxShadow='inset 2px 2px 0px #7d7c7e, inset -2px -2px 0px #1c1c1c';
            },500);
            break;
        case "o":
        case "play9":
            aud = new Audio('/audio/B_ni_mid.wav');
            aud.play();
            document.getElementById("btn-O").style.color='#FF0000';
            document.getElementById("btn-O").style.boxShadow='11px 11px 22px #141414';
            setTimeout(function(){
                document.getElementById("btn-O").style.color='#f5deb3';
                document.getElementById("btn-O").style.boxShadow='inset 2px 2px 0px #7d7c7e, inset -2px -2px 0px #1c1c1c';
            },500);
            break;
        case "k":
        case "play10":
            aud = new Audio('/audio/C_sa_high.wav');
            aud.play();
            document.getElementById("btn-K").style.color='#FF0000';
            document.getElementById("btn-K").style.boxShadow='11px 11px 22px #141414';
            setTimeout(function(){
                document.getElementById("btn-K").style.color='#f5deb3';
                document.getElementById("btn-K").style.boxShadow='inset 2px 2px 0px #7d7c7e, inset -2px -2px 0px #1c1c1c';
            },500);
            break;
        case "l":
        case "play11":
            aud = new Audio('/audio/D_re_high.wav');
            aud.play();
            document.getElementById("btn-L").style.color='#FF0000';
            document.getElementById("btn-L").style.boxShadow='11px 11px 22px #141414';
            setTimeout(function(){
                document.getElementById("btn-L").style.color='#f5deb3';
                document.getElementById("btn-L").style.boxShadow='inset 2px 2px 0px #7d7c7e, inset -2px -2px 0px #1c1c1c';
            },500);
            break;
        default:
          text = "No value found";
      }
}