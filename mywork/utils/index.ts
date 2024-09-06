export async function fetchCars()
{
  const headers = {
    'x-rapidapi-key': '8ab2b6fd15msh725c2b8a1842bf1p13d931jsn6f91c526ab8e',
    'X-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
    headers: headers,
  });
const result = await response.json();
return result ;
}

export const calculateCarRent = (combination_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = combination_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};