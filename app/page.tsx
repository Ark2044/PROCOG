"use client";
import { useEffect } from "react";
import Link from "next/link";
import { FaChartLine, FaShieldAlt, FaUserCog } from "react-icons/fa";
import Image from "next/image";
import { useAuthStore } from "@/store/Auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { session, verifySession } = useAuthStore();

  useEffect(() => {
    // Check for session on page load
    verifySession();
  }, [verifySession]);

  useEffect(() => {
    // Redirect if authenticated
    if (session) {
      const user = useAuthStore.getState().user; // Access user from the store
      router.push(`/dashboard/${user?.$id}`);
    }
  }, [session, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Effortlessly Manage Your Risks
            </h1>
            <p className="text-gray-600 text-lg">
              Our platform empowers you to identify, assess, and mitigate risks
              with ease. Get started today and take control of your
              organization&apos;s future.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/register"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/hero-illustration.svg"
              alt="Hero Illustration"
              className="max-w-md"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600 inline-block">
                <FaChartLine className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Advanced Analytics
              </h3>
              <p className="text-gray-600">
                Gain valuable insights through our comprehensive analytics
                dashboard, helping you make data-driven decisions.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
              <div className="bg-green-50 p-3 rounded-lg text-green-600 inline-block">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Risk Mitigation
              </h3>
              <p className="text-gray-600">
                Proactively identify and mitigate risks, ensuring your
                organization is prepared for potential challenges.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
              <div className="bg-yellow-50 p-3 rounded-lg text-yellow-600 inline-block">
                <FaUserCog className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Customizable Settings
              </h3>
              <p className="text-gray-600">
                Tailor the platform to your unique needs with our flexible
                settings, ensuring a seamless experience.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 space-y-4">
              <h2 className="text-3xl font-extrabold text-white">
                Take Control of Your Risks
              </h2>
              <p className="text-blue-100">
                Sign up today and start managing your risks with our powerful
                platform. Get started in minutes.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
            <div className="hidden md:block relative">
              <Image
                src="/cta-illustration.svg"
                alt="CTA Illustration"
                className="absolute inset-0 w-full h-full object-cover"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
