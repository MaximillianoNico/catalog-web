import ProductDetails from '../../src/screens/product-details'
import { GetProductDetail } from '@/components/src/services/product';

interface IProps {
  params: { slug: string }
}

export const generateMetadata = async ({ params }: IProps) => {
  const getProductDetail = async (slug: string) => {
    const [err, response] = await GetProductDetail(slug);

    if (err) return {
      title: ""
    };

    return {
      title: response?.[0]?.name,
      description: response?.[0]?.description,
      keyword: [response?.[0]?.category],
      applicationName: 'Catalog Web Page',
      openGraph: {
        images: [response?.[0]?.productImageUrl],
      },
    }
  }

  const metadata = await getProductDetail(params?.slug)

  return metadata
}

const Page = async ({ params }: IProps) => {
  const [_, product] = await GetProductDetail(params?.slug);

  return (
  <>
    <ProductDetails {...product?.[0]} />
  </>
)}

export default Page;