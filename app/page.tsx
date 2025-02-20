import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { SearchFilters } from "@/components/search-filters"
import { PropertySlider } from "@/components/property-slider"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home() {
  const featuredImages = [
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
  ]

  const featuredProperties = [
    {
      id: "1",
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: 2500000,
      beds: 5,
      baths: 4,
      sqft: 4500,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "2",
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: 3750000,
      beds: 3,
      baths: 3,
      sqft: 3200,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "3",
      title: "Beachfront Condo",
      location: "Miami Beach, FL",
      price: 1850000,
      beds: 2,
      baths: 2,
      sqft: 1800,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src="/images/hero-condo.jpg"
          alt="Luxury condo with city view at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-white space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-center">
              Find Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-3xl">
              Discover exclusive properties in prime locations
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white shadow-lg -mt-20 relative z-10 mx-4 rounded-xl">
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Input placeholder="Enter location" className="w-full" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Property Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Price Range</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500k">$0 - $500,000</SelectItem>
                  <SelectItem value="500k-1m">$500,000 - $1M</SelectItem>
                  <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                  <SelectItem value="2m+">$2M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="mt-8 w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
              Search Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      
      {/* Quick Links Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Quick Links</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link href="/home-worth" className="relative group overflow-hidden rounded-xl">
              <div className="relative h-[200px]">
                <Image
                  src="/images/home-worth.jpg"
                  alt="Home Worth"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">
                    HOME WORTH
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/neighbourhood-alerts" className="relative group overflow-hidden rounded-xl">
              <div className="relative h-[200px]">
                <Image
                  src="/images/neighbourhood.jpg"
                  alt="Neighbourhood Alerts"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">
                    NEIGHBOURHOOD ALERTS
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/new-listing-alerts" className="relative group overflow-hidden rounded-xl">
              <div className="relative h-[200px]">
                <Image
                  src="/images/new-listing.jpg"
                  alt="New Listing Alerts"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">
                    NEW LISTING ALERTS
                  </h3>
                </div>
              </div>
            </Link>

            <Link href="/map-search" className="relative group overflow-hidden rounded-xl">
              <div className="relative h-[200px]">
                <Image
                  src="/images/map-search.jpg"
                  alt="Map Search"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">
                    MAP SEARCH
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">REVIEWS</h2>
            <h3 className="text-3xl font-bold">What our clients have to say!</h3>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max">
              {/* Review 1 */}
              <div className="w-[800px] bg-white p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <Image
                      src="/images/review-house.jpg"
                      alt="Modern house review"
                      width={800}
                      height={500}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-[80px] text-gray-200 leading-none font-serif">"</div>
                    <blockquote className="text-gray-700 text-lg -mt-8">
                      Sailaja and Naveen were very helpful in finding a house for us and we had very good experience working with them. Thank you for all the help and support. I would definitely recommend them!!
                    </blockquote>
                    <footer className="text-gray-600 font-medium mt-4">
                      - Mounica Maddula
                    </footer>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="w-[800px] bg-white p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <Image
                      src="/images/condo-building.jpg"
                      alt="Condo review"
                      width={800}
                      height={500}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-[80px] text-gray-200 leading-none font-serif">"</div>
                    <blockquote className="text-gray-700 text-lg -mt-8">
                      I recently had the pleasure of working with Veena from Get Home Realty. As a first-time homebuyer, the process seemed overwhelming, but Veena guided me through every step with professionalism and expertise...
                    </blockquote>
                    <footer className="text-gray-600 font-medium mt-4">
                      - saravanan j
                    </footer>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="w-[800px] bg-white p-8 rounded-xl shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <Image
                      src="/images/modern-house.jpg"
                      alt="Modern house review"
                      width={800}
                      height={500}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-[80px] text-gray-200 leading-none font-serif">"</div>
                    <blockquote className="text-gray-700 text-lg -mt-8">
                      Outstanding service! The team went above and beyond to help us find our perfect home. Their knowledge of the market and negotiation skills were invaluable...
                    </blockquote>
                    <footer className="text-gray-600 font-medium mt-4">
                      - John Smith
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/reviews" className="inline-flex items-center text-red-600 hover:text-red-700">
              <span className="text-xl mr-1">+</span> Submit Your Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold">Buy a Home</h3>
              <p className="text-muted-foreground">
                Find your place with an immersive photo experience and the most listings.
              </p>
              <Link href="/properties?type=buy">
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                  Search Homes
                </Button>
              </Link>
            </div>
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold">Sell a Home</h3>
              <p className="text-muted-foreground">
                Whether you sell with new offers or take another approach, we'll help you navigate the path to a
                successful sale.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                  Contact Agent
                </Button>
              </Link>
            </div>
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold">Rent a Home</h3>
              <p className="text-muted-foreground">
                We're creating a seamless online experience from shopping on the largest rental network, to applying, to
                paying rent.
              </p>
              <Link href="/properties?type=rent">
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                  Find Rentals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
