# Streaver Entry Level Project

A modern Next.js application for viewing and searching posts.

## Features

- Server and Client Components with explicit separation
- Optimized for slow/unstable connections (SWR caching)
- Visual notification for slow connection status
- Search posts by user ID
- Pagination limited to 10 posts
- Responsive design (mobile & desktop)
- Custom 404 page

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/gastonjau/entry-level-streaver.git

# Navigate to project directory
cd streaverEntryLevel

# Install dependencies
npm install
```

### Environment Variables

This project requires environment variables to work correctly. Follow these steps:

1. Copy the `.env.template` file to create your own `.env` file:

```bash
cp .env.template .env
```

2. The `.env.template` file contains the following variables:

```
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
```

3. You can modify the API URL if you want to use a different backend.

### Running the Application

```bash
# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

The application will be available at `http://localhost:3000`

**Development:**
- Local: `http://localhost:3000`

**Production:**
- Live: `https://entry-level-streaver.vercel.app/` [Go](https://entry-level-streaver.vercel.app/) 

## License

This project is private.


