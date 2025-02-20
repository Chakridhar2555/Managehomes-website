import { PropertySlider } from "@/components/property-slider"
import { ContactForm } from "@/components/contact-form"
import { Bath, Bed, MapPin, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PropertyPage({ params }: { params: { id: string } }) {
  const propertyImages = [
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
  ]

  // This would normally fetch from an API
  const property = {
    id: params.id,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: 2500000,
    beds: 5,
    baths: 4,
    sqft: 4500,
    description:
      "This stunning modern villa offers luxurious living spaces with high-end finishes throughout. Features include a gourmet kitchen, spacious primary suite, home theater, and resort-style pool.",
    features: ["Gourmet Kitchen", "Home Theater", "Pool", "Smart Home Technology", "Wine Cellar", "3 Car Garage"],
    agent: {
      name: "Sarah Johnson",
      phone: "(555) 123-4567",
      email: "sarah@example.com",
    },
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <PropertySlider images={propertyImages} />
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{property.title}</h1>
              <div className="flex items-center text-muted-foreground mt-2">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Bed className="h-4 w-4" />
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center space-x-1">
                <Bath className="h-4 w-4" />
                <span>{property.baths} Baths</span>
              </div>
              <div className="flex items-center space-x-1">
                <Square className="h-4 w-4" />
                <span>{property.sqft} sqft</span>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Description</h2>
              <p className="text-muted-foreground">{property.description}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Features</h2>
              <ul className="grid grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Agent</CardTitle>
              <CardDescription>
                Interested in this property? Contact {property.agent.name} for more information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Price</span>
                  <span className="font-bold">${property.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Type</span>
                  <span>Single Family</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Year Built</span>
                  <span>2022</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Lot Size</span>
                  <span>0.5 acres</span>
                </div>
                <Button className="w-full">Schedule a Tour</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

