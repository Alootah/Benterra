'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart'

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const vat = subtotal * 0.05
  const total = subtotal + vat

  const handlePlaceOrder = () => {
    // Simulate order placement
    setOrderPlaced(true)
  }

  if (orderPlaced) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center py-24">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Order Placed!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your order. You'll receive a confirmation email shortly with tracking information.
            </p>
            <p className="text-sm text-foreground mb-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
              Typical lead time: 15–20 days from Dubai. We'll notify you when your samples ship.
            </p>
            <Link href="/samples">
              <Button className="w-full">Continue Shopping</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center py-24">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
            <Link href="/samples">
              <Button size="lg">Shop Samples</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-12">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between py-4 border-b border-border">
                      <div>
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.size} × {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-foreground">
                        AED {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
                    <span>AED {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>VAT (5%)</span>
                    <span>AED {vat.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">AED {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-blue-900 mb-2">📦 Shipping Information</h3>
                <p className="text-sm text-blue-800">
                  Fulfilled from Dubai. Delivery timing varies by stock; samples ship ASAP To All Emirates. Typical lead time: 1 to 3 Working Days.
                </p>
              </div>

              {/* T&Cs */}
              <div className="bg-muted rounded-lg p-6 mb-8">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-4 h-4 mt-1 rounded" required />
                  <span className="text-sm text-foreground">
                    I agree to the Terms & Conditions. Samples are non-returnable. Beans ship in unroasted state. <a href="#" className="text-primary hover:underline">Read our policies</a>.
                  </span>
                </label>
              </div>
            </div>

            {/* Payment Section */}
            <div>
              <div className="bg-card rounded-lg border border-border p-8 sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-6">Payment</h2>
                
                <form className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg"
                      placeholder="4242 4242 4242 4242"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Expiry
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-border rounded-lg"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-border rounded-lg"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="button"
                    size="lg"
                    className="w-full mt-6"
                    onClick={handlePlaceOrder}
                  >
                    Place Order - AED {total.toFixed(2)}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center">
                  Test card: 4242 4242 4242 4242
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
