function mean(arr) {
    if(arr[0] === '') return NaN
    let result=0
    for(let num of arr) {
        if(isNaN(Number(num))) return num
        result += Number(num)
    }
    
    return result / arr.length;
}

function median(arr) {
    if(arr[0] === '') return NaN
    
    let result = arr[Math.floor(arr.length / 2) ]
    
    if(isNaN(Number(result))){
        return result
    }else{
        return Number(result)
    }
    
}

function mode(arr) {
    if(arr[0] === '') return NaN
    let result = {}
    let el = checkForString(arr)
    if(typeof el === 'string') return el
    for(let n of arr){
        if(result[n] === undefined){
            result[n] = 1
        }else {
            result[n] += 1
        }
    }
    
    return Number(highest(result))
}

function highest(obj){
    let result = 0
    for( let x of Object.keys(obj)){
        if( obj[x] > result){
            result = x
        }
    }
    return result
}

function checkForString(arr){
    for(let el of arr){
        if (isNaN(Number(el))){
            return el
        }
    }
}

module.exports = {mean, median, mode}