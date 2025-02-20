import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { CalendarDays, Heart, MapPin, Share2, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="text-xl font-bold">RealEstate</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/properties" className="text-sm font-medium">
              Properties
            </Link>
            <Link href="/agents" className="text-sm font-medium">
              Agents
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>List Property</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative h-[600px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20at%209.41.35%E2%80%AFPM-lmaYp9WoKMUwsAV4vKCnOBy1miOCtH.png"
            alt="Luxury property with pool"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40">
            <div className="container flex flex-col items-center justify-center h-full text-white space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-center">Find Your Dream Property Today</h1>
              <p className="text-lg md:text-xl text-center max-w-2xl">
                Discover a wide range of luxury properties at competitive prices
              </p>
              <Card className="w-full max-w-4xl bg-white/95">
                <CardContent className="grid gap-4 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-9" placeholder="Enter location" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Check In</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <CalendarDays className="mr-2 h-4 w-4" />
                            Select date
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Check Out</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <CalendarDays className="mr-2 h-4 w-4" />
                            Select date
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Guests</label>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="mr-2 h-4 w-4" />2 Adults, 0 Children
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full md:w-auto md:self-end" size="lg">
                    Search Properties
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="container py-12 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image src="/placeholder.svg" alt="Property" fill className="object-cover" />
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
                    <CardTitle>Luxury Apartment</CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span className="text-sm">Downtown</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>2 Beds</span>
                      <span>•</span>
                      <span>4 Guests</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <span className="text-2xl font-bold">$1,770</span>
                      <span className="text-muted-foreground">/night</span>
                    </div>
                    <Button>View Details</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Company
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Cancellation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Social</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:underline">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

