
function c1() {
    const i1 = Number(document.getElementById('i1').value) 
    const i2 = Number(document.getElementById('i2').value) 


   let res = document.getElementById('res')
    let res2 = i1 * i2
    res.innerHTML = `${res2}`
    res.classList.add("res-box")
}


function c2() {
    const i1 = Number(document.getElementById('i1').value) 
    const i2 = Number(document.getElementById('i2').value) 


   let res = document.getElementById('res')
    let res2 = i1 + i2
    res.innerHTML = `${res2}`

}



function c3() {
    const i1 = Number(document.getElementById('i1').value) 
    const i2 = Number(document.getElementById('i2').value) 


   let res = document.getElementById('res')
    let res2 = i1 - i2
    res.innerHTML = `${res2}`

}



function c4() {
    const i1 = Number(document.getElementById('i1').value) 
    const i2 = Number(document.getElementById('i2').value) 


   let res = document.getElementById('res')
    let res2 = i1 / i2
    res.innerHTML = `${res2}`

}

