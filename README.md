# Next.js Supabase Prisma Kinde Boilerplate

🚀 A production-ready boilerplate for building full-stack web applications with powerful tools and modern technologies.

## Tech Stack

- **Next.js**: Server-side rendering and static site generation for fast, SEO-friendly apps.
- **Supabase**: Managed PostgreSQL database with real-time capabilities.
- **Prisma**: Type-safe ORM for seamless database queries.
- **Kinde**: Modern authentication with OAuth, SSO, and role-based access.

## Features

- 🔒 **Authentication**: Pre-configured Kinde setup for secure user management.
- 🗄️ **Database Management**: Supabase + Prisma integration for scalable and efficient data handling.
- 📡 **API Ready**: Next.js API routes for building robust backends.
- ⏱️ **Real-Time Updates**: Real-time data sync with Supabase.
- 🛠️ **TypeScript Support**: Fully typed environment for safe and efficient development.

## Quick Start

### Kinde Configuration

KINDE_CLIENT_ID=<your-kinde-client-id>
KINDE_CLIENT_SECRET=<your-kinde-client-secret>
KINDE_ISSUER_URL=<your-kinde-issuer-url>
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/api/auth/creation
Database Configuration
DATABASE_URL=<your-database-url>
DIRECT_URL=<your-direct-url>

### Commands

1. Clone the repository:
   ```bash
   git clone https://github.com/skerrepy/nextjs-supabase-prisma-kinde-boilerplate.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env` file.
4. Run the development server:
   ```bash
   npm run dev
   ```

## License

This project is licensed under the [MIT License](LICENSE).

---
