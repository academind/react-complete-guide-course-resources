# Foodies

A modern food recipe sharing platform built with Next.js, where food enthusiasts can discover, share, and explore delicious meals from around the world.

## Features

- 🍽️ **Browse Meals**: Explore a curated collection of delicious recipes
- 📝 **Share Recipes**: Submit your favorite meals with images and detailed instructions
- 👥 **Community**: Join a community of food lovers
- 🖼️ **Image Slideshow**: Beautiful image carousel on the homepage
- 🔍 **Meal Details**: View detailed recipe instructions and creator information
- ☁️ **Cloud Storage**: Images are stored in AWS S3

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5
- **React**: React 19.0.0
- **Database**: SQLite (better-sqlite3)
- **Storage**: AWS S3 (for meal images via @aws-sdk/client-s3)
- **Styling**: CSS Modules
- **Linting**: ESLint 8 with eslint-config-next
- **Security**: XSS protection for user inputs (xss library)
- **Package Manager**: pnpm
- **Build Tool**: Turbopack (default in Next.js 16)

## Prerequisites

- Node.js 20.9+ (required for Next.js 16)
- pnpm (install with `npm install -g pnpm`)
- AWS S3 bucket (for image storage) - configure in `config.ts`

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd foodies
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and fill in your AWS credentials:
- `AWS_ACCESS_KEY_ID`: Your AWS access key ID
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key

4. **IMPORTANT**: Initialize the database before running the development server or building:
```bash
pnpm run initdb
```

This script will:
- Create the SQLite database (`meals.db`)
- Set up the meals table schema
- Populate the database with sample meal data

5. Configure AWS S3 (required for sharing meals):
   - **IMPORTANT**: Update `AWS_S3_BUCKET_NAME` in `config.ts` with your actual S3 bucket name
   - AWS credentials are configured in `.env.local` (created in step 3)

## Development

After running `pnpm run initdb`, start the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Building for Production

**IMPORTANT**: Make sure to run `pnpm run initdb` before building:

```bash
pnpm run initdb
pnpm run build
pnpm start
```

## Project Structure

```
foodies/
├── app/                          # Next.js App Router directory
│   ├── community/               # Community page
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── meals/                   # Meals pages
│   │   ├── [mealSlug]/         # Dynamic meal detail pages
│   │   │   ├── page.tsx
│   │   │   └── page.module.css
│   │   ├── share/              # Share meal form page
│   │   │   ├── page.tsx
│   │   │   ├── page.module.css
│   │   │   └── error.tsx
│   │   ├── page.tsx            # Meals listing page
│   │   ├── page.module.css
│   │   ├── error.tsx           # Error boundary
│   │   └── not-found.tsx       # 404 page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── page.module.css
│   ├── globals.css              # Global styles
│   ├── not-found.tsx            # Root 404 page
│   └── icon.png                 # App icon
├── components/                   # React components
│   ├── ImageWithFallback/       # next/image wrapper with fallback
│   │   └── index.tsx
│   ├── ImageSlideshow/         # Image slideshow component
│   │   ├── index.tsx
│   │   └── image-slideshow.module.css
│   ├── MainHeader/             # Header and navigation
│   │   ├── index.tsx
│   │   ├── main-header.module.css
│   │   ├── MainHeaderBackground/
│   │   │   ├── index.tsx
│   │   │   └── main-header-background.module.css
│   │   └── NavLink/
│   │       ├── index.tsx
│   │       └── nav-link.module.css
│   └── meals/                   # Meal-related components
│       ├── ImagePicker/        # Image picker component
│       │   ├── index.tsx
│       │   └── image-picker.module.css
│       ├── MealFormSubmitButton/
│       │   └── index.tsx
│       └── MealGridList/        # Meal grid list component
│           ├── index.tsx
│           ├── meals-grid-list.module.css
│           └── MealGridListItem/
│               ├── index.tsx
│               └── meal-grid-list-item.module.css
├── lib/                         # Utility functions and server logic
│   ├── actions.ts              # Server actions for form submissions
│   └── meals.ts                # Database operations and queries
├── assets/                      # Static assets (source images, icons)
│   ├── icons/                  # Icon assets
│   └── *.jpg                   # Meal images
├── public/                      # Public assets (served statically)
│   └── images/                 # Public image assets
├── config.ts                    # Configuration (AWS S3 bucket name)
├── initdb.ts                    # Database initialization script
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── .eslintrc.json               # ESLint configuration
├── .env.local.example           # Environment variables template
├── package.json                 # Project dependencies
└── meals.db                     # SQLite database (created by initdb.ts)
```

## Key Files

- **`initdb.ts`**: Database initialization script - **must be run before dev/build**
- **`config.ts`**: AWS S3 bucket configuration - **must update `AWS_S3_BUCKET_NAME` with your bucket name**
- **`lib/meals.ts`**: Database queries and meal operations
- **`lib/actions.ts`**: Server actions for form submissions
- **`next.config.ts`**: Next.js configuration (image domains)

## Database Schema

The `meals` table has the following structure:

- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `slug`: TEXT NOT NULL UNIQUE
- `title`: TEXT NOT NULL
- `image`: TEXT NOT NULL
- `summary`: TEXT NOT NULL
- `instructions`: TEXT NOT NULL
- `creator`: TEXT NOT NULL
- `creator_email`: TEXT NOT NULL

## Configuration

### AWS S3 Setup

1. **Update `config.ts`**: 
   - Open `config.ts` and update the `AWS_S3_BUCKET_NAME` constant with your actual S3 bucket name
   - The bucket name should be just the bucket name (e.g., `my-bucket-name`), not a full URL

2. **AWS Credentials**:
   - Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
   - Edit `.env.local` and fill in your AWS credentials:
   ```bash
   AWS_ACCESS_KEY_ID=your_aws_access_key_id
   AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
   ```
   - Note: `.env.local` is gitignored and should not be committed to version control

## Scripts

- `pnpm run dev`: Start development server
- `pnpm run build`: Build for production
- `pnpm start`: Start production server
- `pnpm run lint`: Run ESLint
- `pnpm run initdb`: Initialize the database (creates meals.db and populates with sample data)

## Notes

- The database file (`meals.db`) is created automatically when you run `pnpm run initdb`
- Sample meals are included in the initialization script
- Images are uploaded to AWS S3 when sharing new meals
- User inputs are sanitized using the `xss` library to prevent XSS attacks
- The project is written in TypeScript for type safety

## License

MIT

