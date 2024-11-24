import React from 'react';
import { Heart, Utensils, LineChart, Shield, ChevronRight, Apple, Activity, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-emerald-50 to-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">DiabetesCare</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-emerald-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-emerald-600">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-emerald-600">Pricing</a>
          </div>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
            Get Started
          </button>
        </nav>

        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Smart Nutrition Plans for Better Diabetes Management
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Personalized meal plans that adapt to your insulin needs. Track, manage, and live healthier with AI-powered nutrition guidance.
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors flex items-center">
                Start Free Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80"
              alt="Healthy meal"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Smart Features for Better Health
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Meal Plans</h3>
              <p className="text-gray-600">
                AI-generated meal plans that adapt to your glucose levels and insulin intake.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <LineChart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Insulin Tracking</h3>
              <p className="text-gray-600">
                Easy insulin logging with smart reminders and trend analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Health Insights</h3>
              <p className="text-gray-600">
                Detailed analytics and recommendations based on your health data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-emerald-50" id="how-it-works">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Apple className="h-10 w-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">1. Log Your Meals</h3>
              <p className="text-gray-600">
                Simply input what you eat and when. Our system learns your preferences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Activity className="h-10 w-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">2. Track Insulin</h3>
              <p className="text-gray-600">
                Record your insulin doses and glucose readings for personalized advice.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Clock className="h-10 w-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">3. Get Recommendations</h3>
              <p className="text-gray-600">
                Receive real-time meal suggestions and insulin timing recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white" id="pricing">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border-2 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-6">$9<span className="text-lg text-gray-600">/mo</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-emerald-600 mr-2" />
                  Basic meal planning
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-emerald-600 mr-2" />
                  Insulin tracking
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-emerald-600 mr-2" />
                  Email support
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors">
                Get Started
              </button>
            </div>
            <div className="border-2 border-emerald-600 rounded-xl p-8 bg-gradient-to-b from-emerald-50 to-white relative hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">$19<span className="text-lg text-gray-600">/mo</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-emerald-600 mr-2" />
                  Advanced meal planning
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-emerald-600 mr-2" />
                  Insulin tracking & analytics
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-emerald-600 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-emerald-600 mr-2" />
                  Custom recipes
                </li>
              </ul>
              <button className="w-full py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="border-2 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-6">$49<span className="text-lg text-gray-600">/mo</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-emerald-600 mr-2" />
                  All Pro features
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-emerald-600 mr-2" />
                  API access
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-emerald-600 mr-2" />
                  24/7 phone support
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-emerald-600 mr-2" />
                  Custom integration
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="h-6 w-6 text-emerald-400" />
                <span className="text-lg font-bold">DiabetesCare</span>
              </div>
              <p className="text-gray-400">
                Making diabetes management easier through smart nutrition.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">Features</a></li>
                <li><a href="#" className="hover:text-emerald-400">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-400">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">About</a></li>
                <li><a href="#" className="hover:text-emerald-400">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">Privacy</a></li>
                <li><a href="#" className="hover:text-emerald-400">Terms</a></li>
                <li><a href="#" className="hover:text-emerald-400">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DiabetesCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;