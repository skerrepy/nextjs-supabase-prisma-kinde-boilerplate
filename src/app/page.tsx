import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Next.js Supabase Prisma Kinde Boilerplate
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            A robust starter template for building modern, full-stack web
            applications with seamless authentication, efficient database
            management, and scalable APIs.
          </p>
          <a
            href="https://kinde.com/r?kinde_ref=db1d5a2354f1a6c8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Get $50 in Kinde credits when you sign up →
          </a>
        </div>

        <div className="max-w-3xl mx-auto">
          {!(await isAuthenticated()) ? (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Start Building Your Next Project
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-indigo-50 rounded-lg">
                  <h3 className="font-semibold text-indigo-600 mb-2">
                    Authentication Ready
                  </h3>
                  <p className="text-gray-600">
                    Secure user management with Kinde authentication, including
                    OAuth and SSO support
                  </p>
                </div>
                <div className="p-6 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-600 mb-2">
                    Database Management
                  </h3>
                  <p className="text-gray-600">
                    Powerful combination of Supabase and Prisma for efficient
                    data handling
                  </p>
                </div>
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-600 mb-2">
                    TypeScript Ready
                  </h3>
                  <p className="text-gray-600">
                    Full TypeScript support for type-safe development experience
                  </p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-600 mb-2">
                    Real-time Updates
                  </h3>
                  <p className="text-gray-600">
                    Built-in real-time capabilities powered by Supabase
                  </p>
                </div>
              </div>
              <div className="text-center space-x-4">
                <LoginLink className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                  Sign in
                </LoginLink>
                <RegisterLink className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                  Sign up
                </RegisterLink>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-6">
                {user?.picture ? (
                  <img
                    className="h-24 w-24 rounded-full border-4 border-indigo-50"
                    src={user?.picture}
                    alt="user profile avatar"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center text-2xl font-semibold text-indigo-600">
                    {user?.given_name?.[0]}
                    {user?.family_name?.[0]}
                  </div>
                )}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Welcome, {user?.given_name} {user?.family_name}!
                  </h2>
                  <p className="text-gray-500 mt-1">{user?.email}</p>
                  <p className="text-gray-600 mt-2">
                    Start building your next great project with our powerful
                    tech stack.
                  </p>
                  <LogoutLink className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    Sign out
                  </LogoutLink>
                </div>
              </div>
            </div>
          )}
        </div>

        <footer className="mt-20 border-t border-gray-200 pt-8">
          <div className="flex justify-center space-x-8">
            <a
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Next.js Docs
            </a>
            <a
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              href="https://supabase.com/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Supabase Docs
            </a>
            <a
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              href="https://www.prisma.io/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Prisma Docs
            </a>
            <a
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              href="https://kinde.com/r?kinde_ref=db1d5a2354f1a6c8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Kinde Docs
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
