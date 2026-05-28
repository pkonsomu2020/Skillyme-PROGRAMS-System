# Architecture Overview

<cite>
**Referenced Files in This Document**
- [main.tsx](file://src/main.tsx)
- [router.tsx](file://src/router.tsx)
- [__root.tsx](file://src/routes/__root.tsx)
- [routeTree.gen.ts](file://src/routeTree.gen.ts)
- [index.tsx](file://src/routes/index.tsx)
- [Header.tsx](file://src/components/site/Header.tsx)
- [Footer.tsx](file://src/components/site/Footer.tsx)
- [button.tsx](file://src/components/ui/button.tsx)
- [utils.ts](file://src/lib/utils.ts)
- [start.ts](file://src/start.ts)
- [package.json](file://package.json)
- [tsconfig.json](file://tsconfig.json)
- [vite.config.ts](file://vite.config.ts)
- [vercel.json](file://vercel.json)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Architecture Overview](#architecture-overview)
5. [Detailed Component Analysis](#detailed-component-analysis)
6. [Dependency Analysis](#dependency-analysis)
7. [Performance Considerations](#performance-considerations)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Conclusion](#conclusion)
10. [Appendices](#appendices)

## Introduction
This document describes the architecture of the Skillyme Programs System, a modern React application leveraging TanStack Router for navigation and TanStack Query for client-side state management. The system emphasizes a component-based design with a clear separation between routing, state, UI primitives, and shared site components. It uses React 19, TypeScript, and Tailwind CSS for a type-safe, maintainable, and visually consistent user experience. The auto-generated route tree ensures type-safe navigation, while the provider pattern centralizes context-based state management.

## Project Structure
The project follows a feature- and layer-based organization:
- Routing and bootstrapping: src/main.tsx, src/router.tsx, src/routes/__root.tsx, src/routeTree.gen.ts
- Site-level components: src/components/site/*
- UI primitives: src/components/ui/*
- Utilities and styling: src/lib/utils.ts, src/styles.css
- Application entry points and server-side concerns: src/start.ts
- Tooling and configuration: package.json, tsconfig.json, vite.config.ts, vercel.json

```mermaid
graph TB
subgraph "Runtime"
A["main.tsx<br/>App Bootstrap"]
B["router.tsx<br/>Router Factory"]
C["__root.tsx<br/>Root Route + Providers"]
D["routeTree.gen.ts<br/>Auto-generated Route Tree"]
end
subgraph "Routes"
R1["index.tsx<br/>Home Route"]
R2["about.tsx"]
R3["apply.tsx"]
R4["organizers.tsx"]
R5["pricing.tsx"]
end
subgraph "Site Components"
S1["Header.tsx"]
S2["Footer.tsx"]
end
subgraph "UI Primitives"
U1["button.tsx"]
U2["accordion.tsx"]
U3["input.tsx"]
U4["dialog.tsx"]
end
A --> B --> C
B --> D
C --> S1
C --> S2
C --> R1
C --> R2
C --> R3
C --> R4
C --> R5
R1 --> U1
R1 --> U2
R1 --> U3
R1 --> U4
```

**Diagram sources**
- [main.tsx:1-21](file://src/main.tsx#L1-L21)
- [router.tsx:1-17](file://src/router.tsx#L1-L17)
- [__root.tsx:1-61](file://src/routes/__root.tsx#L1-L61)
- [routeTree.gen.ts:1-132](file://src/routeTree.gen.ts#L1-L132)
- [index.tsx:1-350](file://src/routes/index.tsx#L1-L350)
- [Header.tsx:1-84](file://src/components/site/Header.tsx#L1-L84)
- [Footer.tsx:1-44](file://src/components/site/Footer.tsx#L1-L44)
- [button.tsx:1-50](file://src/components/ui/button.tsx#L1-L50)

**Section sources**
- [main.tsx:1-21](file://src/main.tsx#L1-L21)
- [router.tsx:1-17](file://src/router.tsx#L1-L17)
- [__root.tsx:1-61](file://src/routes/__root.tsx#L1-L61)
- [routeTree.gen.ts:1-132](file://src/routeTree.gen.ts#L1-L132)
- [index.tsx:1-350](file://src/routes/index.tsx#L1-L350)
- [Header.tsx:1-84](file://src/components/site/Header.tsx#L1-L84)
- [Footer.tsx:1-44](file://src/components/site/Footer.tsx#L1-L44)
- [button.tsx:1-50](file://src/components/ui/button.tsx#L1-L50)

## Core Components
- App bootstrap: Initializes the router and registers it for type safety.
- Router factory: Creates a TanStack Router instance with a QueryClient context and scroll restoration.
- Root route: Provides global providers (QueryClientProvider), layout (Header/Footer), and error/not-found handling.
- Auto-generated route tree: Ensures type-safe navigation across routes.
- UI primitives: Reusable, variant-driven components using Tailwind classes and class-variance-authority.
- Site components: Shared Header and Footer with navigation and branding.
- Utilities: Tailwind merging and class composition helpers.

**Section sources**
- [main.tsx:1-21](file://src/main.tsx#L1-L21)
- [router.tsx:1-17](file://src/router.tsx#L1-L17)
- [__root.tsx:1-61](file://src/routes/__root.tsx#L1-L61)
- [routeTree.gen.ts:1-132](file://src/routeTree.gen.ts#L1-L132)
- [button.tsx:1-50](file://src/components/ui/button.tsx#L1-L50)
- [utils.ts:1-7](file://src/lib/utils.ts#L1-L7)
- [Header.tsx:1-84](file://src/components/site/Header.tsx#L1-L84)
- [Footer.tsx:1-44](file://src/components/site/Footer.tsx#L1-L44)

## Architecture Overview
The system uses a layered architecture:
- Presentation layer: Routes and UI components.
- Navigation layer: TanStack Router manages route tree, navigation, and context.
- State layer: TanStack Query manages caching, invalidation, and optimistic updates.
- Infrastructure layer: Vite toolchain, plugin system, and deployment configuration.

```mermaid
graph TB
subgraph "Presentation"
P1["Routes (__root.tsx, index.tsx, ...)<br/>UI Components (Header, Footer, Buttons)"]
end
subgraph "Navigation"
N1["TanStack Router<br/>routeTree.gen.ts"]
N2["Router Provider<br/>main.tsx"]
end
subgraph "State"
S1["TanStack QueryClient<br/>router.tsx context"]
S2["QueryClientProvider<br/>__root.tsx"]
end
subgraph "Infrastructure"
I1["Vite Config<br/>plugins, aliases, dedupe"]
I2["TypeScript Config<br/>paths, strictness"]
I3["Package Dependencies<br/>React 19, TS, Tailwind"]
I4["Deployment (Vercel)<br/>SPA rewrites"]
end
P1 --> N1
N1 --> N2
N2 --> S2
S2 --> S1
I1 --> N1
I2 --> P1
I3 --> P1
I4 --> P1
```

**Diagram sources**
- [main.tsx:1-21](file://src/main.tsx#L1-L21)
- [router.tsx:1-17](file://src/router.tsx#L1-L17)
- [__root.tsx:1-61](file://src/routes/__root.tsx#L1-L61)
- [routeTree.gen.ts:1-132](file://src/routeTree.gen.ts#L1-L132)
- [vite.config.ts:1-30](file://vite.config.ts#L1-L30)
- [tsconfig.json:1-28](file://tsconfig.json#L1-L28)
- [package.json:1-86](file://package.json#L1-L86)
- [vercel.json:1-9](file://vercel.json#L1-L9)

## Detailed Component Analysis

### Bootstrapping and Router Initialization
The app bootstraps by creating a RouterProvider with a router instance registered for type safety. The router is constructed with a route tree, a QueryClient injected into the router context, scroll restoration enabled, and preload behavior configured.

```mermaid
sequenceDiagram
participant DOM as "DOM"
participant Main as "main.tsx"
participant RouterFactory as "router.tsx : getRouter()"
participant Router as "TanStack Router"
participant Providers as "__root.tsx"
DOM->>Main : "Mount app"
Main->>RouterFactory : "getRouter()"
RouterFactory->>RouterFactory : "new QueryClient()"
RouterFactory->>Router : "createRouter({ routeTree, context, options })"
RouterFactory-->>Main : "router instance"
Main->>Providers : "RouterProvider(router)"
Providers-->>DOM : "Render layout + routes"
```

**Diagram sources**
- [main.tsx:1-21](file://src/main.tsx#L1-L21)
- [router.tsx:1-17](file://src/router.tsx#L1-L17)
- [__root.tsx:1-61](file://src/routes/__root.tsx#L1-L61)

**Section sources**
- [main.tsx:1-21](file://src/main.tsx#L1-L21)
- [router.tsx:1-17](file://src/router.tsx#L1-L17)

### Root Route and Provider Pattern
The root route composes global providers and layout:
- QueryClientProvider wraps the outlet to enable TanStack Query across nested routes.
- Header and Footer provide consistent navigation and branding.
- ErrorComponent and NotFoundComponent handle error and not-found scenarios with a reset mechanism.

```mermaid
flowchart TD
Start(["Root Route Render"]) --> Providers["Wrap with QueryClientProvider"]
Providers --> Layout["Layout: Header + Outlet + Footer"]
Layout --> NotFound{"Route Not Found?"}
Layout --> Error{"Error Occurred?"}
NotFound --> |Yes| NotFoundView["Render NotFoundComponent"]
Error --> |Yes| ErrorView["Render ErrorComponent<br/>with reset action"]
NotFound --> |No| Outlet["Render Child Route"]
Error --> |No| Outlet
Outlet --> End(["Active Route Content"])
NotFoundView --> End
ErrorView --> End
```

**Diagram sources**
- [__root.tsx:1-61](file://src/routes/__root.tsx#L1-L61)

**Section sources**
- [__root.tsx:1-61](file://src/routes/__root.tsx#L1-L61)

### Auto-Generated Route Tree and Type-Safe Navigation
The route tree is auto-generated and imported by the router. It defines all routes, their IDs, paths, and parent-child relationships, enabling compile-time navigation safety. The generated types expose strongly typed route parameters, loaders, and search params.

```mermaid
graph LR
Gen["routeTree.gen.ts<br/>Auto-generated"] --> Import["router.tsx imports routeTree"]
Import --> Create["createRouter({ routeTree })"]
Create --> Types["Type-safe routes<br/>IDs, paths, children"]
Types --> Runtime["Runtime navigation<br/>Link, useNavigate, etc."]
```

**Diagram sources**
- [routeTree.gen.ts:1-132](file://src/routeTree.gen.ts#L1-L132)
- [router.tsx:1-17](file://src/router.tsx#L1-L17)

**Section sources**
- [routeTree.gen.ts:1-132](file://src/routeTree.gen.ts#L1-L132)
- [router.tsx:1-17](file://src/router.tsx#L1-L17)

### UI Primitive Design and Tailwind Integration
UI primitives use a variant-based design system:
- Variants and sizes are defined via class-variance-authority.
- Tailwind classes compose through a utility function that merges and tidies classes.
- Radix UI slots enable semantic composition.

```mermaid
classDiagram
class Button {
+variant : "default|destructive|outline|secondary|ghost|link"
+size : "default|sm|lg|icon"
+asChild : boolean
+ref : HTMLButtonElement
}
class Utils {
+cn(...inputs) : string
}
Button --> Utils : "uses"
```

**Diagram sources**
- [button.tsx:1-50](file://src/components/ui/button.tsx#L1-L50)
- [utils.ts:1-7](file://src/lib/utils.ts#L1-L7)

**Section sources**
- [button.tsx:1-50](file://src/components/ui/button.tsx#L1-L50)
- [utils.ts:1-7](file://src/lib/utils.ts#L1-L7)

### Site Components: Header and Footer
- Header provides responsive navigation, branding, and a call-to-action link. It uses TanStack Router’s Link for type-safe navigation and toggles a mobile menu.
- Footer organizes site navigation, contact info, and legal text, linking to internal pages and external application portal.

```mermaid
graph TB
H["Header.tsx<br/>Logo, Nav Links, Apply CTA"] --> Root["__root.tsx<br/>Renders inside layout"]
F["Footer.tsx<br/>Nav, Contact, Legal"] --> Root
Root --> Routes["Routes (__root.tsx Outlet)"]
```

**Diagram sources**
- [Header.tsx:1-84](file://src/components/site/Header.tsx#L1-L84)
- [Footer.tsx:1-44](file://src/components/site/Footer.tsx#L1-L44)
- [__root.tsx:1-61](file://src/routes/__root.tsx#L1-L61)

**Section sources**
- [Header.tsx:1-84](file://src/components/site/Header.tsx#L1-L84)
- [Footer.tsx:1-44](file://src/components/site/Footer.tsx#L1-L44)
- [__root.tsx:1-61](file://src/routes/__root.tsx#L1-L61)

### Example Route: Home Page
The index route demonstrates:
- Head metadata injection for SEO.
- Composition of site sections and reusable UI components.
- Integration with TanStack Router’s Link for navigation.
- Use of motion for animations and UI primitives for interactive elements.

```mermaid
sequenceDiagram
participant User as "User"
participant Router as "TanStack Router"
participant Route as "index.tsx"
participant UI as "UI Components"
User->>Router : "Navigate to '/'"
Router->>Route : "Activate route"
Route->>UI : "Render Hero, Sections, FAQ Accordion"
UI-->>User : "Interactive elements (Buttons, Links)"
```

**Diagram sources**
- [index.tsx:1-350](file://src/routes/index.tsx#L1-L350)

**Section sources**
- [index.tsx:1-350](file://src/routes/index.tsx#L1-L350)

## Dependency Analysis
The application relies on modern frontend tooling and libraries:
- React 19 and React DOM for rendering.
- TanStack Router for routing and TanStack Router Plugin for code-splitting and route tree generation.
- TanStack Query for caching and state management.
- Tailwind CSS v4 with Tailwind Vite plugin for utility-first styling.
- Vite with plugins for React, path resolution, and router code generation.
- TypeScript for type safety and strict compiler options.

```mermaid
graph TB
Pkg["package.json<br/>dependencies/devDependencies"] --> React["react@^19.x"]
Pkg --> Router["@tanstack/react-router"]
Pkg --> Query["@tanstack/react-query"]
Pkg --> Tailwind["tailwindcss@^4.x"]
Pkg --> Vite["vite"]
Pkg --> TS["typescript"]
Vite --> Plugins["Plugins: react, tsconfig-paths, router-plugin, tailwindcss"]
Plugins --> Build["Build + Dev Server"]
```

**Diagram sources**
- [package.json:1-86](file://package.json#L1-L86)
- [vite.config.ts:1-30](file://vite.config.ts#L1-L30)

**Section sources**
- [package.json:1-86](file://package.json#L1-L86)
- [vite.config.ts:1-30](file://vite.config.ts#L1-L30)
- [tsconfig.json:1-28](file://tsconfig.json#L1-L28)

## Performance Considerations
- Auto-code splitting: Enabled via the TanStack Router Vite plugin to reduce bundle sizes and improve initial load performance.
- Scroll restoration: Enabled in the router to preserve user position across navigations.
- Dedupe dependencies: Vite resolves duplicates for React and TanStack packages to avoid multiple instances.
- Tailwind utilities: Utility-first classes minimize CSS overhead and enable efficient styling.
- QueryClient context: Centralized caching reduces redundant network requests and improves perceived performance.

[No sources needed since this section provides general guidance]

## Troubleshooting Guide
Common areas to check:
- Router registration: Ensure the router instance is registered for type safety in main.tsx.
- Provider placement: Verify QueryClientProvider wraps the outlet in the root route.
- Route tree integrity: Confirm routeTree.gen.ts is up to date and imported by the router.
- Error handling: Use the root route’s errorComponent to surface and recover from errors.
- Server middleware: For server-side concerns, review the start.ts error middleware and Vercel rewrites.

**Section sources**
- [main.tsx:1-21](file://src/main.tsx#L1-L21)
- [__root.tsx:1-61](file://src/routes/__root.tsx#L1-L61)
- [routeTree.gen.ts:1-132](file://src/routeTree.gen.ts#L1-L132)
- [start.ts:1-23](file://src/start.ts#L1-L23)
- [vercel.json:1-9](file://vercel.json#L1-L9)

## Conclusion
The Skillyme Programs System employs modern React patterns with TanStack Router and TanStack Query to deliver a scalable, type-safe, and maintainable application. The component-based architecture, combined with auto-generated route trees and provider-based state management, enables clean data flows and predictable UI behavior. Tooling choices support rapid iteration and reliable deployments.

[No sources needed since this section summarizes without analyzing specific files]

## Appendices

### Deployment Topology Considerations
- Single Page Application: Vercel rewrites all routes to index.html to support client-side routing.
- Build and Output: Build command and output directory configured for static hosting.
- Scalability: Auto-code splitting and centralized caching via TanStack Query improve runtime performance at scale.

**Section sources**
- [vercel.json:1-9](file://vercel.json#L1-L9)
- [vite.config.ts:1-30](file://vite.config.ts#L1-L30)