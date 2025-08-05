"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // In a real implementation, this would send the form data to an API endpoint
        // that would forward the submission to mohan@motionrecords.co

        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
        }, 1500)
    }

    return (
        <section className="py-12 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mt-20 mb-30"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-200"> 
                        Ready to transform your brand? Lets start a conversation about your goals and how we can help you achieve
                        them.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-2xl font-bold  mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-500/10 p-3 rounded-lg">
                                        <Mail className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold ">Email</h3>
                                        <p className="">mohan@motionrecords.co</p>
                                        <p className="text-gray-500 text-sm mt-1">Well respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-500/10 p-3 rounded-lg">
                                        <Phone className="h-6 w-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold ">Phone</h3>
                                        <p className="">+1 (555) 123-4567</p>
                                        <p className="text-gray-500 text-sm mt-1">Monday-Friday, 9am-6pm PST</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-500/10 p-3 rounded-lg">
                                        <MapPin className="h-6 w-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold ">Office</h3>
                                        <p className="">Los Angeles, CA</p>
                                        <p className="text-gray-500 text-sm mt-1">By appointment only</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-orange-500/10 p-3 rounded-lg">
                                        <Clock className="h-6 w-6 text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold ">Hours</h3>
                                        <p className="">Monday - Friday: 9am - 6pm PST</p>
                                        <p className="text-gray-500 text-sm mt-1">Closed on weekends and holidays</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold  mb-6">Our Process</h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        step: "1",
                                        title: "Initial Consultation",
                                        desc: "We'll discuss your goals and challenges",
                                    },
                                    {
                                        step: "2",
                                        title: "Strategy Development",
                                        desc: "We'll create a tailored plan for your business",
                                    },
                                    {
                                        step: "3",
                                        title: "Implementation",
                                        desc: "We'll execute the strategy with precision",
                                    },
                                    {
                                        step: "4",
                                        title: "Optimization & Growth",
                                        desc: "We'll refine and scale your success",
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                        className="flex items-center space-x-4"
                                    >
                                        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center  font-bold text-sm">
                                            {item.step}
                                        </div>
                                        <div>
                                            <div className="font-medium">{item.title}</div>
                                            <div className="text-sm">{item.desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="bg-gray-100 border border-gray-300 rounded-2xl p-8 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold  mb-6 uppercase dark:text-black">Send Us a Message</h2>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg
                                            className="w-8 h-8 text-green-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold  mb-2">Message Sent!</h3>
                                    <p className="">
                                        Thank you for reaching out. Well get back to you as soon as possible.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 dark:text-gray-800">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-200 rounded-lg  placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium mb-2 dark:text-gray-800">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-200 border rounded-lg  placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium  mb-2 dark:text-gray-800">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-gray-200 borderrounded-lg  placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <div className="flex justify-end">
                                        {/* <AnimatedButton
                                            type="submit"
                                            className="bg-white text-black hover:bg-gray-100 px-8 py-3"
                                            disabled={isSubmitting}
                                        >
                                            <span className="flex items-center">
                                                {isSubmitting ? "Sending..." : "Send Message"}
                                                <Send className="ml-2 h-4 w-4" />
                                            </span>
                                        </AnimatedButton> */}
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
