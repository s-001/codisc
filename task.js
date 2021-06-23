//Առաջադրանք 1
function getError() {
    try {
        console.log("a");
        aaa
        console.log("b");
    } catch (e) {
        console.log(e.message);
        console.log(e.name);
        console.log(e.stack);
    }
}
getError();


// Առաջադրանք 2
function matrix(n = 1) {
    let result = [];
    let a = 5;
    for (let y = 0; y < 16; y++) {
        result.push([]);
        for (let x = 0; x < 10; x++) {
            if (y === 0 || y === 15 || x === 0 || x === 9) {
                result[y][x] = "*";
            } else if(x === 7 || x === 8 || y === 2 && x === 6) {
                result[y][x] = n;
            } else if(y > 2 && y < 8 && x === a) {
                result[y][x] = n;
            } else if(y > 2 && y < 8 && x === a+1) {
                result[y][x] = n;
                a--;
            } else {
                result[y][x] = " ";
            }
        }
        result[y] = result[y].join("");
    }
    result = result.join('\n')
    return result;
}

console.log(matrix())