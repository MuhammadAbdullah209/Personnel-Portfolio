const PROJECTS = [
    {
        id: "todo", title: "To-Do App", type: "Frontend", status: "Completed",
        image: "Assets/To-Do.png",
        tagline: "A simple, fast task manager that remembers your tasks.",
        overview: "A clean task manager built with vanilla JavaScript. Tasks are saved in the browser so nothing is lost on refresh.",
        features: ["Add, edit, complete and delete tasks", "Tasks persist with localStorage", "Interactive, responsive UI", "Instant updates without page reload"],
        tech: ["HTML", "CSS", "JavaScript"],
        challenge: "Keeping the UI and the stored data perfectly in sync.",
        solution: "A single render function rebuilds the list from the saved array after every change.",
        links: []
    },
    {
        id: "ecommerce", title: "E-Commerce Store", type: "Full Stack", status: "Completed",
        image: "Assets/E-commerce-landing-page.jpeg",
        tagline: "A responsive MERN store with secure authentication.",
        overview: "A full-stack e-commerce application with product management, user authentication and a clean shopping interface.",
        features: ["Secure login and registration", "Product management", "Cart and checkout flow", "Fully responsive design"],
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        challenge: "Protecting routes and managing user sessions safely.",
        solution: "JWT-based authentication with protected API routes and middleware.",
        links: [{ label: "GitHub Repo", url: "https://github.com/MuhammadAbdullah209/E-commerce-Store-Frontend" }]
    },
    {
        id: "travel", title: "Travel Agency Website", type: "Frontend", status: "Live",
        image: "Assets/gobirdie.png",
        tagline: "A modern travel site with destination cards and booking.",
        overview: "A dynamic travel agency website featuring destination cards, a booking form and a smooth user experience.",
        features: ["Destination cards", "Booking form", "Smooth animations", "Mobile friendly layout"],
        tech: ["React", "CSS"],
        challenge: "Making a media-heavy layout feel fast on mobile.",
        solution: "Reusable card components and optimized responsive grids.",
        links: [{ label: "Live Demo", url: "https://react-project-final-zeta.vercel.app/", primary: true }]
    },
    {
        id: "realestate", title: "Real Estate Website", type: "Full Stack", status: "Live",
        image: "Assets/realestate.png",
        tagline: "Property listings with filtering and authentication.",
        overview: "A real estate app with property listings, search filters, user authentication and backend API integration.",
        features: ["Property listings", "Filtering and search", "User authentication", "REST API backend"],
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        challenge: "Combining several filters without slow queries.",
        solution: "Query-building on the backend that only applies the filters the user selected.",
        links: [{ label: "Live Demo", url: "https://dreamestate-frontend.vercel.app/", primary: true }]
    },
    {
        id: "lms", title: "Learning Management System", type: "Full Stack", status: "In Development",
        image: "Assets/LMS.png",
        tagline: "Courses, users and progress tracking in one platform.",
        overview: "A complete LMS with user registration, course creation and progress tracking. Currently under development.",
        features: ["User registration and roles", "Course creation", "Progress tracking", "Relational data with Prisma"],
        tech: ["MERN", "Prisma", "PostgreSQL"],
        challenge: "Designing a relational schema for users, courses and progress.",
        solution: "Prisma models with clear relations and migrations.",
        links: []
    },
    {
        id: "weather", title: "Weather App", type: "Frontend", status: "Completed",
        image: "https://via.placeholder.com/400x220",
        tagline: "Live weather data for any city.",
        overview: "An interactive weather app that fetches live data from the OpenWeather API and displays it dynamically.",
        features: ["Search any city", "Live temperature and conditions", "Dynamic UI updates", "Error handling for invalid cities"],
        tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
        challenge: "Handling API errors and empty results gracefully.",
        solution: "Async/await with try/catch and friendly error messages.",
        links: [{ label: "GitHub Repo", url: "https://github.com/MuhammadAbdullah209/Weather-App" }]
    },
    {
        id: "music", title: "Music Player", type: "Frontend", status: "Completed",
        image: "Assets/Music PLayer.png",
        tagline: "Search and play music with the Spotify API.",
        overview: "A modern music player built with React and the Spotify API, with dynamic search, playlists and a responsive UI.",
        features: ["Music search", "Playlists", "Responsive player UI", "Spotify API integration"],
        tech: ["React.js", "Spotify API", "CSS", "JavaScript"],
        challenge: "Handling Spotify authentication tokens.",
        solution: "Token handling in a dedicated module with refresh logic.",
        links: [{ label: "GitHub Repo", url: "https://github.com/MuhammadAbdullah209" }] /* TODO: put the real Music Player repo URL */
    },
    {
        id: "pos", title: "Inventory Management & POS", type: "Full Stack", status: "Live",
        image: "Assets/Inventory.png",
        tagline: "Stock tracking and sales in real time.",
        overview: "A complete inventory and point-of-sale system with product management, stock tracking, sales processing and reporting.",
        features: ["Product and stock management", "Sales processing", "Real-time inventory updates", "Reports"],
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        challenge: "Keeping stock accurate when many sales happen quickly.",
        solution: "Server-side stock updates tied to every completed sale.",
        links: [{ label: "Live Demo", url: "https://inventory-charm-main.vercel.app/login", primary: true }]
    },
    {
        id: "triplebuzz", title: "Triple Buzz Smoke Shop", type: "Client Project", status: "Live",
        image: "Assets/TripleBuzz.png",
        tagline: "A complete e-commerce site delivered to a US client.",
        overview: "An e-commerce website for a US-based shop with categorized browsing, a hero slider, cart and checkout, and user accounts.",
        features: ["Categorized product browsing", "Hero slider", "Cart and checkout", "User accounts", "Fully responsive design"],
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        challenge: "Meeting real client requirements and deadlines.",
        solution: "Iterative delivery with regular client feedback.",
        links: [{ label: "Live Website", url: "https://triplebuzzsmokeshop.com/", primary: true }]
    },
    {
        id: "doubleapple", title: "Double Apple Smoke Shop", type: "Client Project", status: "Live",
        image: "Assets/DoubleApple.png",
        tagline: "A bold, feature-rich store built for a US client.",
        overview: "An e-commerce website with a bold hero banner, categories, search, wishlist, cart, user accounts and a blog.",
        features: ["Hero banner", "Search and categories", "Wishlist and cart", "User accounts", "Blog"],
        tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
        challenge: "Building many features while keeping the site fast.",
        solution: "Reusable components and lazy-loaded sections.",
        links: [{ label: "Live Website", url: "https://doubleapplesmokeshop.com/", primary: true }]
    }
];