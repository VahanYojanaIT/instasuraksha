import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const plans = [
    {
      title: "6 Months - Electric",
      price: "₹425",
      amount: 42500,
      description: "Covers all electric maintenance for 2BHK and 3BHK homes.",
    },
    {
      title: "1 Year - Electric",
      price: "₹999",
      amount: 99900,
      description: "Full year electric appliance maintenance.",
    },
    {
      title: "1 Year - Electric + Plumbing",
      price: "₹1499",
      amount: 149900,
      description: "Includes electric and plumbing maintenance for a year.",
    },
  ];

  const handlePayment = async (amount) => {
    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });
    const data = await response.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Your Razorpay key id
      amount: data.amount,
      currency: data.currency,
      name: "InstaSuraksha",
      description: "Home Maintenance Subscription",
      order_id: data.id,
      handler: function (response) {
        alert('Payment successful!'); // handle success
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Head>
        <title>InstaSuraksha - Home Maintenance Plans</title>
        <meta name="description" content="Electric and plumbing maintenance for 2BHK/3BHK homes starting at ₹425." />
      </Head>

      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">InstaSuraksha</h1>
        <p className="text-center mb-10 text-lg text-gray-600">
          Affordable Home Maintenance Plans for Your Peace of Mind
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className="rounded-2xl shadow-lg p-6 border bg-white hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-xl text-green-600 font-bold mb-4">{plan.price}</p>
              <p className="mb-6 text-gray-700">{plan.description}</p>
              <button 
                onClick={() => handlePayment(plan.amount)} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
