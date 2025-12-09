export default function HomePage() {
  return (
    <div className=" bg-gradient-to-b from-[#0a1a33] via-[#0b203d] to-[#071628] px-6 py-12">
      <div className="min-h-screen bg-gradient-to-b from-[#0a1a33] via-[#0b203d] to-[#071628] px-6 py-12">
  
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
  
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-100 leading-tight drop-shadow-md">
              Simplify Your{" "}
              <span className="text-blue-400">Leave Management</span>
            </h1>
  
            <p className="mt-5 text-blue-200 text-lg md:text-xl max-w-xl leading-relaxed">
              Manage employee leaves effortlessly with a secure, modern, and responsive platform.
            </p>
  
            <div className="mt-8">
              <a
                href="/login"
                className="inline-block px-12 py-3 bg-gradient-to-r from-blue-600 to-blue-500 
                           text-white font-semibold rounded-xl shadow-lg shadow-blue-500/40 
                           hover:shadow-blue-500/70 transition-all transform hover:-translate-y-1"
              >
                Get Started
              </a>
            </div>
          </div>
  
          {/* Hero Image */}
          <div className="flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/310/248/original/business-team-ready-to-work-office-employee-in-tidy-clothes-illustration-characters-in-flat-design-group-of-office-workers-in-flat-cartoon-style-free-vector.jpg"
              alt="Dashboard Illustration"
              className="w-[420px] md:w-[500px] 
                         drop-shadow-[0_0_25px_rgba(0,150,255,0.5)] rounded-2xl"
            />
          </div>
        </div>
  
        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 mt-20">
  
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-300/20 
                          shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-2 
                          transition-all text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500/20 
                            text-blue-300 rounded-full mx-auto text-3xl mb-6">
              📅
            </div>
            <h3 className="text-xl font-semibold text-blue-100">Apply Leave</h3>
            <p className="text-blue-300 text-sm mt-3">
              Submit leave requests quickly with a clean interface.
            </p>
          </div>
  
          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-300/20 
                          shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-2 
                          transition-all text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500/20 
                            text-green-300 rounded-full mx-auto text-3xl mb-6">
              👤
            </div>
            <h3 className="text-xl font-semibold text-blue-100">Manage Profile</h3>
            <p className="text-blue-300 text-sm mt-3">
              Update your personal and departmental details easily.
            </p>
          </div>
  
          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-300/20 
                          shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-2 
                          transition-all text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-500/20 
                            text-purple-300 rounded-full mx-auto text-3xl mb-6">
              ✅
            </div>
            <h3 className="text-xl font-semibold text-blue-100">Admin Approval</h3>
            <p className="text-blue-300 text-sm mt-3">
              Managers can approve or reject leave requests instantly.
            </p>
          </div>
  
        </div>
      </div>
    </div>
  );
}
