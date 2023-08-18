export async function fetchCars() {
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
  const headers = {
    "X-RapidAPI-Key": "4a41f8347fmsh6eaa9c002ea0592p1504b4jsncd4bb7b74799",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(url, { headers });
  const result = response.json();

  return result;
}
