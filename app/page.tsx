'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-white to-slate-50 py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-semibold text-primary">PREMIUM YEMENI GREEN COFFEE</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Genuine Yemeni <span className="text-primary">Green Coffee Samples</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Premium microlots for UAE roasters. Order 100g or 250g sample packs from the finest origins: Haimah, Haraz, and Khawlan. Typical Samples Delivery is 1-3 working days and
 Wholesale Orders is 15-20 days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/samples">
                    <Button size="lg" className="w-full sm:w-auto">
                      Browse Samples
                    </Button>
                  </Link>
                  <Link href="/wholesale">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Wholesale Inquiry
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-sm">
                  <Image
                    src="/benterra-logo.png"
                    alt="Benterra Coffee Trading Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Origins Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Origins</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Authentic microlots from Yemen's finest coffee regions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-primary mb-3">Haimah</h3>
                <p className="text-muted-foreground">Renowned for bright, floral notes with exceptional clarity. The most sought-after origin for specialty roasters.</p>
              </div>
              
              <div className="p-8 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-primary mb-3">Haraz</h3>
                <p className="text-muted-foreground">Rich, full-bodied with complex chocolate and spice notes. Perfect for those seeking depth and character.</p>
              </div>
              
              <div className="p-8 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-primary mb-3">Khawlan</h3>
                <p className="text-muted-foreground">Balanced profile with fruity undertones and smooth finish. Ideal for blending and experimentation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Why Benterra</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">100% Authentic</h3>
                <p className="text-muted-foreground">Direct sourcing from verified origins ensures genuine Yemeni green coffee samples.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🚚</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Fast Shipping</h3>
                <p className="text-muted-foreground">Fulfilled from Dubai. Samples ship ASAP with typical delivery within 1-3 days.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">☕</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">For Professionals</h3>
                <p className="text-muted-foreground">Designed for roasters and coffee professionals seeking premium tasting samples.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Explore?</h2>
            <p className="text-lg mb-8 opacity-95">
              Browse our sample collection or inquire about wholesale options for your roastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/samples">
                <Button size="lg" variant="secondary">
                  Shop Samples
                </Button>
              </Link>
              <Link href="/wholesale">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Wholesale Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
