// implemente aqui as funções de teste
function testReverseString1() {
    let result = reverseString("Cientificamente");
    let expected = "etnemacifitneiC"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseString1()

const testReverseString2 = () => {
    const test = [
        {
            "input": "",
            "expected": ""
        },
        {
            "input": "arroz e Zorra",
            "expected": "arroZ e zorra"
        },
        {
            "input": "Guayaquil de mis amores",
            "expected": "seroma sim ed liuqayauG"
        },
        {
            "input": "Estou formando o amanhã",
            "expected": "ãhnama o odnamrof uotsE"
        },
        {
            "input": "Sol",
            "expected": "loS"
        }
    ]

    test.forEach((str) => console.assert(reverseString(str.input) === str.expected,
    {
        "Função": "reverseString",
        "espectativa": str.expected,
        "recebido": reverseString(str.input),
        "testado": str.input
    }))
}

testReverseString2()

function reverseString(cadena) {
    let contraria = cadena.split("");
    contraria.reverse();
    return contraria.join("");
}

/*********************************************************************************
 * 
*********************************************************************************/

function testReverseSentence1() {
    let result = reverseSentence("Corrida de Patins");
    let expected = "Patins de Corrida"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseSentence1()

const testReverseSentence2 = () => {
    const test = [
        {
            "input": "Praia",
            "expected": "Praia"
        },
        {
            "input": "Teatro al aire libre",
            "expected": "libre aire al Teatro"
        },
        {
            "input": "ganado escoces de altura",
            "expected": "altura de escoces ganado"
        },
        {
            "input": "Mas sabe el diablo, por viejo, que por diablo",
            "expected": "diablo por que viejo, por diablo, el sabe Mas"
        },
        {
            "input": "Es mejor perder un segundo en la vida, que la vida en un segundo",
            "expected": "segundo un en vida la que vida, la en segundo un perder mejor Es"
        }
    ]

    test.forEach((frase) => console.assert(reverseSentence(frase.input) === frase.expected,
    {
        "Função": "reverseSentence",
        "espectativa": frase.expected,
        "recebido": reverseSentence(frase.input),
        "testado": frase.input
    }))
}

testReverseSentence2()

function reverseSentence(proverbio) {
    let dicho = proverbio.split(" ");
    dicho.reverse();
    return dicho.join(" ");
}

/*********************************************************************************
 * 
*********************************************************************************/

function testMinimumValue1() {
    let result = minimumValue([-3, 2]);
    let expected = -3;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue1()

const testMinimumValue2 = () => {
    const test = [
        {
            "input": [],
            "expected": null
        },
        {
            "input": [0],
            "expected": 0
        },
        {
            "input": [-7, -6, -8, -3, -5],
            "expected": -8
        },
        {
            "input": [-9, -19, -10, -2, 1, 16, 7, 17, -5, -16],
            "expected": -19
        },
        {
            "input": [5, 3, 16, 4, 14],
            "expected": 3
        }
    ]

    test.forEach((vector) => console.assert(minimumValue(vector.input) === vector.expected,
    {
        "Função": "minimumValue",
        "espectativa": vector.expected,
        "recebido": minimumValue(vector.input),
        "testado": vector.input
    }))
}

testMinimumValue2()

function minimumValue(array) {
    let minimo = Infinity;
    if (array.length === 0) {
        minimo = null
    } else {
        array.forEach(item => {
            if (item < minimo) {
                minimo = item
            }
        })
    }
    return minimo;
}

/*********************************************************************************
 * 
*********************************************************************************/

function testMaximumValue1() {
    let result = maximumValue([-3, 2]);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue1()

const testMaximumValue2 = () => {
    const test = [
        {
            "input": [],
            "expected": null
        },
        {
            "input": [0],
            "expected": 0
        },
        {
            "input": [-7, -6, -8, -3, -5],
            "expected": -3
        },
        {
            "input": [-9, -19, -10, -2, 1, 16, 7, 17, -5, -16],
            "expected": 17
        },
        {
            "input": [5, 3, 16, 4, 14],
            "expected": 16
        }
    ]

    test.forEach((vector) => console.assert(maximumValue(vector.input) === vector.expected,
    {
        "Função": "maximumValue",
        "espectativa": vector.expected,
        "recebido": maximumValue(vector.input),
        "testado": vector.input
    }))
}

testMaximumValue1()

function maximumValue(array) {
    let maximo = -Infinity;
    if (array.length === 0) {
        maximo = null
    } else {
        array.forEach(item => {
            if (item > maximo) {
                maximo = item
            }
        })
    }
    return maximo;
}

/*********************************************************************************
 * 
*********************************************************************************/

function testCalculateReminder1() {
    let result = calculateReminder(-34, 9);
    let expected = -7;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateReminder1()

const testCalculateReminder2 = () => {
    const test = [
        {
            "dividendo": -65,
            "divisor": 0,
            "expected": undefined
        },
        {
            "dividendo": 0,
            "divisor": 31,
            "expected": 0
        },
        {
            "dividendo": 74,
            "divisor": 74,
            "expected": 0
        },
        {
            "dividendo": -52,
            "divisor": 27,
            "expected": -25
        },
        {
            "dividendo": 51,
            "divisor": -18,
            "expected": 15
        },
        {
            "dividendo": -73,
            "divisor": -19,
            "expected": -16
        }
    ]

    test.forEach((factor) => console.assert(calculateReminder(factor.dividendo, factor.divisor) === factor.expected,
    {
        "Função": "calculateReminder",
        "espectativa": factor.expected,
        "recebido": calculateReminder(factor.dividendo, factor.divisor),
        "testado": (factor.dividendo, factor.divisor)
    }))
}

testCalculateReminder2()

function calculateReminder(dividendo, divisor) {
    let resto = 0;
    if (divisor === 0) {
        resto = undefined
    } else if ((dividendo > 0 && divisor < 0) || (dividendo < 0 && divisor > 0)) {
        let quociente = Math.ceil(dividendo / divisor);
        resto = dividendo - divisor * quociente
    } else {
        let quociente = Math.floor(dividendo / divisor);
        resto = dividendo - divisor * quociente
    }
    return resto;
}

/*********************************************************************************
 * 
*********************************************************************************/

function testDistincValues1() {
    let result = distincValues("0 1 1 0 0 0 1 0 0 1 1 0 1 1 1 1 0 1 1 0 1 1 0 1");
    let expected = "0 1";
    console.assert(result === expected, `esperado: ${expected} obtido: ${result}`)
}
testDistincValues1()

const testDistincValues2 = () => {
    const test = [
        {
            "input": "",
            "expected": ""
        },
        {
            "input": "1",
            "expected": "1"
        },
        {
            "input": "1 2 1 2 2 0",
            "expected": "1 2 0"
        },
        {
            "input": "1 3 1 2 0 2 1 1 1 3",
            "expected": "1 3 2 0"
        },
        {
            "input": "3 2 1 3 1 2 3 3 4 1 4 2 0 0 2 0 3",
            "expected": "3 2 1 4 0"
        }
    ]

    test.forEach((item) => console.assert(distincValues(item.input) === item.expected,
    {
        "Função": "distincValues",
        "espectativa": item.expected,
        "recebido": distincValues(item.input),
        "testado": item.input
    }))
}

testDistincValues2()

function distincValues(str) {
    let distintos;
    let auxiliar = str.split(" ");
    if (str === "") {
        distintos = ""
    } else {
        distintos = [...new Set(auxiliar)];
        distintos = distintos.join(" ");
    }
    return distintos;
}

/*********************************************************************************
 * 
*********************************************************************************/

function testCountValues1() {
    let result = countValues("0 1 1 0 0 0 1 0 0 1 1 0 1 1 1 1 0 1 1 0 1 1 0 1");
    let expected = "0(10) 1(14)";
    console.assert(result === expected, `esperado: ${expected} obtido: ${result}`)
}
testCountValues1()

const testCountValues2 = () => {
    const test = [
        {
            "input": "",
            "expected": ""
        },
        {
            "input": "1",
            "expected": "1(1)"
        },
        {
            "input": "1 2 1 2 2 0",
            "expected": "0(1) 1(2) 2(3)"
        },
        {
            "input": "1 3 1 2 0 2 1 1 1 3",
            "expected": "0(1) 1(5) 2(2) 3(2)"
        },
        {
            "input": "3 2 1 3 1 2 3 3 4 1 4 2 8 0 2 0 3",
            "expected": "0(2) 1(3) 2(4) 3(5) 4(2) 8(1)"
        }
    ]

    test.forEach((item) => console.assert(countValues(item.input) === item.expected,
    {
        "Função": "countValues",
        "espectativa": item.expected,
        "recebido": countValues(item.input),
        "testado": item.input
    }))
}

testCountValues2()

function countValues(str) {
    let cuentaN = {};
    let frecuencia = "";
    if (str.length === 1) {
        frecuencia = str + "(1)"
    } else {
        for (let i = 0; i < str.length; i++) {
            let j = str[i];
            if (cuentaN[j] === undefined) {
                cuentaN[j] = 1;
            } else {
                cuentaN[j]++;
            }
        }
        for (let numero in cuentaN) {
            frecuencia += ` ${numero}(${cuentaN[numero]})`;
        }
        matriz = frecuencia.split(" ");
        matriz.pop();
        frecuencia = matriz.join(" ");
        frecuencia = frecuencia.trim();
    }
    return frecuencia;
}