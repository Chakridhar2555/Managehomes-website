"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Loader2, Send, User, Home, Calendar, DollarSign } from "lucide-react"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  propertyType: z.string().min(1, "Please select a property type"),
  budget: z.string().min(1, "Please enter your budget"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      budget: "",
      message: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success("Request sent successfully! Our agent will contact you soon.")
      form.reset()
    } catch (error) {
      toast.error("Failed to send request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="John Doe"
                      className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">Phone Number</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                      className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">Email Address</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="you@example.com"
                    type="email"
                    className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">Property Type</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Home className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <select
                      className="w-full pl-9 h-10 rounded-md border border-gray-200 bg-gray-50 focus:bg-white transition-colors"
                      {...field}
                    >
                      <option value="">Select Type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                    </select>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">Budget Range</FormLabel>
                <FormControl>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <select
                      className="w-full pl-9 h-10 rounded-md border border-gray-200 bg-gray-50 focus:bg-white transition-colors"
                      {...field}
                    >
                      <option value="">Select Budget</option>
                      <option value="0-250000">$0 - $250,000</option>
                      <option value="250000-500000">$250,000 - $500,000</option>
                      <option value="500000-750000">$500,000 - $750,000</option>
                      <option value="750000-1000000">$750,000 - $1,000,000</option>
                      <option value="1000000+">$1,000,000+</option>
                    </select>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold">Your Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your dream property and any specific requirements..."
                  className="min-h-[120px] resize-none bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col space-y-3">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending Request...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Submit Inquiry
              </>
            )}
          </Button>
          
          <div className="flex gap-3">
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1 group hover:border-green-600 hover:text-green-600 transition-colors py-6"
              onClick={() => window.location.href = "tel:+1234567890"}
            >
              <Phone className="mr-2 h-5 w-5 group-hover:text-green-600" />
              Call Agent
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1 group hover:border-green-600 hover:text-green-600 transition-colors py-6"
              onClick={() => window.location.href = "/schedule"}
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:text-green-600" />
              Schedule Viewing
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}

