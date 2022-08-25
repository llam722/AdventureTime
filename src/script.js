async function fetchData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

  const record = await res.json();
  console.log(record);
  document.getElementById("pokemon").innerHTML = record.name;
  document.getElementById("weight").innerHTML = record.weight;
  document.getElementById("hp").innerHTML = Math.floor(
    Math.random() * (1200 - 500)
  );
  document.getElementById("lvl").innerHTML = Math.floor(
    document.getElementById("hp").innerHTML * 0.2
  );
}
fetchData();
