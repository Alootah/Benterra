import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BENTERRA</h3>
            <p className="text-sm opacity-80">Premium Yemeni green coffee for professional roasters.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:opacity-80">Home</Link></li>
              <li><Link href="/samples" className="hover:opacity-80">Samples</Link></li>
              <li><Link href="/about" className="hover:opacity-80">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Business</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/wholesale" className="hover:opacity-80">Wholesale</Link></li>
              <li><a href="#" className="hover:opacity-80">Terms & Conditions</a></li>
              <li><a href="#" className="hover:opacity-80">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              <a href="mailto:info@benterra.ae" className="hover:opacity-80">
                info@benterra.ae
              </a>
            </p>
            <p className="text-sm opacity-80 mt-2">Based in Dubai, UAE</p>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>© 2025 BENTERRA COFFEE TRADING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
