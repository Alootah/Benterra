import Header from '@/components/header'
import Footer from '@/components/footer'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About BENTERRA
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium Yemeni green coffee with authenticity at our core.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-foreground mb-4 leading-relaxed">
                  BENTERRA was founded with a simple mission: to bring authentic Yemeni green coffee to professional roasters in the UAE and beyond. We believe in the power of direct relationships with origins and transparent trading practices.
                </p>
                <p className="text-foreground mb-4 leading-relaxed">
                  Our team has deep roots in Yemen's coffee regions—Haimah, Haraz, and Khawlan—where we work directly with farmers who share our commitment to quality and sustainability.
                </p>
                <p className="text-foreground leading-relaxed">
                  Every bean we trade tells a story of heritage, hard work, and passion for coffee. We handle logistics seamlessly so you can focus on what you do best: roasting exceptional coffee.
                </p>
              </div>

              <div className="bg-primary/10 rounded-lg p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-6">Key Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <p className="font-semibold text-foreground">Direct Sourcing</p>
                      <p className="text-sm text-muted-foreground">From verified origins in Haimah, Haraz, and Khawlan</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <p className="font-semibold text-foreground">Based in Dubai</p>
                      <p className="text-sm text-muted-foreground">Serving professional roasters across the UAE</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <p className="font-semibold text-foreground">Duty-Free Options</p>
                      <p className="text-sm text-muted-foreground">Specialized logistics and regulatory expertise</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <p className="font-semibold text-foreground">Fast Lead Times</p>
                      <p className="text-sm text-muted-foreground">Typical Wholesale Orders: 15-20 days from order to delivery</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Origins */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Origins</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-primary mb-4">Haimah</h3>
                  <p className="text-foreground mb-3">
                    Yemen's crown jewel for specialty coffee. Haimah coffees are renowned for their bright floral notes, exceptional clarity, and distinctive character.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Altitude: 1,800–2,500m | Harvest: October–January
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-primary mb-4">Haraz</h3>
                  <p className="text-foreground mb-3">
                    Known for full-bodied profile with complex chocolate and spice notes. Haraz coffees bring depth and character to any blend.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Altitude: 1,600–2,200m | Harvest: September–December
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-primary mb-4">Khawlan</h3>
                  <p className="text-foreground mb-3">
                    A balanced profile with fruity undertones and smooth finish. Perfect for blending and experimentation with roasters.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Altitude: 1,500–2,000m | Harvest: October–December
                  </p>
                </div>
              </div>
            </div>

            {/* Commitment */}
            <div className="bg-secondary text-secondary-foreground rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
              <p className="leading-relaxed">
                Green coffee duty-free. Land route logistics handled. Wholesale pricing available on request. We're committed to transparency, quality, and reliability. When you work with BENTERRA, you're not just buying coffee—you're partnering with a team dedicated to your success.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
