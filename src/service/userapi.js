import axios from 'axios';

export async function registerUser(data) {
  console.log('my data', data);
  try {
    const response = axios.post('http://localhost:3000/register', data);
    return response;
  } catch (e) {
    console.log(e);
  }
}
