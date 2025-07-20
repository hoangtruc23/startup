"use client"

import { useState } from "react"
import { Camera, Video, Edit3, TrendingUp, CheckCircle, Music } from "lucide-react"

const services = [
    {
        icon: <Camera className="w-8 h-8" />,
        title: "Professional Photography",
        description: "High-quality photos that capture your artistic vision",
        features: ["Studio & Location Shoots", "Album Cover Design", "Social Media Content", "Brand Photography"],
        price: "Starting at $500",
    },
    {
        icon: <Video className="w-8 h-8" />,
        title: "Music Video Production",
        description: "Cinematic music videos that tell your story",
        features: ["Concept Development", "Professional Filming", "Post-Production", "Color Grading"],
        price: "Starting at $2,500",
    },
    {
        icon: <Edit3 className="w-8 h-8" />,
        title: "Content Creation",
        description: "Engaging content for all your social platforms",
        features: ["Instagram Reels", "TikTok Videos", "YouTube Content", "Behind-the-Scenes"],
        price: "Starting at $800/month",
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Growth Strategy",
        description: "Data-driven strategies to expand your fanbase",
        features: ["Audience Analysis", "Content Planning", "Platform Optimization", "Engagement Tactics"],
        price: "Starting at $1,200/month",
    },
]

export default function ArtistContentCreation() {
    const [selectedService, setSelectedService] = useState(0)

    return (
        <section className="py-16  relative overflow-hidden">
            {/* Simple background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute bottom-40 right-20 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                        <Music className="w-4 h-4 text-purple-400 mr-2" />
                        <span className="text-sm text-purple-500">Services</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="block ">Content Creation for</span>
                        <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Artists with Following
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Youve built your fanbase. Now lets create content that keeps them engaged and attracts new fans.
                        Professional-grade content creation designed for artists who are ready to scale.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${selectedService === index
                                    ? "bg-purple-500/10 border-purple-200/30"
                                    : "bg-gray-200/50 hover:border-gray-400"
                                }`}
                            onClick={() => setSelectedService(index)}
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-xl mb-4 mx-auto">
                                {service.icon}
                            </div>

                            <h3 className="text-lg font-semibold mb-2 text-center">{service.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 text-center">{service.description}</p>

                            <div className="space-y-2 mb-4">
                                {service.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center text-sm">
                                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                        <span className="text-gray-800">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center">
                                <span className="text-purple-400 font-semibold">{service.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold  mb-4">Ready to Elevate Your Content?</h3>
                    <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
                        Join successful artists whove scaled their content and grown their fanbase with our proven strategies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white  font-semibold rounded-full transition-colors">
                            Start Your Project
                        </button>
                        <button className="px-8 py-3 bg-transparent border border-gray-600 hover:border-gray-500  font-semibold rounded-full transition-colors">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
