import DiscoveryPage from '@/src/screens/discovery-page'
import { GetCategory } from '@/src/services/category';
import { GetProducts } from '@/src/services/product';

const getMasterData = async (categories: string[]) => {
  const [err, response] = await GetProducts(categories);
  const [errCategory, category] = await GetCategory();

  if (err || errCategory) return {};

  return {
    products: response,
    category
  };
}

const Page = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string};
}) => {
  const categories = searchParams?.categories ? searchParams?.categories.split(',') : []
  const data = await getMasterData(categories);
  const products = data?.products ?? []
  const category = data?.category ?? []

  return (
    <DiscoveryPage products={products} category={category} />
  )
}

export default Page;