'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

const BEANS = [
  { code: 'HE', name: 'Haimah Exceptional' },
  { code: 'HR', name: 'Haraz Reserve' },
  { code: 'HE-M', name: 'Haimah Mountain' },
  { code: 'H-M', name: 'Haraz Mountain' },
  { code: 'H1', name: 'Haimah Select' },
  { code: 'KH', name: 'Khawlan Heritage' },
  { code: 'HR1', name: 'Haraz Heritage' },
]

export default function WholesalePage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    emirate: '',
    selectedBeans: [] as string[],
    volume: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleBeanToggle = (code: string) => {
    setFormData(prev => ({
      ...prev,
      selectedBeans: prev.selectedBeans.includes(code)
        ? prev.selectedBeans.filter(c => c !== code)
        : [...prev.selectedBeans, code]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate submission
    console.log('Form submitted:', formData)
    
    // Send email
    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitted(true)
        setFormData({
          company: '',
          contact: '',
          email: '',
          phone: '',
          emirate: '',
          selectedBeans: [],
          volume: '',
          message: '',
        })
      }
    } catch (error) {
      console.error('Failed to submit inquiry:', error)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Wholesale Inquiry
            </h1>
            <p className="text-lg text-muted-foreground">
              Contact us for wholesale pricing, bulk orders, and custom arrangements. Duty-free green coffee with land route logistics handled.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitted ? (
              <div className="text-center p-8 bg-green-50 border border-green-200 rounded-lg">
                <h2 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h2>
                <p className="text-green-800 mb-4">
                  Your wholesale inquiry has been received. We'll contact you soon at {formData.email} with wholesale pricing and details.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Company / Roastery Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+971..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Emirate / Country *
                  </label>
                  <input
                    type="text"
                    name="emirate"
                    value={formData.emirate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Dubai, Abu Dhabi, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Interested Beans *
                  </label>
                  <div className="space-y-2">
                    {BEANS.map((bean) => (
                      <label key={bean.code} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.selectedBeans.includes(bean.code)}
                          onChange={() => handleBeanToggle(bean.code)}
                          className="w-4 h-4 text-primary rounded focus:ring-2 focus:ring-primary"
                        />
                        <span className="ml-3 text-foreground">
                          {bean.code} - {bean.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Estimated Monthly Volume (kg) *
                  </label>
                  <input
                    type="text"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., 500kg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your roastery and what you're looking for..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Inquiry
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll contact you with wholesale pricing and details within 24-48 hours.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Wholesale Benefits</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>✓ Competitive wholesale pricing</li>
                  <li>✓ Duty-free green coffee options</li>
                  <li>✓ Land route logistics handled</li>
                  <li>✓ Custom orders available</li>
                  <li>✓ Flexible payment terms</li>
                  <li>✓ Direct sourcing from origins</li>
                  <li>✓ 15-20 day delivery timeline</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Why Choose Benterra</h3>
                <p className="text-sm text-foreground mb-3">
                  We're committed to providing authentic Yemeni green coffee with reliable logistics and transparent pricing. Our team has over a decade of experience in sourcing and trading premium coffee.
                </p>
                <p className="text-sm text-muted-foreground">
                  Contact us at <a href="mailto:info@benterra.ae" className="font-semibold text-primary hover:underline">info@benterra.ae</a> for immediate assistance.
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
