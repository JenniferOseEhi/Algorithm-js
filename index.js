
let convertFahrToCelsius = (fahr) => {
    if(typeof fahr == 'number') {

        var celsius;
        celsius = (fahr - 32) * (5 / 9)
        console.log(celsius)
        console.log("to 4 decimal places")
        return (celsius.toFixed(4))
    }
    else if (typeof fahr == 'object') {
        if(Array.isArray(fahr)) {
            console.log('this is an array')
            return `${fahr} is not a valid number but an Array`

        } else {
            console.log('this is an object')
            output = `${JSON.stringify(fahr)} is not a valid number but a ${typeof fahr}`
            return output
        }
    }
    else if (typeof fahr == 'string'){
        console.log('')
        let fahrNumber = Number(f)
        console.log(fahrNumber)
        console.log(typeof fahrNumber)

    if(isNaN(fahrNumber)){
        console.log("this is not a number")
        return (`${fahr} is not a valid number but a ${typeof fahr}.`)
    }
    else {
        let celsius = ((fahrNumber - 32) * (5 / 9))
        console.log(celsius +" c")
        return celsius
    }
    
    }
    
}

function checkYuGiOh(n) {

    let array = []
    if (!Number(n)) {
        return `invalid parameter: ${n}`;

    }

    for (let i = 1; i <= n; i++) {

        if (i % 30 === 0) {
            array.push("yu-gi-oh")

        } else if (i % 10 === 0) {
            array.push("yu-oh")

        } else if (i % 6 === 0) {
            array.push("yu-oh")

        } else if (i % 15 === 0) {
            array.push("yu-oh")

        }else if (i % 2 === 0) {
            array.push("yu")

        }else if (i % 3 === 0) {
            array.push("gi")

        }else if (i % 5 === 0) {
            array.push("oh")

        }else {
            array.push(i)

        }
    }

    return array

}

console.log(checkYuGiOh)