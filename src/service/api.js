import axios from 'axios';

export async function getUsers() {
  try {
    const response = await axios.get('http://localhost:3001/api/register');
    return response.data;
    console.log(response);
  } catch (error) {
    return error;
    console.error(error);
  }
}

export async function registerUser(data) {
  console.log('my data', data);
  try {
    const response = axios.post(
      'https://us-central1-school-ef9c0.cloudfunctions.net/addUser',
      data
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}
