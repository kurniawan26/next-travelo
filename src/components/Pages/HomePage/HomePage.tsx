'use client'

import InfoCounter from "@/components/Shared/InfoCounter";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  return (
    <section className="bg-hero-header mt-[85px] bg-right-top bg-no-repeat h-[764px]">
      <div className='max-w-screen-xl mx-auto'>
        <div className="flex flex-col pt-[112px] pb-[58px]">
          <div className="flex flex-col mb-[174px]">

            <h1 className="text-heading-2 font-bold font-label text-gray-100 w-[500px] mb-8" >
              Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
            </h1>

            <p className="text-heading-3 font-sans text-gray-70 w-[526px] mb-7">
              Jelajahi dunia yang indah dengan satu sentuhan dengan pesan tiket
              di Travel kamu akan dapatkan pelayanan terbaik untuk wisata
              liburanmu kemana saja dan kapan saja
            </p>

          </div>

          <div className="flex gap-40 mx-auto">
            <InfoCounter count={30} label="Negara" />
            <InfoCounter count={1500} label="Penginapan" />
            <InfoCounter count={100} label="Wisata" />
            <InfoCounter count={50000} label="Pelanggan" />
          </div>


        </div>
      </div>
    </section>
  );
}
