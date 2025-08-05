"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "../../../components/ui/button"

export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A full-featured online store with payment integration, inventory management, and admin dashboard.",
            image: "/assets/img/project.png",
            technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#",
            category: "E-commerce",
        },
        {
            id: 2,
            title: "Restaurant Management System",
            description:
                "Complete restaurant management solution with online ordering, table reservations, and staff management.",
            image: "/assets/img/project.png",
            technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
            liveUrl: "#",
            githubUrl: "#",
            category: "Web App",
        },
        {
            id: 3,
            title: "Real Estate Platform",
            description: "Property listing website with advanced search, virtual tours, and agent management system.",
            image: "/assets/img/project.png",
            technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "#",
            category: "Real Estate",
        },
        {
            id: 4,
            title: "Healthcare Dashboard",
            description:
                "Patient management system for healthcare providers with appointment scheduling and medical records.",
            image: "/assets/img/project.png",
            technologies: ["React", "Express.js", "MySQL", "Chart.js"],
            liveUrl: "#",
            githubUrl: "#",
            category: "Healthcare",
        },
        {
            id: 5,
            title: "Learning Management System",
            description: "Online education platform with course creation, student progress tracking, and video streaming.",
            image: "/assets/img/project.png",
            technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
            liveUrl: "#",
            githubUrl: "#",
            category: "Education",
        },
        {
            id: 6,
            title: "Financial Dashboard",
            description: "Personal finance tracking application with budget planning, expense categorization, and reporting.",
            image: "/assets/img/project.png",
            technologies: ["React", "Python", "Django", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#",
            category: "Finance",
        },
    ]

    return (
        <div className="pt-16 ">
            {/* Hero Section */}
            <section className="py-20">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center "
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-gray-200">
                            Our Recent
                            <span className="color-main block">Projects</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 dark:text-gray-200">
                            Explore a selection of my recent work, showcasing various technologies and solutions Ive built for clients
                            across different industries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center "
            >
                <section className="mb-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                            {projects.map((project) => (
                                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="relative">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            width={500}
                                            height={300}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge variant="secondary" className="bg-white/90">
                                                {project.category}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                        <p className="text-gray-600 mb-4 dark:text-gray-200">{project.description}</p>

                                        <div className="flex space-x-3">
                                            <Button size="sm" className="m-auto">
                                                <ExternalLink size={16} className="mr-2" />
                                                Live Demo
                                            </Button>

                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </motion.div>


            {/* Process Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-200">My Development Process</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-200">
                            A structured approach to ensure your project is delivered on time and exceeds expectations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-purple-600">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                            <p className="text-gray-600 dark:text-gray-200">Understanding your business goals and project requirements.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-600">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Planning</h3>
                            <p className="text-gray-600 dark:text-gray-200">Creating detailed project roadmap and technical specifications.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-green-600">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Development</h3>
                            <p className="text-gray-600 dark:text-gray-200">Building your solution with regular updates and feedback.</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-orange-600">4</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Launch</h3>
                            <p className="text-gray-600 dark:text-gray-200">Deploying your project and providing ongoing support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Lets discuss how I can help bring your vision to life with a custom solution.
                    </p>
                    <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                        <Link href="/contact">Start Your Project</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
