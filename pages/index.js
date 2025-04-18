import '../styles/globals.css';

export default function Home() {
  const plans = [
    {
      title: "6 Months - Electric",
      price: "₹425",
      description: "Covers all electric maintenance for 2BHK and 3BHK homes.",
    },
    {
      title: "1 Year - Electric",
      price: "₹999",
      description: "Full year electric appliance maintenance.",
    },
    {
      title: "1 Year - Electric + Plumbing",
      price: "₹1499",
      description: "Includes electric and plumbing maintenance for a year.",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-6">InstaSuraksha</h1>
      <p className="text-center mb-10 text-lg text-gray-600">
        Affordable Home Maintenance Plans for Your Peace of Mind
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div key={idx} className="rounded-2xl shadow-md p-6 border">
            <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
            <p className="text-xl text-green-600 font-bold mb-4">{plan.price}</p>
            <p className="mb-4 text-gray-700">{plan.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
