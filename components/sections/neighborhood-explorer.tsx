"use client"

import { useState } from "react";

const neighborhoodsData = [
  {
    name: "Acklam",
    avgPrice: "£245,000",
    properties: 12,
    schools: 4.5,
    commute: "8 min",
    bestFor: "Families",
    image: "🏘️",
  },
  {
    name: "Linthorpe",
    avgPrice: "£285,000",
    properties: 8,
    schools: 4.8,
    commute: "5 min",
    bestFor: "Professionals",
    image: "🏙️",
  },
  {
    name: "Marton",
    avgPrice: "£325,000",
    properties: 15,
    schools: 5.0,
    commute: "12 min",
    bestFor: "Growing Families",
    image: "🌳",
  },
  {
    name: "Nunthorpe",
    avgPrice: "£395,000",
    properties: 6,
    schools: 5.0,
    commute: "15 min",
    bestFor: "Luxury Buyers",
    image: "⭐",
  },
  {
    name: "Middlesbrough Centre",
    avgPrice: "£165,000",
    properties: 24,
    schools: 3.8,
    commute: "0 min",
    bestFor: "First-Time Buyers",
    image: "🏢",
  },
  {
    name: "Coulby Newham",
    avgPrice: "£225,000",
    properties: 18,
    schools: 4.2,
    commute: "10 min",
    bestFor: "Investors",
    image: "🏡",
  },
];

export const NeighborhoodExplorer = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<number | null>(null);

  return (
    <section className="bg-[#0a0a0a] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3">
            EXPLORE AREAS
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Your Perfect Neighborhood
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Compare neighborhoods, see prices, schools, and find the area that fits your lifestyle
          </p>
        </header>

        {/* Neighborhood Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {neighborhoodsData.map((neighborhood, index) => (
            <div
              key={neighborhood.name}
              onClick={() => setSelectedNeighborhood(selectedNeighborhood === index ? null : index)}
              className={`
                relative overflow-hidden rounded-xl border cursor-pointer transition-all duration-300
                ${selectedNeighborhood === index 
                  ? 'border-blue-500 bg-gradient-to-br from-blue-950/30 to-[#1a1a1a] shadow-xl shadow-blue-500/20' 
                  : 'border-gray-800 bg-[#1a1a1a] hover:border-gray-700'
                }
              `}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-600/10 text-3xl">
                    {neighborhood.image}
                  </div>
                  <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-400">
                    {neighborhood.properties} available
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {neighborhood.name}
                </h3>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-1">Average Price</p>
                  <p className="text-3xl font-bold text-white">
                    {neighborhood.avgPrice}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Schools</p>
                    <p className="text-sm font-semibold text-white">
                      {'⭐'.repeat(Math.floor(neighborhood.schools))} {neighborhood.schools}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Commute</p>
                    <p className="text-sm font-semibold text-white">{neighborhood.commute}</p>
                  </div>
                </div>

                <div className="inline-block rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 text-xs text-gray-300">
                  Best for: {neighborhood.bestFor}
                </div>

                {selectedNeighborhood === index && (
                  <div className="mt-6 border-t border-gray-800 pt-4">
                    <p className="text-sm text-gray-400 mb-4">
                      {neighborhood.name} offers excellent amenities and great value. Perfect for {neighborhood.bestFor.toLowerCase()}.
                    </p>
                    <button className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700">
                      View Properties in {neighborhood.name}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4">Want personalized neighborhood recommendations?</p>
          <button className="rounded-lg bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-700">
            Get Expert Area Advice
          </button>
        </div>
      </div>
    </section>
  );
};