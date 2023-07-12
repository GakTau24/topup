import Carousel from "@/components/Carousel"
import Trending from "@/components/Trending"
import Mobile from "@/components/Mobile"
import Computer from "@/components/Computer"
import Apps from "@/components/Apps"

export const metadata = {
  title: `Topup Games - ${process.env.siteName}`,
  description: 'Top-up game online dengan harga murah dan proses cepat. Dapatkan bonus menarik saat membeli game online di Reyvin Store.',
  keywords: [
    'top-up game online',
    'beli diamond murah',
    'topup mobile legends',
    'topup pubg mobile',
    'topup free fire',
    'topup valorant',
    'topup game termurah',
    'game voucher',
    'game online',
  ],
  author: ['unipin', 'codashop', 'dunia games', 'reyvin store'],
  openGraph: {
    images: [
      {
        url: `/assets/Logo.png`,
        alt: 'Logo Reyvin Store',
      },
    ],
  },
};



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
