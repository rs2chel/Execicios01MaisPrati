// // Exercício 45

// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.


let arr = ['casa', 'cama', 'cadeira', 'cama', 'mesa', 'fogao', 'casa', 'panela', 'cama', 'televisao', 'casa', 'mesa', 'panela', 'cama', 'televisao']




function newObj(arr) {
    let obj = {};
    for (item of arr) {

        if (!obj[item]) {
            obj[item] = 1
        } else {
            obj[item] += 1
        }

    }
    console.log(obj)

}

newObj(arr)
