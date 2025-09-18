"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { useFormatAmount } from "../../utils/formatAmount";

const currencies = [
  { code: "USD", flag: "🇺🇸", name: "US Dollar" },
  { code: "AZE", flag: "🇦🇿", name: "Azərbaycan Manatı" },
  { code: "EUR", flag: "🇪🇺", name: "Euro" },
  { code: "RUB", flag: "🇷🇺", name: "Ruble" },
];

const exchangeRates = {
  USD: 1.702,
  EUR: 1.83,
  RUB: 0.019,
  AZE: 1,
};

function parseAmount(value) {
  if (typeof value !== "string") return NaN;
  const normalized = value.trim().replace(/,/g, ".");
  return parseFloat(normalized) || NaN;
}

function CurrencySelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const current = currencies.find((c) => c.code === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-28" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full bg-[#91F8CC] rounded-md px-3 py-2 text-gray-800 font-medium cursor-pointer"
      >
        <span>
          {current.flag} {current.code}
        </span>
        <svg
          className={`w-4 h-4 ml-2 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ul className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md z-50">
          {currencies.map((c) => (
            <li
              key={c.code}
              onClick={() => {
                onChange({ target: { value: c.code } });
                setOpen(false);
              }}
              className={`px-3 py-2 cursor-pointer text-sm text-gray-800 ${
                c.code === value
                  ? "font-semibold bg-gray-50"
                  : "hover:bg-gray-100"
              }`}
            >
              {c.flag} {c.code}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ConverterUi() {
  const [amount, setAmount] = useState("0");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("AZE");

  const formatAmount = useFormatAmount();

  const result = useMemo(() => {
    const fromRate = exchangeRates[from];
    const toRate = exchangeRates[to];
    const value = (parseAmount(amount) * fromRate) / toRate;
    return Number.isFinite(value) ? value : NaN;
  }, [amount, from, to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Rahat Məzənnələr və <span className="italic">Konvertasiya</span>!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-4">
        <div className="border border-gray-300 rounded-xl px-4 py-3 flex items-center justify-between gap-3 sm:col-span-5">
          <input
            value={amount}
            onChange={(e) => {
              const val = e.target.value;

              if (/^[0-9]*[.,]?[0-9]*$/.test(val) || val === "") {
                setAmount(val);
              }
            }}
            inputMode="decimal"
            placeholder="Məbləğ"
            aria-label="Məbləğ"
            className="outline-none w-1/2 text-lg font-medium"
          />
          <CurrencySelect
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div className="sm:col-span-2 flex items-center justify-center">
          <button
            type="button"
            onClick={swap}
            aria-label="Valyutaları dəyiş"
            title="Dəyiş (swap)"
            className="p-2 rounded-full hover:bg-gray-100 transition w-12 h-12 flex items-center justify-center"
          >
            <FiRefreshCw className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="border border-gray-300 rounded-xl px-4 py-3 flex items-center justify-between gap-3 sm:col-span-5">
          <input
            value={Number.isNaN(result) ? "" : formatAmount(result)}
            readOnly
            aria-label="Nəticə"
            className="outline-none w-1/2 text-lg font-medium bg-transparent"
          />
          <CurrencySelect value={to} onChange={(e) => setTo(e.target.value)} />
        </div>
      </div>
      <table className="w-full text-center table-fixed">
        <colgroup>
          <col style={{ width: "40%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "30%" }} />
        </colgroup>
        <thead className="border-y border-gray-200">
          <tr>
            <th className="py-4 text-xl font-medium text-gray-600">Valyuta</th>
            <th className="py-4 text-xl font-medium text-gray-600">Alış</th>
            <th className="py-4 text-xl font-medium text-gray-600">Satış</th>
          </tr>
        </thead>

        <tbody className="text-sm font-medium text-gray-800">
          {currencies.map((c) => (
            <tr key={c.code}>
              <td className="py-4 flex items-center justify-center gap-3">
                <span className="text-base">{c.flag}</span>
                <span>{c.code}</span>
              </td>
              <td className="py-4">
                {formatAmount(exchangeRates[c.code] * 0.998)}
              </td>
              <td className="py-4">{formatAmount(exchangeRates[c.code])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
