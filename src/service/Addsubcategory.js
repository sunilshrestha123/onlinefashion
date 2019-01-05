import axios from 'axios';

export async function Addsubcategory(subcategory) {
  console.log('my data', subcategory);
  try {
    const response = await axios.post(
      'http://localhost:3002/api/subcategory',
      subcategory
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}
