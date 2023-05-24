import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

async function getApps() {
    const res = await fetch(`${process.env.baseURL}/apps`)
    return res.json()
}


export default async function Apps() {
    const games = await getApps()
  return (
    <section>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4 opacity-20" />
      <h1 className="mb-3 font-semibold text-xl">● Apps</h1>
      <div className="grid grid-cols-10 max-md:grid-cols-3 md:p-3 gap-3 px-2 max-md:px-[5px] my-5">
        {games.map((item, index) => (
          <Cards data={item} key={item.slug} />
        ))}
      </div>
    </section>
  )
}


function Cards({ data }) {
    const { slug, title, img } = data;
    return (
      <>
        <div className="w-full rounded-lg shadow-xl shadow-gray-300 lg:max-w-sm">
          <Link href={`/apps/${slug}`}>
            <Image
              className="rounded-lg"
              src={img}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
              alt={title}
            />
          </Link>
          <div className="md:p-3 max-md:py-2">
            <Link href={`/apps/${slug}`}>
              <h4 className="text-lg text-center font-medium tracking-tight text-slate-800">
                {title}
              </h4>
            </Link>
          </div>
        </div>
      </>
    );
  }