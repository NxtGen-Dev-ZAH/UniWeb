// app/about/page.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, Rocket } from "lucide-react";
// import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of bringing together real estate agents, contractors, and clients to create exceptional value.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Our platform continuously evolves to meet the changing needs of the real estate market and renovation industry.",
    },
    {
      icon: Rocket,
      title: "Excellence",
      description:
        "We maintain the highest standards in every aspect of our service, from technology to customer support.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Renograte transformed how I approach real estate sales. The renovation integration has helped me close deals faster and at better prices.",
      author: "Sarah Johnson",
      role: "Real Estate Agent",
      company: "Premier Properties",
    },
    {
      quote:
        "The platform made it easy to coordinate renovations and communicate with all parties involved. It's a game-changer for the industry.",
      author: "Michael Chen",
      role: "General Contractor",
      company: "Chen Renovations",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 mt-10 ">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Renograte
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Revolutionizing real estate transactions through innovative renovation
          integration
        </p>
      </div>

      {/* Mission Statement */}
      <Card className="mb-16">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to assist Agents in driving Real Estate
                transactions while revolutionizing the way people buy and sell
                their homes through the integration of Real Estate and
                renovations.
              </p>
              <div className="space-y-4">
                {[
                  "Create value for buyers and sellers",
                  "Streamline renovation processes",
                  "Foster industry collaboration",
                  "Drive innovation in real estate",
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#0C71C3]" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/about.png"
                alt="Mission illustration"
                // width={500}
                // height={300}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <Badge className="bg-[#0C71C3]">Trusted by 1000+ Agents</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Company Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-cyan-50 rounded-full">
                    <value.icon className="h-8 w-8 text-[#0C71C3]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Case Study */}
      <Card className="mb-16 bg-gradient-to-r from-cyan-50 to-blue-50">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Success Story: The Johnson Family
          </h2>
          <div className="space-y-6">
            <p className="text-gray-600">
              The Johnson family struggled to sell their outdated home despite
              multiple price reductions. Through Renograte, they were able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Custom Renovation Plan",
                  description:
                    "Received expert guidance on high-ROI improvements",
                },
                {
                  title: "Fair Market Value",
                  description:
                    "Obtained the best price for their unrenovated home",
                },
                {
                  title: "Quick Sale",
                  description: "Closed the deal within 45 days of listing",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-[#0C71C3] mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-lg text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Real Estate Business?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join Renograte today and discover how our platform can help you create
          more value for your clients while growing your business.
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-[#0C71C3] hover:bg-[#0C71C3]/90">
            Get Started
          </Button>
          <Button variant="outline" className="border-[#0C71C3] text-[#0C71C3]">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
