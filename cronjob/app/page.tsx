"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [prices, setPrices] = useState<{ [key: string]: { usd: number } }>({});

  useEffect(() => {
    async function fetchPrices() {
      const res = await fetch("/api/crypto");
      const data = await res.json();
      setPrices(data);
    }
    fetchPrices();
  }, []);
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4"> Crypto Prices</h1>
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <p> Bitcoin : ${prices.bitcoin?.usd}</p>
        <p> Ethereum : ${prices.ethereum?.usd}</p>
        <p> Solana : ${prices.solana?.usd}</p>
      </div>
    </main>
  );
}
