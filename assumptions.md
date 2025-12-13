# Assumptions & Decisions

## Language
- Code and documentation: English
- Git commits and branch names: English

## Tech Stack:
- Next.js 16.0.10 ->Main framework with App Router 
- React 19.2.1    ->Latest version, React 19
- Typescript 5    ->Strict mode enabled (Early error detection)
- SWR 2.3.7       ->Data fetching with caching (Because the users of the application usually travel a lot and are in places with bad or unstable internet connections)
- Tailwind CSS 4  ->Styling 

## Architecture:
- Next.js App Router: Uses the new folder-based routing system
- Server/Client Components: Explicit separation with "use client" where interactivity is needed
- public/ -> svg/icons
- src/ 
    - app/ -> Pages, layouts and not-found
    - components/ -> Reusable UI components
    - types/ -> Typescript types and interfaces 
    - utils/ -> Utilities

## Route Structure
- /           -> Home (Server Component)
- /posts      -> Posts list with search (Client Component)

## UX Assumptions
- User may have slow connection: Visual notification is displayed (managed with SWR)
- Search is by userId: (not free text) to filter posts from a specific user
- Responsive design: Mobile and desktop

## Code Conventions
- Path aliases: '@/' for absolute imports
- Naming: PascalCase for components, Lowercase for folders

## To Improve
- Add Environment variables
- Testing

## API
- JSONPlaceholder 