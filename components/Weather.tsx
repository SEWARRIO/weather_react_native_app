import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      console.log("hit")
      const response = await axios.get(
        `https://dc19-46-185-162-238.ngrok-free.app/weather?city=${city}`
      );
      console.log('Weather API response:', response.data);

      // Check if the required properties are present in the response
      if (
        !response.data.weatherData ||
        !response.data.weatherData.name ||
        !response.data.weatherData.sys
      ) {
        throw new Error('Invalid API response');
      }

      // Set weather data when successful
      setWeatherData({
        ...response.data.weatherData,
        main: {
          ...response.data.weatherData.main,
          temp: response.data.weatherData.main?.temp,
        },
      });
      setError(null);

      // Use AsyncStorage to store the weather data
      await AsyncStorage.setItem('weatherData', JSON.stringify(weatherData));
    } catch (error) {
      console.error('Weather API error:', error);
      setWeatherData(null);
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter City"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Search" onPress={handleSearch} disabled={loading} />

      {loading && <Text>Loading...</Text>}
      {error && <Text style={{ fontWeight: 'bold', color: 'red' }}>{error}</Text>}

      {weatherData && weatherData.name && (
        <View>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            }}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ fontWeight: 'bold' }}>
            {weatherData.name}, {weatherData.sys?.country}
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
            {weatherData.weather[0]?.description}
          </Text>
          <Text style={{ fontWeight: 'bold' }}>{weatherData.wind?.speed} m/s</Text>
          <Text style={{ fontWeight: 'bold' }}>
            {Math.round(weatherData.main?.temp - 273)}°C
          </Text>
        </View>
      )}
    </View>
  );
};

export default Weather;

