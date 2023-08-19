export async function fetchCars() {
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
  const headers = {
    "X-RapidAPI-Key": "4a41f8347fmsh6eaa9c002ea0592p1504b4jsncd4bb7b74799",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(url, { headers });
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e + " <-- here error Issue");
  }
}
