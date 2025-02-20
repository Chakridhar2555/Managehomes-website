import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bath, Bed, Heart, MapPin, Share2, Square } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface PropertyCardProps {
  id: string
  title: string
  location: string
  price: number
  beds: number
  baths: number
  sqft: number
  image: string
}

export function PropertyCard({ id, title, location, price, beds, baths, sqft, image }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button size="icon" variant="secondary">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-xl">{title}</h3>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Bed className="h-4 w-4" />
              <span>{beds} Beds</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="h-4 w-4" />
              <span>{baths} Baths</span>
            </div>
            <div className="flex items-center space-x-1">
              <Square className="h-4 w-4" />
              <span>{sqft} sqft</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <div>
            <span className="text-2xl font-bold">${price.toLocaleString()}</span>
          </div>
          <Link href={`/properties/${id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

