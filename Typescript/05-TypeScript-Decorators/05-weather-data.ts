
//TODO: Solve the exercise

class MockWeatherDataService {
    private weatherData: string[] = [
        'Sunny 8° to 20°',
        'Partially Cloudy 7° to 19°',
        'Sunny 5° to 18°'
    ];

    addWeatherData(data: string){ this.weatherData.push(data); }
    getWeatherData() { return this.weatherData; }
}