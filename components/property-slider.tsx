"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertySliderProps {
  images: string[]
}

export function PropertySlider({ images }: PropertySliderProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
      <Image
        src={images[currentImage] || "/placeholder.svg"}
        alt={`Property image ${currentImage + 1}`}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button variant="secondary" size="icon" onClick={previousImage} className="h-10 w-10">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button variant="secondary" size="icon" onClick={nextImage} className="h-10 w-10">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentImage ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  )
}

