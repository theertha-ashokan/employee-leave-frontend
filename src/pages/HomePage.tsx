export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Welcome to <span className="text-blue-600">Employee Leave Management</span>
        </h1>
        <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Track leaves, manage profiles, and approve requests efficiently with a modern, user‑friendly dashboard.
        </p>
        <div className="mt-8">
          {/* Anchor link to Apply Leave section */}
          <a
            href="/apply"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Apply Leave */}
        <div
          id="apply-leave"
          className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto text-3xl">
            📅
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Apply Leave</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Submit leave requests with flexible options for half‑day or full‑day, all in one place.
          </p>
        </div>

        {/* Manage Profile */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6 mx-auto text-3xl">
            👤
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Manage Profile</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Update your designation, department, and view attendance summary with ease.
          </p>
        </div>

        {/* Admin Approval */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-6 mx-auto text-3xl">
            ✅
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Admin Approval</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Managers and admins can review, approve, or reject leave requests quickly and transparently.
          </p>
        </div>
      </div>
    </div>
  );
}