const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon');
const stateTxt = document.querySelector('.state');

const updateCity = async (city) =>{

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    const stateImg = await getStateImage(cityDets.AdministrativeArea.LocalizedName.toLowerCase());
    
    return {cityDets,weather,stateImg} //object short hand notation(we do use in that case when object name and the vaule name is same ) it does works same as object
}

const updatingUI = (data) =>{

    /*const cityDets = data.cityDets;
    const weather = data.weather;*/

    // destructuring object 
    const {cityDets,weather,stateImg} = data ;

    console.log(cityDets);
    console.log(weather);
    console.log(stateImg);
    stateTxt.innerHTML=`<h5>${cityDets.AdministrativeArea.LocalizedName}</h5>`
    details.innerHTML=`
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>` ;

    const result = stateImg.results[0].urls.regular;
    //const result = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    /*let timeSrc = null ;
    if(weather.IsDayTime){
        timeSrc = 'img/day.svg';
    }else{
        timeSrc= 'img/night.svg';
    }*/
    time.setAttribute('src',result);

    icon.innerHTML= `<img src='img/icons/${weather.WeatherIcon}.svg'>`

    card.classList.remove('d-none');
};


cityForm.addEventListener('submit', e =>{

    // prevent the default action 
    e.preventDefault();

    // getting the ctiy entered by user
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // upadting the city info 
    updateCity(city)
        .then(data => updatingUI(data))
        .catch(err => console.log(err));
    
})


