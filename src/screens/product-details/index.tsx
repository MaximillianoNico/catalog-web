"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CaretLeft } from "@phosphor-icons/react";
import { MOCK_PRODUCT } from "../discovery-page/constant";

import './product-details.styles.scss';
import { FC } from "react";

interface IProductDetail {
  name: string
  description: string
  price: string
  currency: string
  profileImageUrl: string
}

const Component:FC<IProductDetail> = (props) => {
  const router = useRouter();

  const onBackPage = () => router.back();

  return (
    <div className="product-detail">
      <button className="nav-back" onClick={onBackPage}>
        <CaretLeft size={24} color="#313030" />
      </button>
      <div className="layout-detail">
        <div className="image-product">
          <Image alt="" src={props?.profileImageUrl} layout="fill" />
        </div>
        <div className="product-description">
          <h1 className="product-description__name">{props?.name}</h1>
          <h3 className="product-description__price">{props?.currency} {props?.price}</h3>
          <p className="product-description__description">
            {props?.description}
          </p>

          <button className="button-checkout">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Component;
