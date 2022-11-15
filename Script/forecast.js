class forecast {
    constructor() {
        this.key= '9tT10coDMiwM4qrlGbTUUrdWcFS9OK5f';
        this.clientID= '53pr5NfwyLwM82_2uhyUC4tC8BjgH4yTO-7fkIoEQ3w';
        this.weatherURl= 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL= 'https://dataservice.accuweather.com/locations/v1/cities/search';
        this.setImageURL='https://api.unsplash.com/search/photos/';
    }

    async getCity(city){

        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityURL + query);
        const data = await response.json();
        return (data[0]);
    }

    async getweather(id){

        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.weatherURl + query);
        const data = await response.json();
        return (data[0]);
    }

    async getStateImage(state){
        const query = `?query=${state}&client_id=${this.clientID}`;

        const response = await fetch(this.setImageURL+query)
        const data = await response.json();
        return (data);
    }

}