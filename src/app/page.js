"use client";

import React, { useState } from "react";
import { ArrowDownUp } from "lucide-react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("YER");
  const [toCurrency, setToCurrency] = useState("USD");

  const rates = {
    YER: { USD: 1 / 536, SAR: 1 / 140 },
    USD: { YER: 536, SAR: 3.75 },
    SAR: { YER: 140, USD: 1 / 3.75 },
  };

  const currencyNames = {
    YER: "ريال يمني",
    USD: "دولار أمريكي",
    SAR: "ريال سعودي",
  };

  const convert = () => {
    if (!amount) return 0;
    if (fromCurrency === toCurrency) return amount;
    if (rates[fromCurrency] && rates[fromCurrency][toCurrency]) {
      return (amount * rates[fromCurrency][toCurrency]).toFixed(2);
    } else {
      return (amount * (1 / rates[toCurrency][fromCurrency])).toFixed(2);
    }
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-indigo-300 p-4"
      dir="rtl"
    >
      <div className="backdrop-blur-md bg-white/60 border border-white/30 shadow-xl rounded-3xl p-8 w-full max-w-3xl space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          💱 محول العملات - صنعاء
        </h1>

        <div className="space-y-4">
          {/* Input */}
          <div>
            <label className="block text-gray-700 text-lg mb-2">المبلغ</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-white/80 border border-gray-300 text-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="أدخل المبلغ"
            />
          </div>

          {/* Select & Swap */}
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 text-lg mb-1">من</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-300 text-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              >
                {Object.entries(currencyNames).map(([key, name]) => (
                  <option key={key} value={key}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSwap}
              className="mt-6 p-3 rounded-full bg-white/70 hover:bg-white shadow-md border border-gray-300 transition-all"
              aria-label="تبديل"
            >
              <ArrowDownUp className="w-6 h-6 text-indigo-500" />
            </button>

            <div className="flex-1">
              <label className="block text-gray-700 text-lg mb-1">إلى</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-300 text-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              >
                {Object.entries(currencyNames).map(([key, name]) => (
                  <option key={key} value={key}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Result */}
          <div className="mt-6 bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-2xl shadow-inner text-center">
            <p className="text-lg text-gray-600 mb-2">المبلغ المحول:</p>
            <p className="text-4xl font-bold text-indigo-700">
              {amount ? convert() : "0.00"} {currencyNames[toCurrency]}
            </p>
            <p className="text-md text-gray-500 mt-2">
              {amount || "0"} {currencyNames[fromCurrency]} =
            </p>
          </div>
        </div>

        {/* Exchange Rates */}
        <div className="bg-gradient-to-br from-white/70 to-blue-100 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg mt-6">
          <h2 className="text-center text-lg font-bold text-gray-800 mb-4">
            📈 أسعار الصرف الثابتة
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center text-gray-700">
            <div className="bg-white/80 rounded-xl p-4 shadow-sm">
              <p className="text-md font-medium">💵 1 دولار أمريكي</p>
              <p className="text-xl font-bold text-indigo-600">
                = 536 ريال يمني
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow-sm">
              <p className="text-md font-medium">🇸🇦 1 ريال سعودي</p>
              <p className="text-xl font-bold text-indigo-600">
                = 140 ريال يمني
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow-sm sm:col-span-2">
              <p className="text-md font-medium">💵 1 دولار أمريكي</p>
              <p className="text-xl font-bold text-indigo-600">
                = 3.75 ريال سعودي
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
