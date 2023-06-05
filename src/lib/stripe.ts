import Stripe from 'stripe'

export const stripe = new Stripe(process.env.NEXT_KEY_STRIPE_SECRET!, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shop',
  },
})
