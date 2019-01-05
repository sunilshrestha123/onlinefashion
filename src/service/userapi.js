import axios from 'axios';

export async function registerUser(data) {
  console.log('my data', data);
  try {
    const response = axios.post('http://localhost:3002/api/register', data);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function register() {
  try {
    const response = await axios.get('http://localhost:3002/api/register');
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
export async function AddCategory(data) {
  console.log('my data', data);

  try {
    const response = await axios.post(
      'http://localhost:3002/api/category',
      data
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}
export async function GetCategory() {
  try {
    const response = await axios.get('http://localhost:3002/api/category');
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
