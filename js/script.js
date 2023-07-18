const apiKey = 'c9a6fbd89855bef49e056fda8ccd1462';
const apiUrl = '';

async function checkWeather ()  {
    const reponse = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await Response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data;
}

checkWeather();
