export default function FacultyCVManagementSystem() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-700 text-white p-5 rounded-2xl shadow-lg mb-6">
        <h1 className="text-3xl font-bold">Faculty CV Management System</h1>
        <p className="text-sm mt-2">
          Update, verify, and manage faculty CVs online.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Faculty Panel */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Faculty Dashboard
          </h2>

          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();

              const facultyData = {
                facultyName: e.target.facultyName.value,
                department: e.target.department.value,
                qualification: e.target.qualification.value,
              };

              const response = await fetch("http://localhost:5000/submit-cv", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(facultyData),
              });

              const result = await response.json();

              alert(result.message);
            }}
          >
            <div>
              <label className="block font-medium">Faculty Name</label>
              <input
                type="text"
                name="facultyName"
                placeholder="Enter faculty name"
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>

            <div>
              <label className="block font-medium">Department</label>
              <input
                type="text"
                name="department"
                placeholder="Enter department"
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>

            <div>
              <label className="block font-medium">Qualification</label>
              <textarea
                name="qualification"
                placeholder="Enter qualification details"
                className="w-full border rounded-lg p-2 mt-1"
                rows="3"
              ></textarea>
            </div>

            <div>
              <label className="block font-medium">
                Research Publications
              </label>
              <textarea
                placeholder="Enter publication details"
                className="w-full border rounded-lg p-2 mt-1"
                rows="3"
              ></textarea>
            </div>

            <div>
              <label className="block font-medium">Achievements</label>
              <textarea
                placeholder="Enter achievements"
                className="w-full border rounded-lg p-2 mt-1"
                rows="3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-xl"
            >
              Submit CV Update Request
            </button>
          </form>
        </div>

        {/* Admin Panel */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Admin Verification Panel
          </h2>

          <div className="border rounded-xl p-4 mb-4 bg-gray-50">
            <h3 className="font-semibold text-lg">Pending Request</h3>
            <p className="mt-2">
              <strong>Faculty:</strong> Dr. Amit Sharma
            </p>
            <p>
              <strong>Department:</strong> Computer Science
            </p>
            <p>
              <strong>Status:</strong>
              <span className="text-yellow-600 font-semibold ml-2">
                Pending Approval
              </span>
            </p>

            <div className="flex gap-4 mt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                Approve
              </button>

              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
                Reject
              </button>
            </div>
          </div>

          <div className="border rounded-xl p-4 bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">
              Notification System
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>Admin receives notification when CV is updated.</li>
              <li>Faculty receives confirmation email after approval.</li>
              <li>Rejected requests are returned with comments.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">
          System Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-xl p-4 bg-blue-50">
            <h3 className="font-semibold">Faculty Module</h3>
            <p className="text-sm mt-2 text-gray-700">
              Faculty members can update CVs, qualifications, and research
              details.
            </p>
          </div>

          <div className="border rounded-xl p-4 bg-green-50">
            <h3 className="font-semibold">Admin Verification</h3>
            <p className="text-sm mt-2 text-gray-700">
              Admin verifies and approves all update requests.
            </p>
          </div>

          <div className="border rounded-xl p-4 bg-yellow-50">
            <h3 className="font-semibold">Email Notifications</h3>
            <p className="text-sm mt-2 text-gray-700">
              Automatic email alerts for approvals and updates.
            </p>
          </div>
        </div>
      </div>

      <footer className="text-center text-gray-500 mt-8 text-sm">
        © 2026 Faculty CV Management System
      </footer>
    </div>
  );
}