import React from 'react';

const App = () => {

  const handledownload = () => {
    const link = document.createElement('a');
    link.href = '/SujalDesaiResume.pdf'; // Path to the PDF file in the public folder
    link.download = '/SujalDesaiResume.pdf'; // Desired file name when downloaded
    link.click();
  }


  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-center items-center p-8">
      <main className="flex flex-col items-center justify-between w-full max-w-4xl space-y-12">

        {/* Introduction Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-36 h-36 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold">Sujal Desai</h1>
          <h2 className="text-lg text-gray-600">Computer Science Engineering Student</h2>
          <p className="text-gray-500 max-w-md">
            Passionate about technology and innovation, with experience in web development, machine learning, and problem-solving.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href="mailto:sujaldesai4903@gmail.com"
              className="text-gray-500 hover:text-green-500 transition"
            >
              ✉️
            </a>
            <a
              href="tel:+91-9327256546"
              className="text-gray-500 hover:text-green-500 transition"
            >
              📞
            </a>
            <a
              href="https://www.linkedin.com/in/sujal-desai-419918301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-gray-500 hover:text-green-500 transition"
            >
              🌐
            </a>
          </div>
          <div className="flex space-x-4 pt-4">
            <button
              onClick={handledownload}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            Download CV ↓
            </button>
          </div>
        </div>

        {/* Education Section */}
        <section className="w-full space-y-4">
          <h2 className="text-2xl font-semibold">Education</h2>
          <ul className="space-y-3">
            <li>
              <h3 className="text-lg font-medium">Bachelor of Technology - CSE</h3>
              <p className="text-gray-600">Vidush Somany Institute of Technology, Gandhinagar (2021 - 2025)</p>
              <p className="text-gray-500">Courses: HTML5, CSS3, JavaScript, Python, C, C++</p>
            </li>
            <li>
              <h3 className="text-lg font-medium">Higher Secondary (Class 12)</h3>
              <p className="text-gray-600">Shree Swaminarayan Public School, Gandhinagar (2020 - 2021)</p>
              <p className="text-gray-500">Percentage: 69.4%</p>
            </li>
            <li>
              <h3 className="text-lg font-medium">Secondary (Class 10)</h3>
              <p className="text-gray-600">Shree Swaminarayan Public School, Gandhinagar (2018 - 2019)</p>
              <p className="text-gray-500">Percentage: 86.4%</p>
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="w-full space-y-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="space-y-3">
            <li>
              <h3 className="text-lg font-medium">Smart Attendance System for School</h3>
              <p className="text-gray-600">Automated attendance tracking using CCTV and ML algorithms.</p>
              <p className="text-gray-500">Technologies: MySQL, HTML, CSS, JavaScript</p>
            </li>
            <li>
              <h3 className="text-lg font-medium">Fitness Website</h3>
              <p className="text-gray-600">Comprehensive fitness management, BMI calculator, and diet planning.</p>
              <p className="text-gray-500">Technologies: PHP, HTML, CSS, JavaScript, MySQL, Strapi</p>
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="w-full space-y-4">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p className="text-gray-600">Programming: Python, Html, Css, JavaScript, Tailwind Css, Bootstrap, Material Ui, Shadcn Ui, Full Stack Development, MERN Stack</p>
          <p className="text-gray-600">Database: MySQL, SQLite, PostgreSQL</p>
          <p className="text-gray-600">Miscellaneous: Linux, Shell, Microsoft Office, Git</p>
          <p className="text-gray-600">Soft Skills: Time Management, Teamwork, Problem-solving, Documentation</p>
        </section>

        {/* Achievements Section */}
        <section className="w-full space-y-4">
          <h2 className="text-2xl font-semibold">Achievements</h2>
          <ul className="space-y-3">
            <li>
              <h3 className="text-lg font-medium">NPTEL - Information Security</h3>
              <p className="text-gray-500">Completed in December 2024</p>
            </li>
            <li>
              <h3 className="text-lg font-medium">SIH Hackathon</h3>
              <p className="text-gray-500">Participated in Smart India Hackathon (SIH)</p>
            </li>
          </ul>
        </section>

      </main>
    </div>
  );
};

export default App;
