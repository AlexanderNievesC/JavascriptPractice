function comp(array1, array2) {
    if (array1 === null || array2 === null) {
        return false;
    }

    let result = []
    let a1_squared = []

    array1.map(element1 => a1_squared.push(element1 ** 2))

    for (let i = 0; i < a1_squared.length; i++) {
        if (array2.includes(a1_squared[i])) {
            result.push(a1_squared[i])
        }
    }

    return (result.sort().toString() === array2.sort().toString()) ? true : false
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))