"use client";

import React, { useState } from "react";
import { ArrowDownUp } from "lucide-react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("YER");
  const [toCurrency, setToCurrency] = useState("USD");

  const rates = {
    YER: { USD: 1 / 537, SAR: 1 / 140, AED: 1 / 146.72 },
    USD: { YER: 537, SAR: 3.75, AED: 3.67 },
    SAR: { YER: 140, USD: 1 / 3.75, AED: 0.98 },
    AED: { YER: 146.72, USD: 1 / 3.67, SAR: 1.02 },
  };

  const currencyNames = {
    YER: "ريال يمني",
    USD: "دولار أمريكي",
    SAR: "ريال سعودي",
    AED: "درهم إماراتي",
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-indigo-300 p-2 sm:p-4"
      dir="rtl"
    >
      <div className="backdrop-blur-md bg-white/60 border border-white/30 shadow-xl rounded-3xl p-4 sm:p-8 w-full max-w-3xl space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          💱 محول العملات - صنعاء
        </h1>

        <div className="space-y-4">
          {/* Input */}
          <div>
            <label className="block text-gray-700 text-base sm:text-lg mb-1 sm:mb-2">
              المبلغ
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 sm:px-5 sm:py-3 rounded-xl bg-white/80 border border-gray-300 text-base sm:text-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none placeholder-gray-500 text-gray-800"
              placeholder="أدخل المبلغ"
            />
          </div>

          {/* Select & Swap */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 text-base sm:text-lg mb-1">
                من
              </label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-white/80 border border-gray-300 text-base sm:text-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none  placeholder-gray-500 text-gray-800"
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
              className="mt-6 p-2 sm:p-3 rounded-full bg-white/70 hover:bg-white shadow-md border border-gray-300 transition-all"
              aria-label="تبديل"
            >
              <ArrowDownUp className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
            </button>

            <div className="flex-1">
              <label className="block text-gray-700 text-base sm:text-lg mb-1">
                إلى
              </label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-white/80 border border-gray-300 text-base sm:text-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none  placeholder-gray-500 text-gray-800"
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
          <div className="mt-4 sm:mt-6 bg-gradient-to-r from-indigo-100 to-blue-100 p-4 sm:p-6 rounded-2xl shadow-inner text-center">
            <p className="text-base sm:text-lg text-gray-600 mb-1 sm:mb-2">
              المبلغ المحول:
            </p>
            <p className="text-2xl sm:text-4xl font-bold text-indigo-700">
              {amount ? convert() : "0.00"} {currencyNames[toCurrency]}
            </p>
            <p className="text-sm sm:text-md text-gray-500 mt-1 sm:mt-2">
              {amount || "0"} {currencyNames[fromCurrency]} =
            </p>
          </div>
        </div>

        {/* Exchange Rates */}
        <div className="bg-gradient-to-br from-white/70 to-blue-100 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-lg mt-4 sm:mt-6">
          <h2 className="text-center text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-4">
            📈 أسعار الصرف الثابتة
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-center text-gray-700">
            <div className="bg-white/80 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="text-sm sm:text-md font-medium">
                💵 1 دولار أمريكي
              </p>
              <p className="text-lg sm:text-xl font-bold text-indigo-600">
                = 537 ريال يمني
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="text-sm sm:text-md font-medium">🇸🇦 1 ريال سعودي</p>
              <p className="text-lg sm:text-xl font-bold text-indigo-600">
                = 140 ريال يمني
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="text-sm sm:text-md font-medium">
                🇦🇪 1 درهم إماراتي
              </p>
              <p className="text-lg sm:text-xl font-bold text-indigo-600">
                = 146.72 ريال يمني
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="text-sm sm:text-md font-medium">
                💵 1 دولار أمريكي
              </p>
              <p className="text-lg sm:text-xl font-bold text-indigo-600">
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
