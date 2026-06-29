import SectionTitle from "@/components/ui/SectionTitle";

export default function Education() {
  return (
    <section id="educacion" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Educación" subtitle="// formacion.academica" />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {/* Degree */}
          <div className="bg-surface border border-overlay rounded-xl p-6 hover:border-blue/30 transition-colors duration-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue/20 border border-blue/30 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-text font-semibold mb-1 leading-snug">
                  Técnico de Nivel Superior Analista Programador
                </h3>
                <p className="text-blue text-sm font-medium mb-1">
                  Instituto Profesional Santo Tomás
                </p>
                <p className="text-subtext font-mono text-xs">
                  2018 – 2021 · Temuco, Chile
                </p>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="bg-surface border border-overlay rounded-xl p-6 hover:border-purple/30 transition-colors duration-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple/20 border border-purple/30 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-text font-semibold mb-1 leading-snug">
                  Introducción a la Ciberseguridad
                </h3>
                <p className="text-purple text-sm font-medium mb-1">
                  Academia CEA · Contraloría General de la República
                </p>
                <p className="text-subtext font-mono text-xs">
                  Mayo 2026 · Certificación
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-surface border border-overlay rounded-xl p-6 md:col-span-2">
            <h3 className="text-subtext font-mono text-xs uppercase tracking-widest mb-4">
              Idiomas
            </h3>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <span className="text-green font-mono font-bold text-sm">
                  ES
                </span>
                <div>
                  <p className="text-text text-sm font-medium">Español</p>
                  <p className="text-subtext text-xs font-mono">Nativo</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue font-mono font-bold text-sm">
                  EN
                </span>
                <div>
                  <p className="text-text text-sm font-medium">Inglés</p>
                  <p className="text-subtext text-xs font-mono">
                    Lectura técnica avanzada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
