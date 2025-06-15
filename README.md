# Globomantics - Next.js 13 Demo Project

This project demonstrates the new features and capabilities of Next.js 13, particularly focusing on the App Router architecture that was introduced as an experimental feature when Next.js 13 was first released.

## Project Overview

Globomantics is a demo application showcasing a fictional company's website with multiple sections including a home page, blog, conference information (with speakers and sessions), and settings. The project serves as an excellent example of how to implement and utilize Next.js 13's new app directory structure.

## Technology Stack

- **Next.js 13.0.2**: Utilizing the experimental App Router (`app/` directory)
- **React 18.2.0**: For building the user interface components
- **@next/font**: For optimized font loading and usage
- **CSS Modules**: For component-scoped styling
- **Next.js Image Component**: For optimized image loading and display

## Key Features

### App Router Implementation

This project demonstrates the transition from the traditional `pages/` directory to the new `app/` directory structure, which enables:

- Nested layouts with improved composition
- Co-located components, styles, and tests
- Server-first approach with Client Components
- Enhanced routing with support for layouts, nested routing, and more

### Project Structure

- `app/`: Contains all the routes and layouts using the new App Router
  - `layout.js`: Root layout that wraps all pages
  - `page.js`: Root page component
  - `home/`: Home page section
  - `conference/`: Conference section with nested routes for speakers and sessions
  - `blog/`: Blog section
  - `settings/`: Settings section

### Styling Approach

The project uses a combination of:
- CSS Modules (`.module.css` files) for component-scoped styling
- Global CSS for application-wide styles

### Image Optimization

Demonstrates Next.js Image component with:
- Automatic image optimization
- Lazy loading
- Placeholder images during loading
- Responsive images with the `sizes` attribute

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Key Concepts Demonstrated

- Nested layouts using the App Router
- Route groups and organization
- Server and Client Components
- Data fetching within React components
- Image optimization with Next.js Image component
- Navigation using the new Link component
- CSS Modules for component-level styling

## Learn More

- [Next.js 13 Documentation](https://nextjs.org/docs)
- [App Router Documentation](https://nextjs.org/docs/app)
- [React 18 Documentation](https://reactjs.org/docs/getting-started.html)

## License

This project is licensed under the terms of the license included in the repository.
