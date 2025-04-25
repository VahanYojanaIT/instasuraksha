// pages/api/payment.js
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Your Razorpay Key ID
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Your Razorpay Key Secret
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const options = {
      amount: req.body.amount, // amount in the smallest currency unit
      currency: 'INR',
      receipt: `receipt#${Math.floor(Math.random() * 1000)}`,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
