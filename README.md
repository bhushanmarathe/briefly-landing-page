# Briefly Landing Page

A responsive B2B SaaS landing page built for the Factual take-home assignment.

## Live Demo

[View deployed site](https://briefly-landing-page-flame.vercel.app/)

## GitHub Repository

[View source code](https://github.com/bhushanmarathe/briefly-landing-page)

## Overview

This project is a conversion-focused landing page for a fictional AI meeting assistant called **Briefly**.

The goal was to design and build a polished product landing page that clearly communicates value, establishes trust, and guides users toward a primary call to action. The page was designed with a modern SaaS aesthetic and implemented using reusable components in Next.js.

## Features

- Responsive hero section with strong CTA hierarchy
- Social proof and brand/logo strip
- Problem/solution storytelling section
- Feature breakdown with primary and supporting feature cards
- How-it-works section
- Trust and security section
- Testimonials section
- FAQ accordion
- Final CTA section
- Metadata and favicon support
- Mobile-friendly responsive layout

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Lucide React
- Vercel

## Design Goals

The page was designed around a few core goals:

- Make the product value proposition clear within the first screen
- Use one strong primary CTA: **Start free**
- Build trust with social proof, integrations, and security messaging
- Keep the layout clean, modern, and easy to scan
- Create a polished responsive experience across screen sizes

## Design Decisions

- I chose a fictional AI meeting assistant because it is a believable SaaS product with clear pain points, feature storytelling, and trust-building opportunities.
- I structured the page as: **hero → proof → problem → features → how it works → trust → testimonials → FAQ → final CTA**.
- I used a restrained color palette with teal as the main accent to keep the page professional and conversion-focused.
- I used reusable components and centralized data objects so the page content remains easy to maintain and iterate on.

## Project Structure

```bash
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
    sections/
    ui/
  data/
    landing-page.ts
  lib/
    utils.ts
```

## Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## Deployment

This project is deployed on Vercel.

To deploy:

1. Push the repository to GitHub
2. Import the repo into Vercel
3. Deploy using the default Next.js configuration
4. Update metadata URLs with the final production domain

## Notes

- This is a fictional product concept created for a take-home assignment.
- The focus of the submission is landing page design, conversion structure, responsiveness, and implementation quality.

## Author

**Bhushan Marathe**
