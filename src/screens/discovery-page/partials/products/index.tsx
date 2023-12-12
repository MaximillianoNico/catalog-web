"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IProduct } from '../..';
import { FC } from 'react';

interface IProductList {
  products: IProduct[]
}

const Component:FC<IProductList> = (props) => {
  const router = useRouter();

  const handleRedirectToDetail = (slug: string) => {
    if (slug) router.push(`/${slug}`)
  };

  return (
    <div>
      <div className='products'>
        {props?.products?.map(
          ({ name, category, price, currency, profileImageUrl, slug }, key) => (
            <div key={key} className='product-item' onClick={() => handleRedirectToDetail(slug)}>
              <div className='img-product'>
                <Image alt="" layout='fill' src={profileImageUrl} />
              </div>
              <div className='product-item__description'>
                <div className='product-item__description-name'>{name}</div>
                <div className='product-item__description-category'>{category}</div>
                <div className='product-item__description-price'>
                  <span>{currency}</span> {" "}
                  <span>{price}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Component;
