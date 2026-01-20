import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Search, Heart, Twitter, Facebook, Instagram, Linkedin, Coffee, IceCream, Cake } from 'lucide-react';

// Mock data
const coffeeProducts = [
    { id: 1, name: 'Lungo Coffee', description: 'Rich and bold espresso', price: 199, image: 'lungo' },
    { id: 2, name: 'Dalgona Coffee', description: 'Whipped coffee delight', price: 159, image: 'dalgona' },
    { id: 3, name: 'Iced Coffee', description: 'Refreshing cold brew', price: 189, image: 'iced' },
    { id: 4, name: 'Filter Coffee', description: 'Traditional South Indian', price: 99, image: 'filter' },
    { id: 5, name: 'Cappuccino', description: 'Classic Italian coffee', price: 149, image: 'lungo' },
];

const dessertProducts = [
    { id: 1, name: 'Gulab Jamun', description: 'Sweet Indian delicacy', price: 199, image: 'gulab' },
    { id: 2, name: 'Chocolate Tiramisu', description: 'Layered Italian dessert', price: 299, image: 'tiramisu' },
    { id: 3, name: 'Churros', description: 'Crispy Spanish treat', price: 179, image: 'churros' },
    { id: 4, name: 'Australian Lamingtons', description: 'Chocolate coconut cakes', price: 250, image: 'lamingtons' },
    { id: 5, name: 'Brownie Special', description: 'Rich chocolate brownie', price: 149, image: 'gulab' },
];

const testimonials = [
    {
        id: 1,
        name: 'John Williams',
        text: 'Amazing coffee! The atmosphere is cozy and the baristas really know their craft. The lungo coffee is my absolute favorite. Highly recommend to all coffee lovers!',
        avatar: 'customer1',
    },
    {
        id: 2,
        name: 'Mary Williams',
        text: 'Best coffee shop in the city! I come here every morning for my dalgona coffee. The desserts are also incredible. The tiramisu is a must-try!',
        avatar: 'customer2',
    },
    {
        id: 3,
        name: 'Emma Davidson',
        text: 'I\'m in love with this place! The quality of coffee beans is exceptional, and you can really taste the difference. Great service and wonderful ambiance.',
        avatar: 'customer3',
    },
];

function App() {
    return (
        <div className="bg-beige-100 min-h-screen">
            {/* Navbar & Hero */}
            <div className="relative h-[480px] mx-4 mt-6 rounded-3xl overflow-hidden shadow-xl">
                {/* Hero Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brown-900/85 to-brown-700/75">
                    <img
                        src="/images/hero-coffee.jpg"
                        alt="Hero"
                        className="w-full h-full object-cover mix-blend-overlay"
                    />
                </div>

                {/* Navbar */}
                <nav className="relative z-10 px-8 py-5 bg-gradient-to-b from-black/50 to-transparent">
                    <div className="max-w-[1150px] mx-auto flex items-center justify-between">
                        <div className="text-white text-xl font-bold tracking-[2px]">COFFEE</div>

                        <ul className="hidden md:flex items-center gap-8">
                            {['HOME', 'COFFEE', 'BAKERY', 'SHOP', 'ABOUT'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-white text-[11px] font-medium tracking-[1.5px] hover:opacity-70 transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-5">
                            <a href="#login" className="text-white text-[11px] font-medium tracking-[1.5px] hover:opacity-70 transition">
                                LOGIN
                            </a>
                            <button className="text-white hover:opacity-70 transition" aria-label="Search">
                                <Search size={18} />
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className="relative z-10 max-w-[1150px] mx-auto px-20 pt-16">
                    <p className="text-white/90 text-base mb-3">Welcome!</p>
                    <h1 className="text-white text-5xl font-bold leading-tight mb-8 max-w-lg">
                        We serve the richest coffee in the city!
                    </h1>
                    <button className="bg-brown-900 hover:bg-brown-800 text-white px-8 py-3 rounded-full font-medium transition transform hover:-translate-y-1 hover:shadow-xl">
                        Order Now
                    </button>
                </div>
            </div>

            {/* Icon Features */}
            <section className="py-12 max-w-[1150px] mx-auto">
                <div className="flex justify-center items-center gap-10">
                    {[
                        { icon: Coffee, label: 'Hot Coffee' },
                        { icon: Coffee, label: 'Cold Coffee' },
                        { icon: Coffee, label: 'Cup Coffee' },
                        { icon: Cake, label: 'Dessert' },
                    ].map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3">
                            <div className="text-brown-700">
                                <feature.icon size={40} strokeWidth={1.5} />
                            </div>
                            <p className="text-brown-700 text-sm font-medium">{feature.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Special Coffee Slider */}
            <section className="py-16 max-w-[1150px] mx-auto px-4">
                <h2 className="text-center text-xl font-semibold tracking-[2px] text-brown-900 mb-12">
                    OUR SPECIAL COFFEE
                </h2>

                <div className="relative px-12">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="!pb-12"
                    >
                        {coffeeProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Special Dessert Slider */}
            <section className="py-16 max-w-[1150px] mx-auto px-4">
                <h2 className="text-center text-xl font-semibold tracking-[2px] text-brown-900 mb-12">
                    OUR SPECIAL DESSERT
                </h2>

                <div className="relative px-12">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="!pb-12"
                    >
                        {dessertProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Promotion Banner */}
            <section className="py-20">
                <div className="max-w-[1150px] mx-auto flex items-center justify-center gap-16 px-4">
                    <div className="hidden lg:block flex-shrink-0">
                        <img src="/images/coffee-beans-left.png" alt="Coffee beans" className="w-44 h-auto" />
                    </div>

                    <div className="text-center max-w-md">
                        <h2 className="text-3xl font-semibold text-brown-900 mb-6 leading-snug">
                            Check out our best coffee beans
                        </h2>
                        <button className="bg-brown-900 hover:bg-brown-800 text-white px-7 py-2.5 rounded-full text-sm font-medium transition">
                            Explore our products
                        </button>
                    </div>

                    <div className="hidden lg:block flex-shrink-0">
                        <img src="/images/coffee-beans-right.png" alt="Coffee beans" className="w-44 h-auto" />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-beige-50">
                <div className="max-w-[1150px] mx-auto px-4">
                    <p className="text-center text-brown-700 italic mb-2">Come and join</p>
                    <h2 className="text-center text-xl font-semibold tracking-[2px] text-brown-900 mb-12">
                        OUR HAPPY CUSTOMERS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-2xl p-7 shadow-md">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={`/images/${testimonial.avatar}.jpg`}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-brown-900 text-base">{testimonial.name}</h4>
                                        <div className="flex gap-1 mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 fill-yellow-500" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-brown-700 text-sm leading-relaxed">{testimonial.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-3">
                        <span className="w-2.5 h-2.5 bg-brown-900 rounded-full"></span>
                        <span className="w-7 h-2.5 bg-brown-900 rounded-md"></span>
                        <span className="w-2.5 h-2.5 bg-beige-300 rounded-full"></span>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20">
                <div className="max-w-[1150px] mx-auto flex items-center justify-center gap-16 px-4">
                    <div className="hidden lg:block flex-shrink-0">
                        <img src="/images/coffee-beans-left.png" alt="Coffee beans" className="w-44 h-auto" />
                    </div>

                    <div className="text-center max-w-lg">
                        <h2 className="text-3xl font-bold text-brown-900 mb-3">Join in and get 15% Off!</h2>
                        <p className="text-brown-700 text-sm mb-7 leading-relaxed">
                            Subscribe to our newsletter to receive early discount offers, updates and new products info.
                        </p>

                        <form className="flex gap-3 bg-white p-1.5 rounded-full shadow-lg max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 px-6 py-3 outline-none text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-brown-900 hover:bg-brown-800 text-white px-8 py-3 rounded-full font-medium transition text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className="hidden lg:block flex-shrink-0">
                        <img src="/images/coffee-beans-right.png" alt="Coffee beans" className="w-44 h-auto" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-brown-900 text-white py-16">
                <div className="max-w-[1150px] mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-12">
                        <div className="col-span-2 md:col-span-1">
                            <h3 className="text-xl font-bold tracking-[2px]">COFFEE</h3>
                        </div>

                        <div>
                            <h4 className="text-xs font-semibold tracking-wider mb-5 text-white/90">PRIVACY</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm text-white/70 hover:text-white transition">Privacy Policy</a></li>
                                <li><a href="#" className="text-sm text-white/70 hover:text-white transition">Terms & Conditions</a></li>
                                <li><a href="#" className="text-sm text-white/70 hover:text-white transition">Cookie Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-semibold tracking-wider mb-5 text-white/90">SERVICES</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm text-white/70 hover:text-white transition">Shop</a></li>
                                <li><a href="#" className="text-sm text-white/70 hover:text-white transition">Delivery</a></li>
                                <li><a href="#" className="text-sm text-white/70 hover:text-white transition">Catering</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-semibold tracking-wider mb-5 text-white/90">ABOUT US</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm text-white/70 hover:text-white transition">Our Story</a></li>
                                <li><a href="#" className="text-sm text-white/70 hover:text-white transition">Coffee Experts</a></li>
                                <li><a href="#" className="text-sm text-white/70 hover:text-white transition">Locations</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-semibold tracking-wider mb-5 text-white/90">INFORMATION</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm text-white/70 hover:text-white transition">Contact Us</a></li>
                                <li><a href="#" className="text-sm text-white/70 hover:text-white transition">FAQs</a></li>
                                <li><a href="#" className="text-sm text-white/70 hover:text-white transition">Careers</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-semibold tracking-wider mb-5 text-white/90">SOCIAL MEDIA</h4>
                            <div className="flex gap-4">
                                <a href="#" className="text-white/70 hover:text-white hover:-translate-y-1 transition">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="text-white/70 hover:text-white hover:-translate-y-1 transition">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="text-white/70 hover:text-white hover:-translate-y-1 transition">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="text-white/70 hover:text-white hover:-translate-y-1 transition">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Product Card Component
function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="relative aspect-square bg-beige-50">
                <img
                    src={`/images/${product.image}-coffee.jpg`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
                <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition group">
                    <Heart size={18} className="text-brown-700 group-hover:fill-red-500 group-hover:text-red-500" />
                </button>
            </div>

            <div className="p-5">
                <h3 className="font-semibold text-brown-900 text-base mb-1">{product.name}</h3>
                <p className="text-brown-700 text-xs mb-3">{product.description}</p>

                <div className="flex items-center justify-between">
                    <span className="font-semibold text-brown-900 text-sm">Rs. {product.price}</span>
                    <button className="bg-brown-900 hover:bg-brown-800 text-white px-5 py-1.5 rounded-full text-xs font-medium transition">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
