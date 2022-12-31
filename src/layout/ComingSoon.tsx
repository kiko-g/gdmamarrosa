import React from 'react'

type Props = {}

const ComingSoon = ({}: Props) => {
  return (
    <div className="container">
      <div className="mb-16 flex flex-col gap-y-1 text-center font-headings">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Museu GD Mamarrosa</h1>
        <span className="text-xl font-semibold tracking-tighter sm:text-3xl lg:text-4xl">
          A melhor experiência futebolística áudio-visual do mundo chega em Janeiro 2023.
        </span>
      </div>
      <div className="relative mx-auto w-full max-w-lg">
        <div className="animate-blob absolute -top-4 -left-12 h-72 w-72 rounded-full bg-primary opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-secondary opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute -top-8 -right-4 h-72 w-72 rounded-full bg-tertiary opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="relative m-8 space-y-4">
          <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
            <div className="flex-1">
              <div className="h-4 w-36 rounded bg-gray-300 md:w-48"></div>
            </div>
            <div>
              <div className="h-6 w-20 rounded-lg bg-primary md:w-24"></div>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
            <div className="flex-1">
              <div className="h-4 w-24 rounded bg-gray-300 md:w-44"></div>
            </div>
            <div>
              <div className="h-6 w-14 rounded-lg bg-secondary md:w-28"></div>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
            <div className="flex-1">
              <div className="h-4 w-32 rounded bg-gray-300 md:w-56"></div>
            </div>
            <div>
              <div className="h-6 w-16 rounded-lg bg-tertiary md:w-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
