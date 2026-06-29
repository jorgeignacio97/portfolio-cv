import SectionTitle from "@/components/ui/SectionTitle";

const stats = [
  { label: "Años de experiencia", value: "5+" },
  { label: "Facultades impactadas", value: "6" },
  { label: "Departamentos académicos", value: "26" },
  { label: "Stack principal", value: "PHP · React" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Sobre mí" subtitle="// perfil.profesional" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-subtext leading-relaxed">
              Desarrollador Full Stack con{" "}
              <span className="text-text font-medium">
                5 años de experiencia
              </span>{" "}
              en sistemas institucionales de alta complejidad. Desarrollador
              principal de{" "}
              <span className="text-blue font-medium">SIVi</span>, plataforma
              que centraliza la gestión de vinculación académica para{" "}
              <span className="text-text font-medium">
                6 facultades y 26 departamentos
              </span>{" "}
              en la Universidad de La Frontera, integrando equipos
              multidisciplinarios y socios estratégicos nacionales e
              internacionales.
            </p>
            <p className="text-subtext leading-relaxed">
              Especializado en arquitecturas PHP/Yii2 con modelos de datos
              complejos sobre MySQL y Sybase ASE. Impulsé la incorporación de{" "}
              <span className="text-purple font-medium">
                React y TypeScript
              </span>{" "}
              en módulos clave de SIVi para modernizar el frontend donde el
              stack legacy limita la escalabilidad y mantenibilidad.
            </p>
            <p className="text-subtext leading-relaxed">
              Me desenvuelvo bien en equipos pequeños con alta responsabilidad
              técnica sobre el producto, aportando tanto en decisiones de
              arquitectura como en la entrega concreta de módulos de extremo
              a extremo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface border border-overlay rounded-xl p-5 text-center hover:border-blue/30 transition-colors duration-200"
              >
                <div className="text-2xl font-bold text-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-subtext text-xs font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
