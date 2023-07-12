import Carousel from "@/components/Carousel"
import Trending from "@/components/Trending"
import Mobile from "@/components/Mobile"
import Computer from "@/components/Computer"
import Apps from "@/components/Apps"

export const metadata = {
  title: `Topup Games - ${process.env.siteName}`,
  description: 'top-up game, harga murah, proses cepat, bonus menarik, beli game online',
  keywords: 
  ['top-up game',
   'reyvin store',
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


export default function Home() {
  return (
    <>
    <div className="p-2 shadow-xl">
    <Carousel />
    </div>
    <div className="p-5">
    <Trending />
    <Mobile />
    <Computer />
    <Apps />
    </div>
    </>
  )
}
