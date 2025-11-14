'use client'

import { useState, useEffect } from 'react'

export interface CartItem {
  id: string
  name: string
  code: string
  size: string
  price: number
  quantity: number
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('benterra-cart')
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch (error) {
        console.error('Failed to parse cart:', error)
      }
    }
    setIsLoading(false)
  }, [])

  // Save to localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('benterra-cart', JSON.stringify(items))
    }
  }, [items, isLoading])

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, item]
    })
  }

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems(prev =>
      prev.map(i => (i.id === id ? { ...i, quantity } : i))
    )
  }

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    getTotalPrice,
  }
}
