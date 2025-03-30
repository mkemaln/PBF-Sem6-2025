import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
const image1 = {
  src: 'https://bubunan-buleleng.desa.id/assets/files/artikel/sedang_153810825420180928_081623.jpg',
  height: 500,
  width: 500,
};
const image2 = {
  src: 'https://cdn.antarafoto.com/cache/1200x799/2020/05/20/bansos-dari-dana-desa-ppvo-dom.jpg',
  height: 500,
  width: 500,
};

type EssayItemProps = {
  name: string; 
  url: string;
  slug: string;
  tag: string[];
  imageSrc: StaticImageData;
};

export const metadata: Metadata = {
  title: 'Esai',
  description: 'Halaman esai',
  openGraph: {
    title: 'Esai',
    description: 'Halaman esai',
  }
}

function EssayItem({ name, url, slug, tag, imageSrc }: EssayItemProps) {
  return (
      <li>
        <a href={url}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image className="w-full rounded-4xl p-4" src={imageSrc} alt={name}></Image>
            <div className="px-6">
              <div className="font-bold text-xl mb-2">
                {name}
              </div>
            </div>
            <div className="px-6">
              <p className="text-gray-300 py-1 text-sm mr-2 mb-2 overflow-clip">
                {slug}
              </p> 
            </div>
            <div className="px-6 pb-4">
                {tag.map((t, index) => (
                  <span key={index} className="py-1 text-xs text-teal-500 mr-2 mb-2">
                  {"#"+t}
                  </span>
                ))}
            </div>
          </div>
        </a>
      </li>
    );
}


export default function Esai() {
    return (
        <div className="mt-16 px-8">
          <div className="mt-16 px-8">
          <header>
            <h1 className="font-bold text-4xl text-zinc-800 dark:text-white">Esai</h1>
            <p className="text-base mt-6 text-zinc-600 dark:text-white">Berikut adalah beberapa esai yang saya tulis.</p>
          </header>
          <div className="mt-16">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-8">
                <EssayItem 
                  name="Bersih Desa: Tradisi dan Makna" 
                  slug="bersih-desa-tradisi-dan-makna" 
                  tag={["tradisi", "budaya", "bersih-desa"]} 
                  url="https://example.com/bersih-desa" 
                  imageSrc={image1}>
                </EssayItem>
                <EssayItem 
                  name="Bansos Desa: Harapan dan Tantangan" 
                  slug="bansos-desa-harapan-dan-tantangan" 
                  tag={["bansos", "desa", "sosial"]} 
                  url="https://example.com/bansos-desa" 
                  imageSrc={image2}>
                </EssayItem>
            </ul>
          </div>
        </div>
        </div>
      );
}