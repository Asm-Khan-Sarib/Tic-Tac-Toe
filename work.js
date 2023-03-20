document.addEventListener("DOMContentLoaded", function(){
    // backgroud image change
    document.getElementById("t1").addEventListener("click", function(){
        document.body.style.backgroundImage = 'url("image/space1.jpg")';
    })
    document.getElementById("t2").addEventListener("click", function(){
        document.body.style.backgroundImage = 'url("image/underwater1.jpg")';
    })
    document.getElementById("t3").addEventListener("click", function(){
        document.body.style.backgroundImage = 'url("image/nature2.jpg")';
    })

    // backgroud music
    document.getElementById("m1").addEventListener("click", function(){
        document.getElementById("background-audio").play();
    })
    document.getElementById("m2").addEventListener("click", function(){
        document.getElementById("background-audio").pause();
    })
    
})