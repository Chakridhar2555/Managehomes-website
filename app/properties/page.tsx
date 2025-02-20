import { PropertyCard } from "@/components/property-card"
import { SearchFilters } from "@/components/search-filters"

export default function PropertiesPage() {
  const properties = [
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
    // Add more properties...
  ]

  return (
    <div className="container py-6 space-y-6">
      <h1 className="text-3xl font-bold">Properties</h1>
      <div className="p-6 bg-muted rounded-lg">
        <SearchFilters />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  )
}

