import React from 'react';

const stats = [
    {name: 'Total Subscribers', stat: '71,897'},
    {name: 'Avg. Open Rate', stat: '58.16%'},
    {name: 'Avg. Click Rate', stat: '24.57%'},
]

function States() {
    return (
        <div className={`container mx-auto`}>
            {/*<h3 className="text-lg leading-6 font-medium ">Last 30 days</h3>*/}
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map((item) => (
                    <div key={item.name} className="px-4 py-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden sm:p-6 border border-primary-500 shadow-primary-500/10">
                        <dt className="text-sm font-medium text-gray-500 dark:text-primary-300 truncate">{item.name}</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-300">{item.stat}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export default States;
