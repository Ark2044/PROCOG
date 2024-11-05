"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaShieldAlt,
  FaUserCog,
  FaUserCheck,
  FaUserTie,
  FaClipboardList,
} from "react-icons/fa";
import Image from "next/image";
import { useAuthStore } from "@/store/Auth";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const { session, verifySession } = useAuthStore();

  React.useEffect(() => {
    // Check for session on page load
    verifySession();
  }, [verifySession]);

  React.useEffect(() => {
    // Redirect if authenticated
    if (session) {
      const user = useAuthStore.getState().user;
      router.push(`/dashboard/${user?.$id}`);
    }
  }, [session, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Effortlessly Manage Your Risks
            </h1>
            <p className="text-gray-600 text-lg">
              Our platform empowers you to identify, assess, and mitigate risks
              with ease. Get started today and take control of your
              organization&apos;s future.
            </p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <a
                href="/register"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Pricing
              </a>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Image
              src="/hero-illustration.svg"
              alt="Hero Illustration"
              className="max-w-md"
              width={400}
              height={400}
            />
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaChartLine,
                color: "blue",
                title: "Advanced Analytics",
                description:
                  "Gain valuable insights through our comprehensive analytics dashboard, helping you make data-driven decisions.",
              },
              {
                icon: FaShieldAlt,
                color: "green",
                title: "Risk Mitigation",
                description:
                  "Proactively identify and mitigate risks, ensuring your organization is prepared for potential challenges.",
              },
              {
                icon: FaUserCog,
                color: "yellow",
                title: "Customizable Settings",
                description:
                  "Tailor the platform to your unique needs with our flexible settings, ensuring a seamless experience.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              >
                <div
                  className={`bg-${feature.color}-50 p-3 rounded-lg text-${feature.color}-600 inline-block`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaUserCheck,
                color: "green",
                title: "Streamlined Compliance",
                description:
                  "Ensure your organization remains compliant with industry regulations and standards.",
              },
              {
                icon: FaUserTie,
                color: "blue",
                title: "Improved Decision-Making",
                description:
                  "Make informed decisions based on comprehensive risk data and analysis.",
              },
              {
                icon: FaClipboardList,
                color: "yellow",
                title: "Centralized Risk Management",
                description:
                  "Consolidate all your risk-related information and activities in one convenient platform.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
              >
                <div
                  className={`bg-${benefit.color}-50 p-3 rounded-lg text-${benefit.color}-600 inline-block`}
                >
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-blue-600 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 space-y-4">
              <h2 className="text-3xl font-extrabold text-white">
                Take Control of Your Risks
              </h2>
              <p className="text-blue-100">
                Sign up today and start managing your risks with our powerful
                platform. Get started in minutes.
              </p>
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/register">Get Started</a>
              </motion.div>
            </div>
            <div className="hidden md:block relative">
              <Image
                src="/cta-illustration.svg"
                alt="CTA Illustration"
                className="absolute inset-0 w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Alice Johnson",
                role: "Project Manager",
                feedback:
                  "This platform has transformed how we manage risks. The analytics are top-notch!",
              },
              {
                name: "John Doe",
                role: "Risk Analyst",
                feedback:
                  "I love the customization options! It fits perfectly with our workflows.",
              },
              {
                name: "Emma Brown",
                role: "Compliance Officer",
                feedback:
                  "A must-have tool for any organization serious about risk management.",
              },
              {
                name: "Michael Smith",
                role: "CEO",
                feedback:
                  "Excellent support and a user-friendly interface. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.2, duration: 0.6 }}
              >
                <p className="text-gray-600 italic">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <h4 className="text-lg font-semibold text-gray-900 mt-4">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
