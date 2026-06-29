import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="font-mono text-blue text-sm mb-4 tracking-widest uppercase">
              ¡Hola, soy
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent leading-tight">
              Jorge González
            </h1>
            <p className="font-mono text-subtext text-lg md:text-xl mb-6">
              Desarrollador Full Stack
            </p>
            <p className="text-subtext max-w-xl mb-10 leading-relaxed">
              5 años de experiencia en sistemas institucionales de alta
              complejidad. Especializado en arquitecturas PHP/Yii2, React y
              TypeScript, con foco en soluciones escalables de extremo a extremo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#proyectos"
                className="px-6 py-3 rounded-lg bg-blue text-mantle font-semibold text-sm hover:bg-blue/90 transition-all duration-200"
              >
                Ver proyectos
              </a>
              <a
                href="https://github.com/jorgeignacio97"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-blue/40 text-blue font-semibold text-sm hover:bg-blue/10 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 rounded-lg border border-overlay text-subtext font-semibold text-sm hover:border-purple/40 hover:text-purple transition-all duration-200"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue/30 to-purple/30 blur-2xl" />
              <div className="relative w-full h-full rounded-full border-2 border-blue/40 overflow-hidden bg-surface">
                <Image
                  src="/profile.png"
                  alt="Jorge González"
                  fill
                  sizes="(max-width: 768px) 192px, 256px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-16">
          <a
            href="#sobre-mi"
            className="text-subtext hover:text-blue transition-colors animate-bounce"
            aria-label="Ir a Sobre mí"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
