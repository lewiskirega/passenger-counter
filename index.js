//increment button & save
let saveEl= document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let subwaycount = 0

function increment() {
    subwaycount += 1
    countEl.textContent = subwaycount
    console.log("click")
    console.log(subwaycount)
}

// save button

function save(){
    let subwaystr = subwaycount + " - "
    saveEl.textContent += subwaystr
    countEl.textContent= 0
    subwaycount=0
    console.log("click")
    console.log(subwaystr)
}

