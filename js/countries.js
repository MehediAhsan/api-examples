const loadcountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displaycountry(data))
}
const displaycountry = countries => {
    const countriesContainer = document.getElementById('countries-container');
    for(const country of countries){
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <P>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</P>
            <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv);
    }
}

const loadCountryDetail = (code) => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <img src="${country.flags.png}" alt="">
    `
}

loadcountry();