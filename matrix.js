let element = document.createElement('div');
element.id = "root";
element.style.width = "80px";
element.style.height = "280px";
element.style.display = "block";
element.style.backgroundColor = "black";
element.style.color = 'white'
document.body.appendChild(element);

let num = document.createElement('input');
num.id = 'num';
num.setAttribute('type', 'number');
num.setAttribute('min', '0');
num.setAttribute('max', '9');
document.body.appendChild(num);
let add = document.createElement('BUTTON');
add.innerHTML = 'paint';
document.body.appendChild(add);
let inp = document.getElementById('num');
add.onclick = () => {
    document.getElementById('root').innerHTML = matrix(Number(inp.value));
}

inp.addEventListener('keypress', function (e) {
    e.preventDefault();
    const value = e.target.value + e.key;
    if (value >= 0 && value < 10 && value.length === 1) {
        num.value = value;
    }

});

function matrix(arg) {
    switch (arg) {
        case 1:
            return paintOne(arg);
        case 2:
            return paintTwo(arg);
        case 3:
            return paintThree(arg);
        case 4:
            return paintFour(arg);
        case 5:
            return paintFive(arg);
        case 6:
            return paintSix(arg);
        case 7:
            return paintSeven(arg);
        case 8:
            return paintEight(arg);
        case 9:
            return paintNine(arg);
        case 0:
            return paintZero(arg);
    }
}

// document.getElementById('root').innerHTML = matrix(0);


function paintOne(n) {
    let result = [];
    let a = 5;
    for (let y = 0; y < 16; y++) {
        result.push([]);
        for (let x = 0; x < 10; x++) {
            if (y === 0 || y === 15 || x === 0 || x === 9) {
                result[y][x] = "*";
            } else if (x === 7 || x === 8 || y === 2 && x === 6) {
                result[y][x] = n;
            } else if (y > 2 && y < 8 && x === a) {
                result[y][x] = n;
            } else if (y > 2 && y < 8 && x === a + 1) {
                result[y][x] = n;
                a--;
            } else {
                result[y][x] = '&nbsp&nbsp';
            }
        }
        result[y] = result[y].join("");
    }
    result = result.join('\n')
    return result;
}


function paintTwo(n) {
    let result = [];
    for (let y = 0; y < 16; y++) {
        result.push([]);
        for (let x = 0; x < 10; x++) {
            if (y === 0 || y === 15 || x === 0 || x === 9) {
                result[y][x] = "*";
            } else if (y === 1 || y === 7 || y === 14 || x === 8 && y < 7 || x === 1 && y > 7) {
                result[y][x] = n;
            } else {
                result[y][x] = '&nbsp&nbsp';
            }
        }
        result[y] = result[y].join("");
    }
    result = result.join('\n')
    return result;
}


function paintThree(n) {
    let result = [];
    for (let y = 0; y < 16; y++) {
        result.push([]);
        for (let x = 0; x < 10; x++) {
            if (y === 0 || y === 15 || x === 0 || x === 9) {
                result[y][x] = "*";
            } else if (y === 1 || y === 7 || y === 14 || x === 8) {
                result[y][x] = n;
            } else {
                result[y][x] = '&nbsp&nbsp';
            }
        }
        result[y] = result[y].join("");
    }
    result = result.join('\n')
    return result;
}


function paintFour(n) {
    let result = [];
    for (let y = 0; y < 16; y++) {
        result.push([]);
        for (let x = 0; x < 10; x++) {
            if (y === 0 || y === 15 || x === 0 || x === 9) {
                result[y][x] = "*";
            } else if (y < 8 && x === 1 || y === 7 || y > 3 && x === 8) {
                result[y][x] = n;
            } else {
                result[y][x] = '&nbsp&nbsp';
            }
        }
        result[y] = result[y].join("");
    }
    result = result.join('\n')
    return result;
}


function paintFive(n) {
    let result = [];
    for (let y = 0; y < 16; y++) {
        result.push([]);
        for (let x = 0; x < 10; x++) {
            if (y === 0 || y === 15 || x === 0 || x === 9) {
                result[y][x] = "*";
            } else if (y === 1 || y === 7 || y === 14 || x === 1 && y < 7 || x === 8 && y > 7) {
                result[y][x] = n;
            } else {
                result[y][x] = '&nbsp&nbsp';
            }
        }
        result[y] = result[y].join("");
    }
    result = result.join('\n')
    return result;
}


function paintSix(n) {
    let result = [];
    for (let y = 0; y < 16; y++) {
        result.push([]);
        for (let x = 0; x < 10; x++) {
            if (y === 0 || y === 15 || x === 0 || x === 9) {
                result[y][x] = "*";
            } else if (y === 1 || y === 7 || y === 14 || x === 1 || x === 8 && y > 7) {
                result[y][x] = n;
            } else {
                result[y][x] = '&nbsp&nbsp';
            }
        }
        result[y] = result[y].join("");
    }
    result = result.join('\n')
    return result;
}


function paintSeven(n) {
    let result = [];
    let a = 10;
    for (let y = 0; y < 16; y++) {
        result.push([]);
        for (let x = 0; x < 10; x++) {
            if (y === 0 || y === 15 || x === 0 || x === 9) {
                result[y][x] = "*";
            } else if (y === 1 || x === a) {
                result[y][x] = n;
                // a--;
            } else {
                result[y][x] = '&nbsp&nbsp';
            }
        }
        a !== 2 ? a-- : a = 2;
        result[y] = result[y].join("");
    }
    result = result.join('\n')
    return result;
}


function paintEight(n) {
    let result = [];
    for (let y = 0; y < 16; y++) {
        result.push([]);
        for (let x = 0; x < 10; x++) {
            if (y === 0 || y === 15 || x === 0 || x === 9) {
                result[y][x] = "*";
            } else if (y === 1 || y === 7 || y === 14 || x === 1 || x === 8) {
                result[y][x] = n;
            } else {
                result[y][x] = '&nbsp&nbsp';
            }
        }
        result[y] = result[y].join("");
    }
    result = result.join('\n')
    return result;
}


function paintNine(n) {
    let result = [];
    for (let y = 0; y < 16; y++) {
        result.push([]);
        for (let x = 0; x < 10; x++) {
            if (y === 0 || y === 15 || x === 0 || x === 9) {
                result[y][x] = "*";
            } else if (y === 1 || y === 7 || y === 14 || x === 1 && y < 7 || x === 8) {
                result[y][x] = n;
            } else {
                result[y][x] = '&nbsp&nbsp';
            }
        }
        result[y] = result[y].join("");
    }
    result = result.join('\n')
    return result;
}


function paintZero(n) {
    let result = [];
    for (let y = 0; y < 16; y++) {
        result.push([]);
        for (let x = 0; x < 10; x++) {
            if (y === 0 || y === 15 || x === 0 || x === 9) {
                result[y][x] = "*";
            } else if (y === 1 || y === 14 || x === 1 || x === 8) {
                result[y][x] = n;
            } else {
                result[y][x] = '&nbsp&nbsp';
            }
        }
        result[y] = result[y].join("");
    }
    result = result.join('\n')
    return result;
}