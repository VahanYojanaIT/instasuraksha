// components/PaymentForm.js
export default function PaymentForm() {
  return (
    <div className="max-w-md mx-auto p-6 border rounded-2xl shadow-lg mt-10 bg-white">
      <div className="flex justify-center mb-4">
        <img
          src="/paytm-logo.png" // 👈 Replace with your image file name in /public
          alt="Paytm"
          className="h-12"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">Pay with Paytm</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Mobile Number</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Paytm number" />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Amount</label>
          <input type="number" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="₹ Amount" />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Proceed to Pay
        </button>
      </form>
    </div>
  );
}
