# Assumptions & Decisions

## Tech Stack:
- Next.js 16.0.10 Main framework with App Router 
- React 19.2.1    Latest version, React 19
- Typescript 5    Strict mode enabled (Early error detection)
- SWR 2.3.7       Data fetching with caching (Because the users of the application usually travel a lot and are in places with bad or unstable internet connections)
- Tailwind CSS 4  Styling 

## Architecture:
- Next.js App Router: Uses the new folder-based routing system
- Server/Client Components: Explicit separation with "use client" where interactivity is needed
- public/ -> svg/icons
- src/ 
    - app/ -> Pages, layouts and not-found
    - components/ -> Reusable UI components
    - types/ -> Typescript types and interfaces 
    - utils/ -> Utilities

## 