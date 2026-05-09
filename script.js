let Play = false;
let Tick = 0;
let Delay = 500;
let Interval;
let NoteTimes = [4, 8, 4];
let Note = 0;
let NoteTime = 0;

document.getElementById("Pause").addEventListener("click", function () {

    Delay = Number(document.getElementById("Delay").value)

    console.log(Delay)


    if (Play) {
    Play = false;
    document.getElementById("Pause").src = "./play.png"   
    clearInterval(Interval);
    } else {
    Play = true;
    document.getElementById("Pause").src = "./pause.png"
    Interval = setInterval(() => {
    
    Tick++
    NoteTime++
    console.log(Tick)
    
    

    for (let i = 0; i < document.querySelectorAll(".Note").length; i++) {
        document.getElementsByClassName("Note")[i].style.backgroundColor = "rgba(0, 0, 0, 0)"
        document.getElementsByClassName("Counter")[i].innerHTML = "0/" + NoteTimes[i];
    }

    
    document.getElementById("Note" + Note).style.backgroundColor = "rgb(9, 78, 24)"

    document.getElementById("Note" + Note).animate(
    [{ transform: "scale(1)" }, { transform: "scale(1.075)" }],
    {
      duration:   125,
      direction: "alternate",
      iterations: 2
    },
  );
    
    document.getElementById("Counter" + Note).innerHTML = NoteTime + "/" + NoteTimes[Note]

    if (NoteTime == NoteTimes[Note]) {
        Note++
        NoteTime = 0;
        if (Note == NoteTimes.length) {
          Note = 0;  
        }

    }

    }, Delay);

    }
    
    
})


