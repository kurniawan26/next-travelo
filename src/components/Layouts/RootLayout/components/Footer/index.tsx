import Image from 'next/image'
import React from 'react'

import traveloLogo from '@/public/images/travelo-logo-footer.png'
import SubFooter from './SubFooter'

function Footer() {
  return (
    <footer className="shadow-lg">
      <div className="max-w-screen-lg mx-auto">

        <div className="flex bg-white p-16">
          <figure>
            <Image src={traveloLogo} alt='Travelo logo' height='98' width='136' />
          </figure>


          <div className="flex flex-1 justify-between ml-[106px]">
            <SubFooter title="Info"
              content={[
                {
                  label: 'Tentang kami',
                  href: '/',
                },
                {
                  label: 'Testimonial',
                  href: '/',
                },
                {
                  label: 'Kontak',
                  href: '/',
                },
              ]} />

            <SubFooter title="Perusahaan"
              content={[
                {
                  label: 'Syarat & Ketentuan',
                  href: '/',
                },
                {
                  label: 'Kebijakan privasi',
                  href: '/',
                },
                {
                  label: 'Blog',
                  href: '/',
                },
                {
                  label: 'Bantuan pelayanan',
                  href: '/',
                },
              ]}
            />

            <SubFooter title="Kontak"
              content={[
                'Jl. Dago No. 1A',
                'Bandung, Jawa Barat',
                'Indonesia',
                '(022)8080808',
                'contact@email.com',
              ]} />


          </div>

        </div>
      </div>

      <div className="bg-blue-100 p-3">
        <p className='text-heading-5 text-white font-bold text-center font-sans'>
          Copyright Travelo 2024. All Right Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer