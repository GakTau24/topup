import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';

export const metadata = {
  title: `Store -`,
  description: 'top-up game, harga murah, proses cepat, bonus menarik, beli game online',
  keywords: 
  ['top-up game',
    'topup mobile legends', 
    'topup pubg mobile', 
    'topup free fire', 
    'topup valorant',
    'unipin',
    'codashop',
    'dunia games',],
  author: ['unipin', 'codashop', 'dunia games', 'reyvin store'],
  ogImage: [`${process.env.baseURL}/assets/Logo.png`]
}

async function getDetailData(slug) {
  const detailData = await fetch(`${process.env.baseURL}/trending/${slug}`, { cache: 'no-store' })
  return detailData.json()
}

export default async function page({ params }) {
  const game = await getDetailData(params.slug)
  return (
    <div className="flex justify-center items-center py-3">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <Image
          className="rounded-t-lg"
          src={game.img}
          width="100"
          height="100"
          layout="responsive"
          objectFit="contain"
          alt={game.title}
        />
        <div className="p-3 text-center">
          <Link href={`https://wa.me/6285173125847`}>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{game.title}</h5>
          </Link>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4 opacity-20" />
          <h5 className="text-left font:bold text-lg text-gray-900 py-3">Price List:</h5>
          {game.price?.map((prices, index) => (
            <div key={index}>
              <p className="mb-3 font-normal text-left text-gray-900">{prices.amount}: {prices.prices}</p>
            </div>
          ))}
          <Link href={`https://wa.me/6285173125847`} className="inline-flex items-center px-4 py-3 text-sm font-medium text-center bg-lime-500 rounded-lg hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <BsWhatsapp /> <span className="px-[5px]">Pesan</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
