import { useState } from "react";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gray-950 text-white font-sans">
      {/* Landing Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.img
          src="/pp2.jpeg"
          alt="Profile"
          className="w-50 h-60 rounded-2xl border-4 border-white shadow-xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-5xl font-bold">Shubham Mukherjee</h1>
        <p className="text-xl mt-3 text-gray-300">Building Scalable Systems & Intuitive Interfaces.</p>
        <p className="text-xl mt-3 text-gray-300">Full-Stack Development | Microservices | Cloud Computing </p>
        <div className="flex gap-6 mt-6">
          <a href="/ShubhamResume21-bb.pdf" download className="hover:text-blue-400"><Download /> Resume</a>
          <a href="https://linkedin.com/in/shubham-mukherjee-a851a420a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Linkedin /> LinkedIn</a>
          <a href="https://github.com/shubhamMukherjee2304" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Github /> GitHub</a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-900 text-gray-200">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <img src="/public/21004063.jpg" alt="About me" className="rounded-xl w-60 h-60 mx-auto" />
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p>
              Hi, I'm, a final-year CSE student at NMIT with a strong grasp of full-stack development, DSA, and distributed systems.
            </p>
            <p>
              I build scalable backend systems using Golang, Node.js, and microservices, and craft responsive UIs with React, Next.js, and Tailwind CSS. At Souloxy, I worked on high-performance services using gRPC and PostgreSQL, reducing latency and boosting modularity.
            </p>
            <p>
              My projects — TaskTrek, HostHive, and PolyScale — showcase my focus on real-world problem solving, clean code, and building products. I'm passionate about cloud, backend systems, and always up for a challenge or hackathon.


            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <h2 className="text-4xl text-center font-semibold mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold">B.E. in Computer Science & Engineering</h3>
            <p className="text-gray-300 mt-2">Nitte Meenakshi Institute of Technology, Bengaluru</p>
            <p className="text-sm text-gray-400">2022 – 2026</p>
            <p className="text-sm text-gray-400">CGPA - 8.82/10.00</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold">Higher Secondary (CBSE)</h3>
            <p className="text-gray-300 mt-2">Delhi Public School, Ranchi</p>
            <p className="text-sm text-gray-400">Graduated 2022</p>
            <p className="text-sm text-gray-400">Percentage - 91.6%</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <h2 className="text-4xl text-center font-semibold mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Full Stack Intern @ Souloxy</h3>
            <h4 className="text-xl"><span className="font-bold">Tech Stack:</span> Golang, gRPC, PostgreSQL, Protocol Buffers, HTTP/2</h4>
            <p className="text-gray-300 mt-2">Developed and maintained scalable microservices in Golang, enhancing system modularity and performance.</p>
            <p className="text-gray-300 mt-2">Implemented gRPC over HTTP/2, reducing API latency by 30–50% compared to previous REST-based architecture.</p>
            <p className="text-gray-300 mt-2">Integrated JWT authentication with role-based access control (RBAC) to ensure secure and granular user permissions.</p>
            <p className="text-gray-300 mt-2">Designed efficient database schemas and optimized query performance using PostgreSQL.</p>
            <p className="text-gray-300 mt-2">Contributed to system resilience, fault tolerance, and low-latency communication in a distributed environment.</p>
  
            
            
            <p className="text-sm mt-2 text-gray-500">Dec 2024 – Mar 2025</p>
          </motion.div>
          {/* More experiences can be added similarly */}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <h2 className="text-4xl text-center font-semibold mb-12">Skills</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {['Java','React.js', 'Node.js', 'Express.js', 'JavaScript', 'Next.js', 'TypeScript', 'Redux', 'Linux', 'Golang', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kafka', 'AWS', 'Git', 'GitHub', 'gRPC', 'REST APIs', 'GraphQL', 'Tailwind CSS', 'Framer Motion', 'Elasticsearch'].map(skill => (
            <div key={skill} className="bg-gray-800 rounded-xl py-4 px-2 shadow-md hover:scale-105 transition-transform">
              <p className="text-lg font-semibold text-white">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-900 text-gray-200">
        <h2 className="text-4xl text-center font-semibold mb-12">Projects</h2>
        <div className="space-y-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:[&>*:nth-child(1)]:order-1md:grid md:grid-cols-2 gap-10 items-center">
            <img src="/public/ttt.png" alt="Project 1" className="rounded-xl shadow-lg" />
            <div>
              <h3 className="text-2xl"><span className="font-bold">TaskTrek</span> <span className="text-xl">– AI-powered project management platform</span></h3>
              <p className="text-xl"><span className="font-bold">Tech Stack</span> -  Node.js, React.js, Firebase, Clerk, Gemini AI</p>
              <p className=""><a href="https://task-trek-rouge.vercel.app/">Link - https://task-trek-rouge.vercel.app/</a></p>
              <p className="mt-3">
                Built a real-time platform for teams to manage projects with less than 100ms sync latency and dynamic dashboards.
              </p>
              <p className="mt-3">Integrated Gemini AI to auto-generate task flows and assist in project planning, reducing manual effort by 40%.</p>
              <p className="mt-3">Integrated Gemini AI to auto-generate task flows and assist in project planning, reducing manual effort by 40%.</p>
            </div>
          </div>
          {/* Alternate layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:[&>*:nth-child(1)]:order-1 md:[&>*:nth-child(2)]:order-2">
            <img src="/public/hst.png" alt="Project 2" className="rounded-xl shadow-lg" />
            
            <div>
              <h3 className="text-2xl"><span className="font-bold">HostHive</span> <span className="text-xl">– Cloud-native code hosting and deployment platform</span></h3>
              <p className="text-xl"><span className="font-bold">Tech Stack</span> -  Node.js, Docker, Kafka, AWS ECS, Redis, ClickHouse</p>
              <p className=""><a href="https://github.com/shubhamMukherjee2304/Host-Hive">Link - https://tinyurl.com/5v4ynrhv </a></p>
              <p className="mt-3">
                Developed a scalable alternative to GitHub for hosting code with automated builds and real-time deployment logs.
              </p>
              <p className="mt-3">Containerized builds with Docker and deployed on AWS ECS, reducing deployment time by 60%.</p>
              <p className="mt-3">Handled 10K+ logs/sec using Kafka + ClickHouse for real-time analytics.</p>
            </div>
            
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:[&>*:nth-child(1)]:order-1 md:[&>*:nth-child(2)]:order-2">
            <img src="/public/mfr.png" alt="Project 1" className="rounded-xl shadow-lg" />
            <div className="">
              <h3 className="text-2xl"><span className="font-bold"> MyFarm</span><span className="text-xl">– Marketplace for farm produce</span> </h3>
              <p className="text-xl"><span className="font-bold">Tech Stack</span> -  React.js, Node.js, MongoDB, Tailwind CSS</p>
              <p className=""><a href="https://agro-mart-1.onrender.com/">Link - https://agro-mart-1.onrender.com/</a></p>
              <p className="mt-3">
                Built a full-stack platform for farmers to sell directly to buyers, improving pricing by up to 25%.
              </p>
              <p className="mt-3">Used Redux for optimized state management, reducing data-fetching overhead by 30%.</p>
              <p className="mt-3">Designed with rural accessibility in mind to support users with low digital literacy.</p>
            </div>
          </div>

          {/* Alternate layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:[&>*:nth-child(1)]:order-1 md:[&>*:nth-child(2)]:order-2">
            <img src="/public/poly.png" alt="Project 2" className="rounded-xl shadow-lg" />
            <div>
              <h3 className="text-2xl"><span className="font-bold"> PolyScale</span><span className="text-xl"> – Microservices-based inventory management</span></h3>
              <p className="text-xl"><span className="font-bold">Tech Stack</span> -  Go, GraphQL, gRPC, PostgreSQL, Docker, Elasticsearch</p>
              <p className=""><a href="https://github.com/shubhamMukherjee2304/PolyScale.git">Link - https://tinyurl.com/r7vzjdcw</a></p>
              <p className="mt-3">
                Architected modular microservices for product and order management with sub-200ms query latency.
              </p>
              <p className="mt-3">Leveraged GraphQL to reduce over-fetching and improved API efficiency by 40%.</p>
              <p className="mt-3">Used Docker for containerization and Elasticsearch for lightning-fast search operations.</p>
              
            </div>
            
          </div>


        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6">
        <h2 className="text-4xl text-center font-semibold mb-12">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          <div className="bg-gray-800 p-3 rounded-xl text-center shadow-lg">           
            <img src="/public/aa1.png" alt="Award" className="w-60 h-50 mx-auto mb-4" />
            <h4 className="text-xl font-bold">1st Place – Cryptec Coding Battle (DSA) – NMIT</h4>
            
          </div>

          <div className="bg-gray-800 p-3 rounded-xl text-center shadow-lg">
            <img src="/public/aa2.png" alt="Award" className="w-60 h-50 mx-auto mb-4" />
            <h4 className="text-xl font-bold">2nd Place – CodeSprint Hackathon – Google Developer Student Clubs (GDSC)</h4>
            
          </div>

          

          <div className="bg-gray-800 p-3 rounded-xl text-center shadow-lg">
            <img src="/public/aa3.png" alt="Award" className="w-60 h-40 mx-auto mb-4" />
            <h4 className="text-xl font-bold">Finalist – SheCodes Hackathon – Reva University</h4>
            
          </div>

          {/* More achievements */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-6 bg-gray-900 text-center text-white">
        <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">Have a project in mind or just want to connect?</p>
        <a href="mailto:shubhammukherjee1000@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl text-lg shadow-md transition">Say Hello</a>
      </section>
    </div>
  );
}
