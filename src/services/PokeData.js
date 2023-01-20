export async function fetchInitPokeData() {
  const res = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/');
  const data = await res.json();
  return data.results;
}

export async function fetchTypeList() {
  const res = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await res.json();
  return data;
}

export async function fetchTypedPokeData(type) {
  const res = await fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?type=${type}`);
  const data = await res.json();
  return data.results;
}
