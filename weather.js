class Weather {
    constructor(city, state) {
      this.apiKey = '5454a13ff4f331db5334e7da99a01a5d';
      this.city = city;
      this.state = state;
    }
  
    // Fetch weather from API
    async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&${this.state}&appid=${this.apiKey}`);
    
      const responseData = await response.json();
  
      return responseData;
    }
  
    // Change weather location
    changeLocation(city, state) {
      this.city = city;
      this.state = state;
    }
  }