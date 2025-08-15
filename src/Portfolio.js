import React from "react";

export default function Portfolio() {
  return (
    <main className="font-sans text-gray-800 bg-white dark:bg-gray-900 dark:text-white min-h-screen">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Geetha Sravanthi</h1>
        <p className="text-sm">Aspiring Web Developer | Passionate about building clean UIs</p>
      </header>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I'm a web developer with experience in building responsive, user-friendly applications using HTML, CSS, JavaScript, and ReactJS. I enjoy learning new technologies and applying them to real-world projects.
        </p>
      </section>

      <section className="p-6 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-semibold">Responsive Portfolio Website</h3>
            <p>Developed using HTML, CSS (SASS), JavaScript, ReactJS, and Bootstrap. Includes API integration and fully responsive layout.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">HTML Email Templates</h3>
            <p>Created mobile-friendly email layouts using semantic HTML and inline CSS, tested across major email clients.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Stress Detection using ML</h3>
            <p>Built a real-time stress detection system using Python, OpenCV, and TensorFlow for facial emotion recognition.</p>
          </li>
        </ul>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        <ul className="list-disc list-inside">
          <li>Languages: HTML5, CSS3, JavaScript, Java, SQL</li>
          <li>Frontend: ReactJS, Bootstrap, Responsive Design, RESTful APIs</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MySQL, MongoDB (basic)</li>
          <li>Tools: Git, GitHub, VS Code, Eclipse</li>
          <li>Concepts: OOP, MVC, Debugging</li>
        </ul>
      </section>

      <footer className="bg-blue-600 text-white p-6 mt-10">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>Email: geethanelakurthi7@gmail.com</p>
        <p>GitHub: <a href="https://github.com/Geethasravanthi23" className="underline">Geethasravanthi23</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/geethnelakurthi" className="underline">geethnelakurthi</a></p>
      </footer>
    </main>
  );
}
