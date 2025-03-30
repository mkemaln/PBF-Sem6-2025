import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya',
  }
}

export default function Home() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800 dark:text-white">Tentang Saya</h1>
      </header>
      <div className="mt-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-12 place-items-center gap-y-16 mt-8">
          <div className="col-span-1 flex-row">
            <img className="rounded-full" src="https://get.pxhere.com/photo/person-suit-profile-male-portrait-young-professional-profession-hairstyle-social-media-elegant-cv-businessperson-white-collar-worker-459413.jpg" alt="" />
            <div className="grid grid-cols-3 gap-x-4 mt-4">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.559 2.841-1.559 3.037 0 3.6 2.001 3.6 4.604v5.588z" />
                </svg>
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full hover:bg-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.805 5.623-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="mailto:your-email@example.com" className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.287l-12-8.713v12h24v-12l-12 8.713z" />
                </svg>
              </a>
            </div>
          </div>
          <p className="col-span-5">
            Halo! Nama saya adalah Kemal, seorang pengembang web yang antusias dengan teknologi modern. 
            Saya memiliki minat besar dalam membangun aplikasi yang bermanfaat dan mudah digunakan. 
            Di waktu luang, saya suka belajar hal-hal baru dan berbagi pengetahuan dengan komunitas.
          </p>
        </div>
        
      </div>
    </div>
  );
}