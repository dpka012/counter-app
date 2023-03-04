let countEl = document.getElementById("countUs")
let saveEl = document.getElementById("saveUs")
console.log(countEl)
let count = 0

function increment() {
  count += 1
  countEl.innerText = count
}


function save() {
  count += 1
  let countStr = " " + count + " - "
  saveEl.textContent += countStr
  countEl.innerText = 0
  count = 0
  
}
document.getElementById("countUs")