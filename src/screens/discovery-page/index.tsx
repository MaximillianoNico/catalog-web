import DiscoveryLayout from '../../components/search-layout';
import Sidebar from '../../components/sidebar'

import SearchHeader from './partials/search-header';
import Products from './partials/products';

import "./discovery.styles.scss";
import { FC } from 'react';

export interface ICategory {
  id: string
  label: string
}

export interface IProduct {
  name: string
  price: string
  currency: string
  productImageUrl: string
  description: string
  slug: string
  id: string
  category: string
}

interface IDiscoveryProps {
  category: ICategory[],
  products: IProduct[]
}

const Component:FC<IDiscoveryProps> = (props) => {
  return (
    <main>
      <SearchHeader />
      <DiscoveryLayout>
        <Sidebar category={props?.category} />
        <Products products={props?.products} />
      </DiscoveryLayout>
    </main>
  )
}

export default Component;
