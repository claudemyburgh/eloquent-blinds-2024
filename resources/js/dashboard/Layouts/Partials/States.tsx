import React from "react"

const stats = [
  { name: "Total Clients", stat: "1" },
  { name: "Avg. Open Rate", stat: "58.16%" },
  { name: "Avg. Click Rate", stat: "24.57%" },
]

function States() {
  return (
    <div className={`container mx-auto`}>
      {/*<h3 className="text-lg leading-6 font-medium ">Last 30 days</h3>*/}
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg border border-primary-500 bg-white px-4 py-5 shadow-lg shadow-primary-500/10 dark:bg-gray-800 sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500 dark:text-primary-300">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-300">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default States
