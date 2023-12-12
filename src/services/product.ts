import Instance from './';

export const GetProducts = async (categories?: string[]) => {
  try {
    const params = categories?.length ? { category: categories?.join(',') } : null
    const response = await Instance.get(
      '/product-list-mock/products',
      { params }
    );

    const data = response.data;

    return [null, data];
  } catch (err) {
    return [err, null]
  }
}

export const GetProductsByCategory = async (category: string) => {
  try {
    const payload = { category };
    const response = await Instance.get('/product-list-mock/products', { params: payload });

    return [null, response.data];
  } catch (err) {
    return [err, null]
  }
}

export const GetProductDetail = async (slug: string) => {
  try {
    const payload = { slug };
    const response = await Instance.get('/product-list-mock/products', { params: payload });

    return [null, response.data];
  } catch (err) {
    return [err, null]
  }
}