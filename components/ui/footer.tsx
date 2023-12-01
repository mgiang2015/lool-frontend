import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                    <img src='/images/lool_transparent.png' alt='lool_logo' width={65}/>
                </Link>
              </div>
              {/*<div className="text-gray-400">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
