'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FINSA_MERCH_CATALOG,
  MerchCategory,
  MerchItem,
  MERCH_DEADLINE,
  EVENT_DATE,
} from '../../merch/data';

const CATEGORIES: MerchCategory[] = ['All', 'Clothe', 'Headwear & Accessories'];

export default function FinsaMerchPage() {
  const [selectedCategory, setSelectedCategory] = useState<MerchCategory>('All');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});

  const filteredItems =
    selectedCategory === 'All'
      ? FINSA_MERCH_CATALOG
      : FINSA_MERCH_CATALOG.filter((item) => item.category === selectedCategory);

  const handleSelectSize = (itemId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: size }));
  };

  const handleSelectColor = (itemId: string, colorName: string) => {
    setSelectedColors((prev) => ({ ...prev, [itemId]: colorName }));
  };

  const formatNaira = (amount: number) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="min-h-screen bg-white text-slate-900 mt-50">
      {/* Top Nike-Style Announcement Ticker */}
  

      {/* Hero Editorial Banner */}
      <header className="max-w-7xl mx-auto px-6 pt-14 pb-10 border-b border-slate-100">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
              FINSA UNILAG  Official Storefront
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase">
              The Orientation Collection
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Engineered for comfort and campus identity. Secure your official merch before{' '}
              <span className="font-semibold text-slate-900">{MERCH_DEADLINE}</span> to ensure
              pickup ahead of Freshers&apos; Orientation on{' '}
              <span className="font-semibold text-blue-600">{EVENT_DATE}</span>.
            </p>
          </div>

          {/* Deadline Highlight Pill */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 shrink-0">
            <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Purchase Cutoff
            </p>
            <p className="text-xl font-extrabold text-slate-950 mt-0.5">{MERCH_DEADLINE}</p>
            <p className="text-xs text-slate-600 mt-1">Event Debut: {EVENT_DATE}</p>
          </div>
        </div>

        {/* Category Filter Tabs (Nike Minimalist Style) */}
        <div className="mt-10 flex items-center gap-3 overflow-x-auto pb-2">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filteredItems.map((item: MerchItem) => {
            const activeSize = selectedSizes[item.id] || item.sizes[0];
            const activeColor = selectedColors[item.id] || item.colors[0].name;

            return (
              <div key={item.id} className="group flex flex-col">
                {/* Product Image Box (Nike 4:5 Grey Backdrop) */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-100">
                  {item.tag && (
                    <span className="absolute top-3.5 left-3.5 z-10 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-blue-700 shadow-sm">
                      {item.tag}
                    </span>
                  )}

                  {/* Placeholder visual until real product photos are uploaded */}
                  {item?.imagePath ? (
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-105">
                        <Image className="h-full" width={500} height={500} src={item.imagePath} alt={item?.name}/>
                        </div>
                  ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-105">
                    <div className="h-24 w-24 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        FINSA
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-500">{item.name}</p>
                    <p className="text-xs text-slate-400 mt-1">Color: {activeColor}</p>
                  </div>
                  )}

                  {/* Uncomment once product images are placed in /public/merch/ or Directus:
                  <Image
                    src={item.imagePath}
                    alt={item.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  */}
                </div>

                {/* Product Metadata */}
                <div className="mt-4 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                          {item.category}
                        </p>
                        <h2 className="mt-0.5 text-lg font-bold text-slate-950 leading-snug">
                          {item.name}
                        </h2>
                      </div>
                      <p className="text-lg font-extrabold text-slate-950 shrink-0">
                        {formatNaira(item.price)}
                      </p>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>

                    {/* Brand Color Swatches */}
                    <div className="mt-4">
                      <p className="text-xs font-medium text-slate-500 mb-2">
                        Color: <span className="text-slate-900 font-semibold">{activeColor}</span>
                      </p>
                      <div className="flex items-center gap-2.5">
                        {item.colors.map((color) => {
                          const isSelected = activeColor === color.name;
                          return (
                            <button
                              key={color.name}
                              type="button"
                              aria-label={`Select ${color.name}`}
                              onClick={() => handleSelectColor(item.id, color.name)}
                              className={`h-6 w-6 rounded-full border transition-all ${
                                isSelected
                                  ? 'ring-2 ring-blue-600 ring-offset-2 border-slate-400'
                                  : 'border-slate-300 hover:scale-110'
                              }`}
                              style={{ backgroundColor: color.hex }}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Size Selector Pills */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-medium text-slate-500">Select Size</span>
                        <span className="font-semibold text-slate-900">{activeSize}</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1.5">
                        {item.sizes.map((size) => {
                          const isSelected = activeSize === size;
                          return (
                            <button
                              key={size}
                              type="button"
                              onClick={() => handleSelectSize(item.id, size)}
                              className={`py-2 text-xs font-bold rounded-md border transition-colors ${
                                isSelected
                                  ? 'border-slate-950 bg-slate-950 text-white'
                                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-900'
                              } ${size === 'One Size' ? 'col-span-5' : ''}`}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Nike-Style Pill CTA Button */}
                  <div className="mt-6">
                    <Link
                      href={`${item.orderLink}?size=${encodeURIComponent(
                        activeSize
                      )}&color=${encodeURIComponent(activeColor)}`}
                      className="flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700 active:scale-[0.99]"
                    >
                      Pre-Order Now • {formatNaira(item.price)}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}