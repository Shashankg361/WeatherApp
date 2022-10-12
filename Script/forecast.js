const key ='9tT10coDMiwM4qrlGbTUUrdWcFS9OK5f';
const clientId = '53pr5NfwyLwM82_2uhyUC4tC8BjgH4yTO-7fkIoEQ3w';

const getWeather = async (id) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const  response = await fetch(base + query);
    const data = await response.json();
    return(data[0]);

}


const getCity = async (city)=>{
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return (data[0]);

}

const getStateImage = async (state)=>{
    const base = 'https://api.unsplash.com/search/photos/';
    const query = `?query=${state}&client_id=${clientId}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return (data);
}



