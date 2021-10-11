// implemente aqui as funções de teste
function reverseStringTest1() {
    let result = reverseString("Cientificamente");
    let expected = "etnemacifitneiC"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
reverseStringTest1()

const reverseStringTest2 = () => {
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

reverseStringTest2()

function reverseString(cadena) {
    let contraria = cadena.split("");
    contraria.reverse();
    return contraria.join("");
}

/*********************************************************************************
 * 
*********************************************************************************/

function reverseSentenceTest1() {
    let result = reverseSentence("Corrida de Patins");
    let expected = "Patins de Corrida"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
reverseSentenceTest1()

const reverseSentenceTest2 = () => {
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

reverseSentenceTest2()

function reverseSentence(proverbio) {
    let dicho = proverbio.split(" ");
    dicho.reverse();
    return dicho.join(" ");
}