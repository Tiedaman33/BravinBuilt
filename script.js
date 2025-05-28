// script.js
const sections = {
  home: `
    <section class="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Creative Solutions for Your Digital Needs
          </h1>
          <p class="text-lg text-gray-600 mb-8 max-w-lg">
            I'm a passionate designer and developer creating beautiful, functional digital experiences for modern businesses.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#portfolio" class="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform">
              View My Work
            </a>
            <a href="#contact" class="px-8 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-full hover:bg-indigo-50 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform">
              Contact Me
            </a>
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="relative">
            <div class="absolute inset-0 bg-indigo-300 rounded-full opacity-20 blur-3xl"></div>
            <img 
              src="img.png" 
              alt="Portfolio" 
              class="relative rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  about: `
    <section id="about" class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p class="text-lg text-gray-600">
            Passionate about creating beautiful and functional digital experiences.
          </p>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/3 mb-8 md:mb-0">
            <img 
              src="portfolio.jpeg" 
              alt="Bravin Orina" 
              class="rounded-lg shadow-lg w-full h-45"
            />
          </div>
          <div class="md:w-2/3">
            <h3 class="text-2xl font-bold mb-4">Hi there! I'm Bravin Orina</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              I am a software developer with expertise in full-stack development, backend engineering, and AI-driven applications.
              I have built scalable applications using Node.js, React, MongoDB, and Python, ensuring clean, and well-documented code.
              My skills include backend architecture, API development, authentication systems, and caching with Redis.
              I also specialize in Botpress-powered conversational AI, crafting intelligent chatbots and automation solutions. 
              With strong experience in unit testing (Jest), ESLint, and best coding practices. 
              Passionate about solving complex problems, I have developed interactive platforms and optimized authentication for seamless user experiences.
              I thrive in collaborative environments and enjoy leveraging technology to create impactful solutions.
              Always eager to learn, innovate, and take on new challenges.
            </p>
            <p class="text-gray-600 mb-8 leading-relaxed">
              I believe that great design should be both aesthetically pleasing and highly functional. Whether it's a simple website or a complex application, I focus on delivering solutions that meet both the technical requirements and the user's needs.
            </p>
            
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 class="font-semibold text-gray-800 mb-2">Skills</h4>
                <ul class="space-y-2 text-gray-600">
                  <li>• Web Design & Development</li>
                  <li>• UI/UX Design</li>
                  <li>• Frontend Frameworks </li>
                  <li>• Backend Development </li>
                  <li>• Database Management </li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 mb-2">Tools</h4>
                <ul class="space-y-2 text-gray-600">
                  <li>• Figma, Sketch</li>
                  <li>• Adobe XD, Photoshop</li>
                  <li>• VS Code, Git</li>
                  <li>• Tailwind CSS, Bootstrap</li>
                  <li>• Node.js, Express</li>
                  <li>• MongoDB, PostgreSQL</li>
                  <li>• Docker</li>

                </ul>
              </div>
            </div>

            <a href="#contact" class="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  portfolio: `
    <section id="portfolio" class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Portfolio</h2>
          <p class="text-lg text-gray-600">
            A selection of my best work across various industries and technologies.
          </p>
        </div>

        <div class="flex justify-center mb-12">
          <div class="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button class="px-6 py-2 rounded-full transition-all text-gray-600 hover:bg-gray-100">All Works</button>
            <button class="px-6 py-2 rounded-full transition-all text-gray-600 hover:bg-gray-100">Web Design</button>
            <button class="px-6 py-2 rounded-full transition-all text-gray-600 hover:bg-gray-100">UI/UX</button>
            <button class="px-6 py-2 rounded-full transition-all text-gray-600 hover:bg-gray-100">Graphic Design</button>
          </div>
        </div>

        <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
            <div class="relative overflow-hidden h-64">
              <img 
                src="stwvr.png" 
                alt="Website Development" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div class="p-6">
                  <h3 class="text-white text-xl font-semibold">Website Development</h3>
                  <p class="text-indigo-200">Web Development</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Website Development</h3>
              <p class="text-gray-600 mb-3">Story Weaver Development</p>
              <div class="flex justify-between text-sm text-gray-500">
                <a href="https://github.com/Tiedaman33/A_stories/tree/main" target="_blank" class="text-indigo-600 hover:text-indigo-800 transition-colors">View Project</a>
                <a href="https://www.youtube.com/watch?v=2Yz-lVcovyg" target="_blank" class="text-indigo-600 hover:text-indigo-800 transition-colors">Live Demo</a>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
            <div class="relative overflow-hidden h-64">
              <img 
                src="gt3.png" 
                alt="Website Development" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div class="p-6">
                  <h3 class="text-white text-xl font-semibold">Website Development</h3>
                  <p class="text-indigo-200">Web Development</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">OAuth login system</h3>
              <p class="text-gray-600 mb-3">Gist Tracker Development</p>
              <div class="flex justify-between text-sm text-gray-500">
                <a href="https://github.com/Tiedaman33/Gist_Tracker_App" target="_blank" class="text-indigo-600 hover:text-indigo-800 transition-colors">View Project</a>
                <a href="https://youtu.be/TOHC-8DbASE?si=HImC67PgCddMTCqD" target="_blank" class="text-indigo-600 hover:text-indigo-800 transition-colors">Live Demo</a>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </section>
  `,
  services: `
    <section id="services" class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <p class="text-lg text-gray-600">
            Comprehensive solutions tailored to your specific needs and goals.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="flex justify-center">
              <svg class="w-10 h-10 mb-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m6.364 6.364a9 9 0 11-12.728-12.728l12.728 12.728z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Web Development</h3>
            <p class="text-gray-600">Building responsive, high-performance websites and applications tailored to your business needs.</p>
          </div>
          <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="flex justify-center">
              <svg class="w-10 h-10 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm4 4h10M7 12h10M7 16h6" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">API Development</h3>
            <p class="text-gray-600">Building robust and secure RESTful APIs for scalable backend services and data exchange.</p>
          </div>
          <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="flex justify-center">
              <svg class="w-10 h-10 mb-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12.79A9 9 0 1112.21 3a7 7 0 008.79 9.79z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">AI & Model Integration</h3>
            <p class="text-gray-600">Deploying and integrating machine learning models into local and cloud systems.</p>
          </div>
          <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="flex justify-center">
              <svg class="w-10 h-10 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Chatbot Development</h3>
            <p class="text-gray-600">Custom AI-powered chatbots for education, onboarding, and rural tech access.</p>
          </div>
          <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="flex justify-center">
              <svg class="w-10 h-10 mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm6 5v-1a4 4 0 00-8 0v1m4-14a9 9 0 100 18 9 9 0 000-18z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Authentication</h3>
            <p class="text-gray-600">Secure login systems using JWT, OAuth, and session-based auth tailored to each application’s needs.</p>
          </div>
          <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="flex justify-center">
              <svg class="w-10 h-10 mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2zm0 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2zm0 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Database Design</h3>
            <p class="text-gray-600">Designing optimized relational and NoSQL schemas for scalable data storage and querying.</p>
          </div>
          <div class="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="flex justify-center">
              <svg class="w-10 h-10 mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6.364 1.636l-.707.707M18 12h1M16.95 19.071l-.707-.707M12 20v-1M7.05 19.071l.707-.707M6 12H5m1.636-6.364l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Deployment & DevOps</h3>
            <p class="text-gray-600">Dockerized environments, CI/CD pipelines, and deployment on platforms like Heroku, Render, or VPS.</p>
          </div>

        </div>

        <div class="mt-16 bg-indigo-50 rounded-xl p-8 md:p-12">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 class="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p class="text-gray-600 mb-6">
                If you have a specific project or requirement not covered by my standard services, I'd love to discuss how I can help.
              </p>
            </div>
            <div class="md:w-1/3">
              <a href="#contact" class="inline-block w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors text-center">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  contact: `
    <section id="contact" class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p class="text-lg text-gray-600">
            Have a project in mind? Let's talk and bring your ideas to life.
          </p>
        </div>

        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-1/2">
            <form class="space-y-6">
              <div>
                <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" id="name" class="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="Your name" required />
              </div>
              
              <div>
                <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" class="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="your@email.com" required />
              </div>
              
              <div>
                <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" rows="5" class="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="Tell me about your project..."></textarea>
              </div>
              
              <button type="submit" href="mailto:orinabravin6@gmail.com" class="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>
          </div>
          
          <div class="md:w-1/2">
            <div class="bg-white rounded-xl p-8 shadow-lg">
              <h3 class="text-xl font-bold mb-6">Contact Information</h3>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <svg class="w-6 h-6 text-indigo-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <h4 class="font-semibold mb-1">Address</h4>
                    <p class="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <svg class="w-6 h-6 text-indigo-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <h4 class="font-semibold mb-1">Phone</h4>
                    <p class="text-gray-600">+254 705 885 972</p>
                  </div>
                </div>

               <!-- Email link -->

               <a href="mailto:orinabravin6@gmail.com" class="flex items-start hover:bg-gray-100 p-2 rounded-lg transition">
                 <svg class="w-6 h-6 text-indigo-600 mr-3 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 12l-4-4-4 4m0 0l4 4 4-4m-4-4v8"/>
                 </svg>
                 <div>
                   <h4 class="font-semibold mb-1">Email</h4>
                   <p class="text-gray-600">orinabravin6@gmail.com</p>
                 </div>
               </a>

               <!-- LinkedIn link -->

               <a href="https://www.linkedin.com/in/bravin-orina-3400451a8/" target="_blank" rel="noopener noreferrer" class="flex items-start hover:bg-gray-100 p-2 rounded-lg transition">
                <svg class="w-6 h-6 text-indigo-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14C2.238 0 0 2.239 0 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM7.5 19h-3v-9h3v9zM6 8.5c-.966 0-1.75-.783-1.75-1.75S5.034 5 6 5s1.75.783 1.75 1.75S6.966 8.5 6 8.5zm13 10.5h-3v-4.5c0-1.086-.916-2-2-2s-2 .914-2 2V19h-3v-9h3v1.125C12.14 9.338 13.12 9 14 9c2.206 0 4 1.794 4 4v6z"/>
                </svg>
                <div>
                  <h4 class="font-semibold mb-1">LinkedIn</h4>
                </div>
               </a>

               <!-- GitHub link -->

               <a href="https://github.com/Tiedaman33" target="_blank" rel="noopener noreferrer" class="flex items-start hover:bg-gray-100 p-2 rounded-lg transition">
                 <svg class="w-6 h-6 text-indigo-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.293 9.396 7.865 10.924.575.108.785-.25.785-.555 0-.274-.01-1.003-.015-1.97-3.2.696-3.875-1.543-3.875-1.543-.523-1.328-1.276-1.682-1.276-1.682-1.044-.714.08-.699.08-.699 1.155.082 1.763 1.186 1.763 1.186 1.026 1.757 2.692 1.249 3.345.954.105-.743.402-1.25.731-1.538-2.555-.29-5.24-1.277-5.24-5.685 0-1.255.45-2.28 1.185-3.084-.119-.29-.514-1.456.112-3.037 0 0 .97-.31 3.175 1.18a10.987 10.987 0 012.89-.39c.98.005 1.97.13 2.89.39 2.205-1.49 3.175-1.18 3.175-1.18.627 1.581.232 2.747.113 3.037.737.804 1.184 1.83 1.184 3.084 0 4.42-2.69 5.39-5.25 5.675.414.355.782 1.06.782 2.138 0 1.54-.014 2.78-.014 3.16 0 .308.207.669.79.554C20.21 21.392 23.5 17.084 23.5 12c0-6.352-5.148-11.5-11.5-11.5z"/>
                 </svg>
                 <div>
                   <h4 class="font-semibold mb-1">GitHub</h4>
                 </div>
               </a>
              </div>
            </div>
          </div>
      </div>
    </section>
  `
};

 // Toggle mobile menu
    document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    });
    
function showSection(tabId) {
  const main = document.getElementById('main-content');
  main.innerHTML = sections[tabId];

  // Update active tab styling
  document.querySelectorAll('.tab-link').forEach(btn => {
    btn.classList.remove('text-indigo-600', 'border-b-2', 'border-indigo-600');
  });
  const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('text-indigo-600', 'border-b-2', 'border-indigo-600');
  }

  // Update URL hash without scrolling
  history.replaceState(null, '', `#${tabId}`);
}

document.addEventListener('DOMContentLoaded', () => {
  const initialTab = location.hash ? location.hash.substring(1) : 'home';
  showSection(initialTab);

  document.querySelectorAll('.tab-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent anchor from jumping
      const tabId = btn.getAttribute('data-tab');
      showSection(tabId);
    });
  });

  window.addEventListener('hashchange', () => {
    const tabId = location.hash.substring(1);
    if (sections[tabId]) {
      showSection(tabId);
    }
  });
});
