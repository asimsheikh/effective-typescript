interface State {
  name: string;
  capital: string;
}
const states = [
  { name: 'Alabama', capitol: 'Montgomery' },
  { name: 'Alaska', capitol: 'Juneau' },
  { name: 'Arizona', capitol: 'Phoneix' }
];

for (const state of states) {
  console.log(state.capital);
}

export {};
