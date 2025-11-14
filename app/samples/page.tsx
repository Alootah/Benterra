'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'

const PRODUCTS = [
  {
    id: 'he',
    code: 'HE',
    name: 'Haimi Anaerobic',
    region: 'Haimah',
    description: 'Bright winey notes with exceptional clarity. The most sought-after anaerobic process for specialty roasters.',
    prices: { '100g': 45, '250g': 105 },
  },
  {
    id: 'hr',
    code: 'HR',
    name: 'Harazi Anaerobic',
    region: 'Haraz',
    description: 'Rich winey character with complex fruit notes. Premium anaerobic fermentation process.',
    prices: { '100g': 40, '250g': 100 },
  },
  {
    id: 'hem',
    code: 'HE-M',
    name: 'Haimi Specialty',
    region: 'Haimah',
    description: 'Premium microlot from high altitude farms with distinctive fruity undertones.',
    prices: { '100g': 30, '250g': 70 },
  },
  {
    id: 'hm',
    code: 'H-M',
    name: 'Harazi Specialty',
    region: 'Haraz',
    description: 'Smooth finish with balanced profile. Ideal for blending and experimentation.',
    prices: { '100g': 30, '250g': 70 },
  },
  {
    id: 'h1',
    code: 'H1',
    name: 'Haimi Commercial',
    region: 'Haimah',
    description: 'Carefully curated selection from finest Haimah farms with vibrant acidity.',
    prices: { '100g': 30, '250g': 60 },
  },
  {
    id: 'kh',
    code: 'KH',
    name: 'Khawlani Commercial',
    region: 'Khawlan',
    description: 'Balanced profile with fruity undertones. Excellent for tasting and cupping notes.',
    prices: { '100g': 30, '250g': 60 },
  },
  {
    id: 'hr1',
    code: 'HR1',
    name: 'Harazi Commercial',
    region: 'Haraz',
    description: 'Traditional processing methods bring out unique spiced and earthy characteristics.',
    prices: { '100g': 30, '250g': 60 },
  },
]

export default function SamplesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sample Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our premium green coffee samples in 100g and 250g sizes. Perfect for professional roasters and coffee enthusiasts.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-16 p-8 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-bold text-foreground mb-3">📦 Shipping Information</h3>
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  <span className="font-semibold">Samples Delivery:</span> 1-3 working days. All orders are fulfilled from Dubai with premium green, unroasted coffee for professional tasting and roasting.
                </p>
                <p>
                  <span className="font-semibold">Wholesale Orders:</span> 15-20 days for bulk quantities. Custom arrangements and duty-free options available through our wholesale program.
                </p>
                <p className="text-muted-foreground">
                  5% VAT is calculated at checkout for all orders.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
