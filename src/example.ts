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

export {}
