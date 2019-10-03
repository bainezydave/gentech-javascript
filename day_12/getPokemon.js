
let util = {};

util.getPokemon = async () =>
{
    const url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
};
