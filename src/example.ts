interface State {
    name: string
    capital: string
}
const states: State[] = [
    { name: "Alabama", capital: "Montgomery" },
    { name: "Alaska", capital: "Juneau" },
    { name: "Arizona", capital: "Phoneix" },
]

for (const state of states) {
    console.log(state.capital)
}

const a = null + 7
const b = [] + 12
alert("Hello", "Typescript")

function add(a, b) {
    return a + b
}

add(null, 10)

function add1(a: number, b: number) {
    return a + b
}

add1(null, 10)

export {}
