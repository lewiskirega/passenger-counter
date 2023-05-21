let countEl = document.getElementById("count-el")
let subwaycount = 0

function increment() {
    subwaycount = subwaycount + 1
    countEl.innerText = subwaycount
    console.log("click")
    console.log(subwaycount)
}
