'use client'

import { useState } from 'react'
import { ShoppingCart, X, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart'

export default function CartSheet() {
  const [open, setOpen] = useState(false)
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart()

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const vat = subtotal * 0.05
  const total = subtotal + vat

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative p-2 hover:bg-muted rounded-lg transition-colors"
      >
        <ShoppingCart size={24} className="text-foreground" />
        {items.length > 0 && (
          <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
            {items.length}
          </span>
        )}
      </button>

      {/* Sheet Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sheet Content */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-card border-l border-border z-50 transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-muted rounded-lg"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-auto p-6 space-y-4">
            {items.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                Your cart is empty
              </p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-border">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.size}</p>
                    <p className="text-sm font-bold text-primary mt-2">
                      AED {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                      className="w-12 px-2 py-1 border border-border rounded text-center"
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:bg-destructive/10 rounded text-destructive"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>AED {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">VAT (5%)</span>
                  <span>AED {vat.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg pt-4 border-t border-border">
                <span>Total</span>
                <span className="text-primary">AED {total.toFixed(2)}</span>
              </div>
              <Link href="/checkout" onClick={() => setOpen(false)}>
                <Button size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
