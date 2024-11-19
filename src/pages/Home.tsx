import { Link } from 'react-router-dom';
import { Search, Briefcase, Building2, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Find Your Dream Remote Tech Job
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connect with top tech companies hiring remote talent globally. Your next opportunity awaits.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/jobs"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Browse Jobs
              </Link>
              <Link
                to="/register"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Post a Job <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Crafty Hub</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to find your next role
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  Smart Job Matching
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Our AI-powered platform matches you with jobs that fit your skills and experience.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  Vetted Companies
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We partner with legitimate companies committed to remote work culture.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  Global Network
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Connect with a worldwide community of remote professionals.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}