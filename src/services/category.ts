import Instance from './';

export const GetCategory = async () => {
  try {
    const response = await Instance.get('/product-list-mock/category');

    return [null, response.data];
  } catch (err) {
    return [err, null]
  }
}