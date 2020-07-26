const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
cities.push({ city: "Sailor Moon", state: "Planet Earth", population: "7,794,798,739"})

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function findMatches(query, cities) {
  return cities.filter(location => {
    const regex = new RegExp(query, 'gi');
    return location.city.match(regex) || location.state.match(regex);
  });
}

function displayMatches() {
  const matchArr = findMatches(this.value, cities);
  const htmlText = matchArr.map(location => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = location.city.replace(regex, `<span class="hl-search">${this.value}</span>`);
    const stateName = location.state.replace(regex, `<span class="hl-search">${this.value}</span>`);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(location.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = htmlText;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);