"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, Heart, User, Menu, Phone, Mail } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        {/* Top bar with social links and contact info */}
        <div className="flex justify-end items-center space-x-4 py-2 text-sm">
          <div className="flex items-center space-x-4">
            <Link href="https://facebook.com" className="text-green-600 hover:text-green-700">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="https://instagram.com" className="text-green-600 hover:text-green-700">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="https://linkedin.com" className="text-green-600 hover:text-green-700">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link href="https://tiktok.com" className="text-green-600 hover:text-green-700">
              <i className="fab fa-tiktok"></i>
            </Link>
            <Link href="https://youtube.com" className="text-green-600 hover:text-green-700">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-green-600" />
              <a href="tel:+19055659933" className="hover:text-green-600">+1 (905) 565-9933</a>
            </span>
            <span className="flex items-center">
              <Mail className="h-4 w-4 mr-1 text-green-600" />
              <a href="mailto:info@GetHomeRealty.ca" className="hover:text-green-600">info@GetHomeRealty.ca</a>
            </span>
          </div>
          <Button 
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
            onClick={() => window.location.href = '/auth'}
          >
            LOG IN
          </Button>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Get Home Realty"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-green-600">
              HOME
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium hover:text-green-600">
                  BUY
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <Link href="/properties/residential">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    RESIDENTIAL
                  </DropdownMenuItem>
                </Link>
                <Link href="/properties/condo">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    CONDO
                  </DropdownMenuItem>
                </Link>
                <Link href="/properties/commercial">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    COMMERCIAL
                  </DropdownMenuItem>
                </Link>
                <Link href="/properties/open-houses">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    OPEN HOUSES
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium hover:text-green-600">
                  SELL
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <Link href="/home-worth">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    HOME WORTH
                  </DropdownMenuItem>
                </Link>
                <Link href="/sellers-guide">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    SELLER'S GUIDE
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/sold-listings" className="text-sm font-medium hover:text-green-600">
              SOLD LISTINGS
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium hover:text-green-600">
                  PRE-CONSTRUCTION
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <Link href="/pre-construction">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    PRE-CONSTRUCTION
                  </DropdownMenuItem>
                </Link>
                <Link href="/featured-pre-construction">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    FEATURED PRE-CONSTRUCTION
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/join-us" className="text-sm font-medium hover:text-green-600">
              JOIN US
            </Link>
            <Link href="/franchise" className="text-sm font-medium hover:text-green-600">
              FRANCHISE
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium hover:text-green-600">
                  ABOUT US
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <Link href="/about-us">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    ABOUT US
                  </DropdownMenuItem>
                </Link>
                <Link href="/contact-us">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    CONTACT US
                  </DropdownMenuItem>
                </Link>
                <Link href="/our-team">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    OUR TEAM
                  </DropdownMenuItem>
                </Link>
                <Link href="/careers">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    CAREERS
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium hover:text-green-600">
                  VISITOR'S TOOLS
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <Link href="/new-listing-alerts">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    NEW LISTING ALERTS
                  </DropdownMenuItem>
                </Link>
                <Link href="/neighbourhood-alerts">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    NEIGHBOURHOOD ALERTS
                  </DropdownMenuItem>
                </Link>
                <Link href="/just-listed">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    JUST LISTED
                  </DropdownMenuItem>
                </Link>
                <Link href="/exclusive-listing">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    EXCLUSIVE LISTING
                  </DropdownMenuItem>
                </Link>
                <Link href="/market-report">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    MARKET REPORT
                  </DropdownMenuItem>
                </Link>
                <Link href="/real-estate-news">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    REAL ESTATE NEWS
                  </DropdownMenuItem>
                </Link>
                <Link href="/school-rankings">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    SCHOOL RANKINGS
                  </DropdownMenuItem>
                </Link>
                <Link href="/calculators">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    CALCULATORS
                  </DropdownMenuItem>
                </Link>
                <Link href="/useful-links">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    USEFUL LINKS
                  </DropdownMenuItem>
                </Link>
                <Link href="/sellers-guide">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    SELLER'S GUIDE
                  </DropdownMenuItem>
                </Link>
                <Link href="/buyers-guide">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    BUYER'S GUIDE
                  </DropdownMenuItem>
                </Link>
                <Link href="/blogs">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    BLOGS
                  </DropdownMenuItem>
                </Link>
                <Link href="/scripthub">
                  <DropdownMenuItem className="cursor-pointer text-green-600 font-semibold">
                    SCRIPTHUB
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <div className="font-semibold text-green-600">BUY</div>
              <Link href="/properties/residential" className="block pl-4 py-1 hover:text-green-600">
                RESIDENTIAL
              </Link>
              <Link href="/properties/condo" className="block pl-4 py-1 hover:text-green-600">
                CONDO
              </Link>
              <Link href="/properties/commercial" className="block pl-4 py-1 hover:text-green-600">
                COMMERCIAL
              </Link>
              <Link href="/properties/open-houses" className="block pl-4 py-1 hover:text-green-600">
                OPEN HOUSES
              </Link>
            </div>
            <hr />
            <div className="space-y-2">
              <div className="font-semibold text-green-600">SELL</div>
              <Link href="/home-worth" className="block pl-4 py-1 hover:text-green-600">
                HOME WORTH
              </Link>
              <Link href="/sellers-guide" className="block pl-4 py-1 hover:text-green-600">
                SELLER'S GUIDE
              </Link>
            </div>
            <hr />
            <div className="space-y-2">
              <div className="font-semibold text-green-600">PRE-CONSTRUCTION</div>
              <Link href="/pre-construction" className="block pl-4 py-1 hover:text-green-600">
                PRE-CONSTRUCTION
              </Link>
              <Link href="/featured-pre-construction" className="block pl-4 py-1 hover:text-green-600">
                FEATURED PRE-CONSTRUCTION
              </Link>
            </div>
            <hr />
            <div className="space-y-2">
              <div className="font-semibold text-green-600">ABOUT US</div>
              <Link href="/about-us" className="block pl-4 py-1 hover:text-green-600">
                ABOUT US
              </Link>
              <Link href="/contact-us" className="block pl-4 py-1 hover:text-green-600">
                CONTACT US
              </Link>
              <Link href="/our-team" className="block pl-4 py-1 hover:text-green-600">
                OUR TEAM
              </Link>
              <Link href="/careers" className="block pl-4 py-1 hover:text-green-600">
                CAREERS
              </Link>
            </div>
            <hr />
            <div className="space-y-2">
              <div className="font-semibold text-green-600">VISITOR'S TOOLS</div>
              <Link href="/new-listing-alerts" className="block pl-4 py-1 hover:text-green-600">
                NEW LISTING ALERTS
              </Link>
              <Link href="/neighbourhood-alerts" className="block pl-4 py-1 hover:text-green-600">
                NEIGHBOURHOOD ALERTS
              </Link>
              <Link href="/just-listed" className="block pl-4 py-1 hover:text-green-600">
                JUST LISTED
              </Link>
              <Link href="/exclusive-listing" className="block pl-4 py-1 hover:text-green-600">
                EXCLUSIVE LISTING
              </Link>
              <Link href="/market-report" className="block pl-4 py-1 hover:text-green-600">
                MARKET REPORT
              </Link>
              <Link href="/real-estate-news" className="block pl-4 py-1 hover:text-green-600">
                REAL ESTATE NEWS
              </Link>
              <Link href="/school-rankings" className="block pl-4 py-1 hover:text-green-600">
                SCHOOL RANKINGS
              </Link>
              <Link href="/calculators" className="block pl-4 py-1 hover:text-green-600">
                CALCULATORS
              </Link>
              <Link href="/useful-links" className="block pl-4 py-1 hover:text-green-600">
                USEFUL LINKS
              </Link>
              <Link href="/sellers-guide" className="block pl-4 py-1 hover:text-green-600">
                SELLER'S GUIDE
              </Link>
              <Link href="/buyers-guide" className="block pl-4 py-1 hover:text-green-600">
                BUYER'S GUIDE
              </Link>
              <Link href="/blogs" className="block pl-4 py-1 hover:text-green-600">
                BLOGS
              </Link>
              <Link href="/scripthub" className="block pl-4 py-1 hover:text-green-600">
                SCRIPTHUB
              </Link>
            </div>
            <hr />
            <Link href="/join-us" className="block py-2 hover:text-green-600">
              Join Us
            </Link>
            <Link href="/franchise" className="block py-2 hover:text-green-600">
              Franchise
            </Link>
            <hr />
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +1 (905) 565-9933
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@ManageHome.ca
              </div>
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
              onClick={() => window.location.href = '/auth'}
            >
              LOG IN
            </Button>
          </div>
        </div>
      )}
    </header>
  )
} 