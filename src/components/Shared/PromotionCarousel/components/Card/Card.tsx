import { discontFormater, priceFormater } from '@/utils';
import dayjs from 'dayjs';
import Image from 'next/image'
import React from 'react'

interface CardPropsData {
  location: string;
  region: string;
  price: number;
  percentage?: number;
  description: string;
  time: number;
  isDiscount?: boolean;
}

function Card(props: CardPropsData) {
  const { location, region, price, percentage = 0, isDiscount, description, time } = props

  return (
    <article className="bg-white shadow-lg rounded-xl overflow-hidden w-[500px] h-[312px] flex">
      <figure className="relative w-[212px] h-full">
        <Image src='/images/home/borobudur.png'
          objectFit='cover'
          objectPosition='center'
          layout='fill'
          alt='Card Carousel Item' />
      </figure>

      <div className="flex flex-col justify-center flex-1 p-4">
        <p className="font-bold text-gray-100 text-heading-4 font-label">
          {location}
        </p>
        <p className="mb-4 text-heading4 text-gray-70">{region}</p>

        {
          isDiscount && <div className="flex gap-2">
            <p className="line-through text-heading-5 text-gray-70">
              {priceFormater(price)}
            </p>
            <p className="font-bold text-red-100 text-heading-5">{percentage}%</p>
          </div>
        }

        <p className="text-[16px] font-bold text-gray-100 mb-4">
          {priceFormater(percentage > 0 ? discontFormater(price, percentage) : price)}
        </p>

        <p className="mb-4 text-heading-5 text-gray-70">
          {description}
        </p>

        <p className="mb-4 text-heading-5 text-gray-70">
          Berangkat : {dayjs.unix(time).format('DD-MM-YYYY HH:mm')}
        </p>

        {/* NEXTNYA TAMBAHKAN KOMPONEN BUTTON DISINI */}
      </div>
    </article>
  )
}

export default Card