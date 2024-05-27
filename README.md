# Next.js Blog Site(https://next-js-blog-tau-bay.vercel.app/)

A simple blog site built with Next.js, leveraging static generation and Markdown files for content management.

## Table of Contents

- [Introduction]
- [Features]
- [Installation]
- [Usage]
- [Folder Structure]

## Introduction

This project is a blog site created using Next.js, a React framework for building modern web applications. It utilizes static generation with `getStaticProps` and `getStaticPaths` to pre-render pages at build time, providing fast performance and efficient SEO. Markdown files are used to manage blog post content, allowing for easy authoring and editing.

## Features

- List of blog posts on the homepage with titles and summaries.
- Individual pages for each blog post showing full content.
- Responsive design for optimal viewing on various devices.
- Search and sort functionality to filter blog posts.
- Styled with Bootstrap CSS and CSS modules for sleek and modern UI.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vivtej411/NextJS-BLOG.git
   cd nextjs-blog
   
2. Install dependencies:

   ```bash
   npm install

## Usage

1. Run the development server

   ```bash
   npm run dev

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Folder Structure

.

├── content

│ └── posts

├── pages

├── components

│ ├── blogs

│ ├── layout

│ └── ui

├── lib

├── styles

├── public

├── README.md

└── next.config.js


- **content**: Contains Markdown files for blog posts.
- **pages**: Next.js pages for routing.
- **components**: Reusable UI components.
  - **blogs**: Components related to displaying blog posts.
  - **layout**: Components for layout structure.
  - **ui**: UI-specific components like cards, buttons, etc.
- **lib**: Utility functions for fetching blog data.
- **styles**: Global CSS styles.
- **public**: Static assets like images.
- **README.md**: Documentation for the project.
- **next.config.js**: Next.js configuration file.


