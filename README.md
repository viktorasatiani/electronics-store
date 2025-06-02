# ByteShop - Modern Electronics E-commerce Platform

![ByteShop](https://img.shields.io/badge/Next.js-15.1.6-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38bdf8?logo=tailwindcss)
![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)

**ByteShop** is a modern, full-featured e-commerce platform specialized in electronics. Built with Next.js 15, TypeScript, and cutting-edge UI components, it provides a seamless shopping experience for technology enthusiasts.

## 🌐 **Live Demo**

🔗 **[Visit ByteShop Live](https://electronics-store-viktors-projects-b3645ca6.vercel.app/)**

Experience the full functionality of ByteShop with our live deployment on Vercel. Explore categories, add items to cart, and test the complete e-commerce workflow!

## 🚀 Features

### 🛍️ **E-commerce Core**

- **Product Catalog**: Browse through 8 main categories of electronics
- **Shopping Cart**: Add/remove items with real-time updates
- **Checkout System**: Complete order processing with form validation
- **Order Management**: Track and view order history
- **Product Search**: Find products quickly with search functionality

### 🔐 **Authentication System**

- **User Registration**: Create new accounts with email/password
- **Login/Logout**: Secure authentication flow
- **Account Management**: View profile and order history
- **Protected Routes**: Access control for authenticated users

### 📱 **Product Categories**

Browse through carefully curated categories:

- **Computers** - Laptops, desktops, and accessories
- **Mobile** - Smartphones and mobile accessories
- **Drones & Cameras** - Photography and videography equipment
- **Tablets** - iPads, Android tablets, and accessories
- **TV & Home Cinema** - Entertainment systems
- **Wearable Tech** - Smartwatches and fitness trackers
- **Speakers** - Audio equipment and sound systems
- **Headphones** - Audio devices and accessories

### 🎨 **Modern UI/UX**

- **Responsive Design**: Optimized for all device sizes
- **Animated Backgrounds**: Dynamic hero section with rotating images
- **Interactive Components**: Hover effects, accordions, and carousels
- **Modern Components**: Built with Radix UI and shadcn/ui
- **Dark/Light Mode Support**: Theme customization
- **Loading States**: Smooth user experience with skeleton loaders

### 📄 **Additional Pages**

- **About Us**: Company information and career opportunities
- **Contact**: Customer support and inquiries
- **Help Center**: FAQ and customer support
- **Shipping & Returns**: Policy information
- **Terms & Conditions**: Legal information

## 🛠️ **Tech Stack**

### **Frontend**

- **Framework**: Next.js 15.1.6 with App Router
- **Language**: TypeScript 5.0
- **Styling**: TailwindCSS 3.4.1 + Custom CSS
- **UI Components**:
  - Radix UI primitives
  - shadcn/ui components
  - Lucide React icons
  - React Icons

### **State Management & Data**

- **Query Management**: TanStack Query (React Query) 5.66.0
- **Form Handling**: React Hook Form 7.56.4 with Zod validation
- **Context API**: Cart, Filter/Sort, and Navigation state

### **Backend & Database**

- **Backend Service**: Appwrite (node-appwrite 16.0.0)
- **Authentication**: Appwrite Auth
- **Database**: Appwrite Database
- **File Storage**: Appwrite Storage

### **Development Tools**

- **Package Manager**: npm
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier with TailwindCSS plugin
- **Build Tool**: Next.js with Turbopack (dev mode)

### **Additional Libraries**

- **Animations**: Animate.css 4.1.1
- **Date Handling**: date-fns 3.6.0
- **Notifications**: React Hot Toast 2.5.1
- **Image Carousel**: Embla Carousel React 8.5.2
- **Loading Spinners**: React Loader Spinner 6.1.6
- **Utility**: clsx, tailwind-merge, class-variance-authority

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### **Installation**

1. **Clone the repository**

```bash
git clone https://github.com/viktorasatiani/electronics-store.git
cd electronics-store
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

```env
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID=your_storage_bucket_id

# Add other required environment variables
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 **Project Structure**

```
electronics-store/
├── app/                          # Next.js App Router
│   ├── (pages)/                 # Route groups
│   │   ├── about/               # About page
│   │   ├── account/             # User account pages
│   │   ├── category/            # Product categories
│   │   ├── checkout/            # Checkout process
│   │   ├── contact/             # Contact page
│   │   ├── help/                # Help center
│   │   ├── login/               # Authentication
│   │   └── ...                  # Other pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # Reusable components
│   ├── ui/                      # Base UI components (shadcn/ui)
│   ├── header/                  # Header components
│   ├── footer/                  # Footer components
│   ├── cart/                    # Shopping cart
│   ├── category/                # Category-specific components
│   └── ...                      # Other component folders
├── context/                      # React Context providers
├── lib/                         # Utility functions and configurations
│   ├── appwrite/                # Appwrite client and functions
│   ├── tanstack-query/          # React Query configurations
│   └── utils.ts                 # Utility functions
├── public/                       # Static assets
│   ├── heroImages/              # Hero section images
│   ├── category/                # Category images
│   └── ...                      # Other assets
└── services/                     # API services
```

## 🎯 **Key Features Details**

### **Shopping Experience**

- **Product Browsing**: Navigate through categories with filtering and sorting
- **Product Details**: Detailed product pages with descriptions and images
- **Add to Cart**: Seamless cart management with quantity controls
- **Checkout**: Complete order processing with user information
- **Order Tracking**: View order history and details

### **User Management**

- **Registration**: Create accounts with email verification
- **Authentication**: Secure login/logout functionality
- **Profile Management**: Update user information
- **Order History**: Track past purchases and order status

### **Responsive Design**

- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Perfect experience on tablets
- **Desktop**: Full-featured desktop experience
- **Touch-Friendly**: Optimized for touch interactions

## 🚦 **Available Scripts**

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🙏 **Acknowledgments**

- [Next.js](https://nextjs.org/) for the amazing React framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [shadcn/ui](https://ui.shadcn.com/) for beautiful component library
- [Appwrite](https://appwrite.io/) for backend services
- [TanStack Query](https://tanstack.com/query) for data fetching and caching

---
