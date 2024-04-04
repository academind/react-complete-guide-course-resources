export async function fetchAvailablePlaces() {
  const response = await fetch('http://localhost:3000/places');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch places.');
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-placesaaa', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ places: places }),
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || 'Failed to update user places.');
  }

  return resData.message;
}