const form = document.querySelector('.change-location');
const Obj = new forecast();
const stateName = document.querySelector('.state');
const stateImg = document.querySelector('.time');
const icons = document.querySelector('.icon');
const formDets = document.querySelector('.details')


const getData = async (city)=>{
    const cityDets = await Obj.getCity(city);
    const weatherDets = await Obj.getweather(cityDets.Key);
    const getImgDets = await Obj.getStateImage(cityDets.AdministrativeArea.LocalizedName.toLowerCase());

    console.log(cityDets);
    return{cityDets,weatherDets,getImgDets};

}

const UpdateUI = (data) =>{
    const {cityDets,weatherDets,getImgDets} = data ;
    console.log(cityDets);
    console.log(weatherDets);
    console.log(getImgDets);

    stateName.innerHTML = `<h5>${cityDets.AdministrativeArea.EnglishName}</h5>`;
    stateImg.setAttribute('src',getImgDets.results[0].urls.regular);

    icons.innerHTML= `<img src='img/icons/${weatherDets.WeatherIcon}.svg'>`;

    formDets.innerHTML=`
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weatherDets.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weatherDets.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>` ;
}

if(localStorage.getItem('City')!=null)
{
    getData(localStorage.getItem('City'))
        .then(data => {
            UpdateUI(data)})
        .catch(err => console.log(err));
}

form.addEventListener('submit',e =>{
    e.preventDefault();

    const City = form.city.value.trim();
    localStorage.setItem('City',City);

    getData(City)
        .then(data => {
            UpdateUI(data)})
        .catch(err => console.log(err))
    
})








