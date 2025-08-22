import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
                    {/* Swiggy Branding */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <img 
                                src="https://i.pinimg.com/1200x/d6/1e/84/d61e847019cb5be3f074b170f24af627.jpg" 
                                alt="Swiggy Logo" 
                                className="w-12 h-12 object-cover rounded-lg mr-3"
                            />
                            <span className="text-2xl font-bold text-gray-800">Swiggy</span>
                        </div>
                        <p className="text-gray-600 text-sm">© 2025 Swiggy Limited</p>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Swiggy Corporate</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Team</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Swiggy One</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Swiggy Instamart</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Swiggy Dineout</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Swiggy Genie</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Minis</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Pyng</a></li>
                        </ul>
                    </div>

                    {/* Contact us */}
                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-gray-800 mb-4">Contact us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Help & Support</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Partner with us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Ride with us</a></li>
                        </ul>
                    </div>

                    {/* Available in */}
                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-gray-800 mb-4">Available in</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Bangalore</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Gurgaon</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Hyderabad</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Delhi</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Mumbai</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Pune</a></li>
                            <li className="pt-2">
                                <select className="text-gray-600 text-sm bg-transparent border-none focus:outline-none">
                                    <option>47 cities</option>
                                </select>
                            </li>
                        </ul>
                    </div>

                    {/* Life at Swiggy */}
                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-gray-800 mb-4">Life at Swiggy</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Explore with Swiggy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Swiggy News</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Snackables</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Investor Relations</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center mb-8">
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-300 mb-8" />

                {/* App Download Section */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-gray-700 font-medium">
                            For better experience, download the Swiggy app now
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.5 12.707l2.302 2.302-10.937 6.732 8.635-9.034zM14.5 11.293L5.865 2.259l10.937 6.732L14.5 11.293z"/>
                            </svg>
                            <div className="text-left">
                                <div className="text-xs">GET IT ON</div>
                                <div className="text-sm font-semibold">Google Play</div>
                            </div>
                        </button>
                        <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <div className="text-left">
                                <div className="text-xs">Download on the</div>
                                <div className="text-sm font-semibold">App Store</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
