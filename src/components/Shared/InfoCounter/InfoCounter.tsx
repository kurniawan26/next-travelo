import React from 'react'
import CountUp from 'react-countup'

function InfoCounter({ count, label }: { count: number, label: string }) {
  return (
    <div className="flex flex-col text-center">
      <p className="text-gray-100 text-heading-2 font-label font-bold mb-2">
        +<CountUp start={1} end={count} separator='.' />
      </p>
      <p className="text-heading-4 text-gray-4 font-bold font-sans">
        {label}
      </p>
    </div>
  )
}

export default InfoCounter