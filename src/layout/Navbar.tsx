import React from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import DarkModeSwitch from './DarkModeSwitch'

type Props = {
  siteTitle: string
  location: string
}

const Navbar = ({ siteTitle, location }: Props) => {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-20 space-x-4 bg-ice px-3 text-gray-800 dark:bg-navy dark:text-white md:py-0 md:px-3"
    >
      {({ open }) => {
        return (
          <div className="flex items-center justify-end gap-x-2 h-14">
            <Link to="/" className="font-semibold flex items-center">
              <img
                alt={`badge`}
                src={'/images/icon.png'}
                className="z-20 inline-flex h-8 w-8 hover:opacity-75 transition rounded-full"
              />
            </Link>
            <DarkModeSwitch />
          </div>
        )
      }}
    </Disclosure>
  )
}

export default Navbar
