'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'

interface ProductCardProps {
  id: string
  code: string
  name: string
  region: string
  description: string
  prices: { '100g': number; '250g': number }
}

export default function ProductCard({
  id,
  code,
  name,
  region,
  description,
  prices,
}: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<'100g' | '250g'>('100g')
  const { addItem } = useCart()

  const currentPrice = prices[selectedSize]

  const handleAddToCart = () => {
    addItem({
      id: `${id}-${selectedSize}`,
      name,
      code,
      size: selectedSize,
      price: currentPrice,
      quantity: 1,
    })
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-3">
          <span className="text-xs font-semibold text-primary uppercase">{code}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{region}</p>
        <p className="text-sm text-foreground">{description}</p>
      </div>

      <div className="mb-6 pt-4 border-t border-border">
        <div className="inline-block px-2 py-1 bg-green-50 rounded text-xs text-primary font-semibold mb-4">
          Green • Unroasted • Sample Pack
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Select Size
          </label>
          <div className="flex gap-3">
            {(['100g', '250g'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-colors ${
                  selectedSize === size
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground border border-border hover:border-primary'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-1">Price (including VAT)</p>
          <p className="text-3xl font-bold text-primary">
            AED {currentPrice}
          </p>
        </div>

        <Button
          size="lg"
          className="w-full"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
