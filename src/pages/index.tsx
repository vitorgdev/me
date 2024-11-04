// src/pages/index.tsx
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import Flag from 'react-world-flags'
import LanguageSelector from "../components/LanguageSelector";

// Incluindo a importação da fonte Roboto Mono e adicionando meta tags
export const Head: HeadFC = () => (
  <>
    <title>Vitor Gomes - Portfólio</title>
    <meta
      name="description"
      content="Portfólio profissional de Vitor Gomes, Engineering Manager especializado em tecnologias educacionais."
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
  </>
)

// Estilos com Tailwind CSS e ajustes conforme solicitado
const IndexPage: React.FC<PageProps> = () => {
  // Estado para controlar a expansão dos itens de experiência
  const [expandedWorkIndex, setExpandedWorkIndex] = React.useState<number | null>(null)

  // Estado para controlar o Konami Code
  const [konamiActive, setKonamiActive] = React.useState(false)
  const konamiSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown"]
  const [inputSequence, setInputSequence] = React.useState<string[]>([])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setInputSequence((prevSequence) => {
        const newSequence = [...prevSequence, event.key].slice(-konamiSequence.length)
        if (JSON.stringify(newSequence) === JSON.stringify(konamiSequence)) {
          setKonamiActive(true)
        }
        return newSequence
      })
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  React.useEffect(() => {
    if (konamiActive) {
      // Função para substituir todo o texto por spans animados
      const textNodes: Node[] = []

      function getTextNodes(node: Node) {
        if (node.nodeType === Node.TEXT_NODE) {
          if (node.textContent && node.textContent.trim() !== '') {
            textNodes.push(node)
          }
        } else if (
          node.nodeType === Node.ELEMENT_NODE &&
          !(node instanceof HTMLScriptElement) &&
          !(node instanceof HTMLStyleElement)
        ) {
          node.childNodes.forEach(getTextNodes)
        }
      }

      getTextNodes(document.body)

      textNodes.forEach((node) => {
        const parent = node.parentNode
        if (parent) {
          const characters = node.textContent?.split('') || []
          const fragment = document.createDocumentFragment()
          characters.forEach((char) => {
            const span = document.createElement('span')
            span.textContent = char
            span.classList.add('falling-letter')
            // Adiciona variação aleatória na posição horizontal
            span.style.transform = `translateX(${Math.random() * 100 - 50}px)`
            fragment.appendChild(span)
          })
          parent.replaceChild(fragment, node)
        }
      })
    }
  }, [konamiActive])

  // Experiências profissionais atualizadas com base no seu currículo
  const workExperiences = [
    {
      date: "Presente",
      company: "Arcotech",
      role: {
        EN: "Engineering Manager",
        FR: "Responsable Ingénierie",
        IT: "Responsabile Ingegneria",
        PT: "Engineering Manager",
        ES: "Gerente de Ingeniería",
      },
      description: {
        EN:
          "Leadership of multiple squads in developing digital pathways with recommendation algorithms in Python. Management of educational content and Eduqo product. Leading teams of 20 people.",
        FR:
          "Direction de plusieurs équipes dans le développement de parcours numériques avec des algorithmes de recommandation en Python. Gestion du contenu éducatif et du produit Eduqo. Direction d'équipes de 20 personnes.",
        IT:
          "Leadership di più squadre nello sviluppo di percorsi digitali con algoritmi di raccomandazione in Python. Gestione dei contenuti educativi e del prodotto Eduqo. Guida di team di 20 persone.",
        PT:
          "Liderança de múltiplas squads no desenvolvimento de trilhas digitais com algoritmos de recomendação em Python. Gestão de conteúdo educacional e produto Eduqo. Liderança de equipes com 20 pessoas.",
        ES:
          "Liderazgo de múltiples squads en el desarrollo de rutas digitales con algoritmos de recomendación en Python. Gestión de contenido educativo y producto Eduqo. Liderando equipos de 20 personas.",
      },
    },
    {
      date: "Ago 2023",
      company: "Arco Educação",
      role: {
        EN: "Tech Lead",
        FR: "Chef d'équipe technique",
        IT: "Responsabile Tecnico",
        PT: "Tech Lead",
        ES: "Líder Técnico",
      },
      description: {
        EN:
          "Leadership of educational systems teams. Implementation of agile methodologies and metrics management. Use of various technologies and databases, leading 4 teams with more than 25 professionals.",
        FR:
          "Direction d'équipes de systèmes éducatifs. Mise en place de méthodologies agiles et gestion des métriques. Utilisation de diverses technologies et bases de données, dirigeant 4 équipes avec plus de 25 professionnels.",
        IT:
          "Leadership di team di sistemi educativi. Implementazione di metodologie agili e gestione delle metriche. Uso di varie tecnologie e database, guidando 4 team con oltre 25 professionisti.",
        PT:
          "Liderança de equipes de sistemas de ensino. Implementação de metodologias ágeis e gestão de métricas. Uso de diversas tecnologias e bancos de dados, liderando 4 equipes com mais de 25 profissionais.",
        ES:
          "Liderazgo de equipos de sistemas educativos. Implementación de metodologías ágiles y gestión de métricas. Uso de diversas tecnologías y bases de datos, liderando 4 equipos con más de 25 profesionales.",
      },
    },
    {
      date: "Dez 2023",
      company: "Encaixe",
      role: {
        EN: "Head of Engineering",
        FR: "Responsable Ingénierie",
        IT: "Responsabile Ingegneria",
        PT: "Head of Engineering",
        ES: "Jefe de Ingeniería",
      },
      description: {
        EN:
          "Integration with WhatsApp using APIs and database technologies.",
        FR:
          "Intégration avec WhatsApp en utilisant des APIs et des technologies de bases de données.",
        IT:
          "Integrazione con WhatsApp utilizzando API e tecnologie di database.",
        PT:
          "Integração com WhatsApp usando APIs e tecnologias de banco de dados.",
        ES:
          "Integración con WhatsApp utilizando APIs y tecnologías de bases de datos.",
      },
    },
    {
      date: "Dez 2023",
      company: "Saúde TV",
      role: {
        EN: "Chief Technology Officer (CTO)",
        FR: "Directeur Technique (CTO)",
        IT: "Direttore Tecnico (CTO)",
        PT: "Chief Technology Officer",
        ES: "Director de Tecnología (CTO)",
      },
      description: {
        EN:
          "Leadership and development of health systems, becoming a partner in the company.",
        FR:
          "Leadership et développement de systèmes de santé, devenant associé de l'entreprise.",
        IT:
          "Leadership e sviluppo di sistemi sanitari, diventando socio dell'azienda.",
        PT:
          "Liderança e desenvolvimento de sistemas para saúde, tornando-se sócio da empresa.",
        ES:
          "Liderazgo y desarrollo de sistemas de salud, convirtiéndose en socio de la empresa.",
      },
    },
    {
      date: "Ago 2022",
      company: "Grupo Boticário",
      role: {
        EN: "Tech Lead",
        FR: "Chef d'équipe technique",
        IT: "Responsabile Tecnico",
        PT: "Tech Lead",
        ES: "Líder Técnico",
      },
      description: {
        EN:
          "Development of the POS system (Sizi) for franchisees using hexagonal architecture and microservices. Implementation of trunk-based development and test pipelines.",
        FR:
          "Développement du système POS (Sizi) pour les franchisés en utilisant une architecture hexagonale et des microservices. Mise en œuvre du développement trunk-based et des pipelines de tests.",
        IT:
          "Sviluppo del sistema POS (Sizi) per i franchisee utilizzando architettura esagonale e microservizi. Implementazione di sviluppo trunk-based e pipeline di test.",
        PT:
          "Desenvolvimento do sistema PDV (Sizi) para franqueados utilizando arquitetura hexagonal e microserviços. Implementação de trunk-based development e pipelines de testes.",
        ES:
          "Desarrollo del sistema POS (Sizi) para franquiciados utilizando arquitectura hexagonal y microservicios. Implementación de desarrollo basado en trunk y pipelines de pruebas.",
      },
    },
    {
      date: "Fev 2022",
      company: "Skeelo",
      role: {
        EN: "Senior Software Engineer",
        FR: "Ingénieur Logiciel Senior",
        IT: "Ingegnere Software Senior",
        PT: "Senior Software Engineer",
        ES: "Ingeniero de Software Senior",
      },
      description: {
        EN:
          "Development and launch of an application.",
        FR:
          "Développement et lancement d'une application.",
        IT:
          "Sviluppo e lancio di un'applicazione.",
        PT:
          "Desenvolvimento e lançamento de aplicação.",
        ES:
          "Desarrollo y lanzamiento de una aplicación.",
      },
    },
    {
      date: "Nov 2021",
      company: "CI&T",
      role: {
        EN: "Senior Software Engineer",
        FR: "Ingénieur Logiciel Senior",
        IT: "Ingegnere Software Senior",
        PT: "Senior Software Engineer",
        ES: "Ingeniero de Software Senior",
      },
      description: {
        EN:
          "Development of Lambdas and migration of AWS services to EKS.",
        FR:
          "Développement de Lambdas et migration des services AWS vers EKS.",
        IT:
          "Sviluppo di Lambdas e migrazione dei servizi AWS a EKS.",
        PT:
          "Desenvolvimento de Lambdas e migração de serviços AWS para EKS.",
        ES:
          "Desarrollo de Lambdas y migración de servicios AWS a EKS.",
      },
    },
    {
      date: "Abr 2021",
      company: "ACP Group",
      role: {
        EN: "Senior/Staff Software Engineer",
        FR: "Ingénieur Logiciel Senior/Principal",
        IT: "Ingegnere Software Senior/Staff",
        PT: "Senior/Staff Software Engineer",
        ES: "Ingeniero de Software Senior/Staff",
      },
      description: {
        EN:
          "Implementation of CRM and virtual store for SEBRAE, development focused on microservices.",
        FR:
          "Mise en œuvre de CRM et boutique en ligne pour SEBRAE, développement axé sur les microservices.",
        IT:
          "Implementazione di CRM e negozio virtuale per SEBRAE, sviluppo focalizzato su microservizi.",
        PT:
          "Implementação de CRM e loja virtual para SEBRAE, desenvolvimento focado em microserviços.",
        ES:
          "Implementación de CRM y tienda virtual para SEBRAE, desarrollo enfocado en microservicios.",
      },
    },
    {
      date: "Nov 2019",
      company: "Tel",
      role: {
        EN: "Senior Software Engineer",
        FR: "Ingénieur Logiciel Senior",
        IT: "Ingegnere Software Senior",
        PT: "Senior Software Engineer",
        ES: "Ingeniero de Software Senior",
      },
      description: {
        EN:
          "Implementation of systems for call centers using hexagonal architecture and microservices. Conducted code reviews and testing.",
        FR:
          "Mise en œuvre de systèmes pour centres d'appels utilisant une architecture hexagonale et des microservices. Réalisation de revues de code et de tests.",
        IT:
          "Implementazione di sistemi per call center utilizzando architettura esagonale e microservizi. Condotto revisioni del codice e test.",
        PT:
          "Implementação de sistemas para call centers utilizando arquitetura hexagonal e microserviços. Realização de code review e testes.",
        ES:
          "Implementación de sistemas para centros de llamadas utilizando arquitectura hexagonal y microservicios. Realización de revisiones de código y pruebas.",
      },
    },
    {
      date: "Dez 2017",
      company: "Clínicas Clivale",
      role: {
        EN: "Junior Software Engineer",
        FR: "Ingénieur Logiciel Junior",
        IT: "Ingegnere Software Junior",
        PT: "Junior Software Engineer",
        ES: "Ingeniero de Software Junior",
      },
      description: {
        EN:
          "Development of CMS and use of AWS EC2 and ECS.",
        FR:
          "Développement de CMS et utilisation d'AWS EC2 et ECS.",
        IT:
          "Sviluppo di CMS e utilizzo di AWS EC2 ed ECS.",
        PT:
          "Desenvolvimento de CMS e uso de AWS EC2 e ECS.",
        ES:
          "Desarrollo de CMS y uso de AWS EC2 y ECS.",
      },
    },
    // Adicione mais experiências conforme necessário
  ]

  // Habilidades atualizadas com base nas suas competências
  const skills = [
    { name: "Liderança e Gestão", url: "#" },
    { name: "Metodologias Ágeis", url: "https://pt.wikipedia.org/wiki/Desenvolvimento_ágil_de_software" },
    { name: "Node.js", url: "https://nodejs.org/" },
    { name: "Python", url: "https://www.python.org/" },
    { name: "React", url: "https://reactjs.org/" },
    { name: "Java", url: "https://www.java.com/" },
    { name: ".NET", url: "https://dotnet.microsoft.com/" },
    { name: "Kotlin", url: "https://kotlinlang.org/" },
    { name: "Vue.js", url: "https://vuejs.org/" },
    { name: "Go", url: "https://golang.org/" },
    { name: "PHP", url: "https://www.php.net/" },
    { name: "Laravel", url: "https://laravel.com/" },
    { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
    { name: "Flutter", url: "https://flutter.dev/" },
    { name: "PostgreSQL", url: "https://www.postgresql.org/" },
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "MySQL", url: "https://www.mysql.com/" },
    { name: "Redis", url: "https://redis.io/" },
    { name: "AWS", url: "https://aws.amazon.com/" },
    { name: "RabbitMQ", url: "https://www.rabbitmq.com/" },
    { name: "IBM Watson", url: "https://www.ibm.com/watson" },
    { name: "Microserviços", url: "#" },
    { name: "Arquitetura Hexagonal", url: "#" },
    { name: "Clean Architecture", url: "#" },
    { name: "CI/CD", url: "https://pt.wikipedia.org/wiki/CI/CD" },
    // Adicione mais habilidades conforme necessário
  ]
  const [language, setLanguage] = React.useState<'EN' | 'FR' | 'IT' | 'PT' | 'ES'>('PT')

  return (
    <main className="bg-gray-800 text-gray-200 min-h-screen flex flex-col items-center p-6 font-roboto-mono overflow-hidden">
      {/* Animação do Konami Code */}
      {/* (O código da animação permanece o mesmo) */}

      <div className="max-w-2xl w-full">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Vitor Gomes</h1>
          <nav className="flex items-center space-x-4 text-gray-400 text-base">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            
            {/* Seleção de idioma com um select e bandeiras */}
            <LanguageSelector language={language} setLanguage={setLanguage} />

          </nav>
        </header>

        {/* Sobre */}
        <section className="mb-12" id="home">
          <motion.h2
            className="text-xl font-semibold text-white mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {language === 'EN' ? 'Hello! 👋' :
              language === 'FR' ? 'Bonjour! 👋' :
                language === 'IT' ? 'Ciao! 👋' :
                  language === 'PT' ? 'Olá! 👋' :
                    '¡Hola! 👋'}
          </motion.h2>
          <motion.p
            className="text-base text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {language === 'EN' && 'I am Vitor Gomes, Engineering Manager specializing in educational technologies. With experience leading diverse teams and developing personalized learning solutions, I am dedicated to creating impactful digital tools that enhance the learning experience.'}
            {language === 'FR' && "Je suis Vitor Gomes, Engineering Manager spécialisé dans les technologies éducatives. Avec une expérience dans la direction d'équipes diverses et le développement de solutions d'apprentissage personnalisées, je me consacre à créer des outils numériques percutants qui améliorent l'expérience d'apprentissage."}
            {language === 'IT' && "Sono Vitor Gomes, Engineering Manager specializzato in tecnologie educative. Con esperienza nella leadership di team diversificati e nello sviluppo di soluzioni di apprendimento personalizzate, mi dedico a creare strumenti digitali impattanti che migliorano l'esperienza di apprendimento."}
            {language === 'PT' && "Sou Vitor Gomes, Engineering Manager especializado em tecnologias educacionais. Com experiência em liderar equipes diversas e desenvolver soluções de aprendizagem personalizadas, dedico-me a criar ferramentas digitais impactantes que aprimoram a experiência de aprendizagem."}
            {language === 'ES' && "Soy Vitor Gomes, Engineering Manager especializado en tecnologías educativas. Con experiencia en liderar equipos diversos y desarrollar soluciones de aprendizaje personalizadas, me dedico a crear herramientas digitales impactantes que mejoran la experiencia de aprendizaje."}
          </motion.p>
          {/* Links para redes sociais */}
          {/* ... (permanece o mesmo) */}
        </section>

        {/* Experiência Profissional */}
        <section id="work" className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">
            {language === 'EN' ? 'Work' :
              language === 'FR' ? 'Expérience' :
                language === 'IT' ? 'Esperienza' :
                  language === 'PT' ? 'Experiência' :
                    'Experiencia'}
          </h2>
          <div className="space-y-2">
            {workExperiences.map((work, index) => (
              <div key={index} className="text-base">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setExpandedWorkIndex(expandedWorkIndex === index ? null : index)
                  }
                >
                  <div className="text-gray-400 w-40 flex-shrink-0">{work.date}</div>
                  <div className="text-gray-200 w-80 flex-shrink-0">
                    {work.role[language]}
                  </div>
                  <div className="flex-1 text-gray-200 w-20 flex justify-between items-center">
                <a
                  href={work.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 underline"
                >
                  {work.company}
                </a>
                {expandedWorkIndex === index ? (
                  <FiChevronUp className="text-gray-400" />
                ) : (
                  <FiChevronDown className="text-gray-400" />
                )}
              </div>

                </div>
                <AnimatePresence>
                  {expandedWorkIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden text-gray-300 mt-2 ml-40"
                    >
                      <p className="text-sm whitespace-pre-line">
                        {work.description[language]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>


        {/* Habilidades */}
        <section id="skills" className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <a
                key={index}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 underline"
              >
                {skill.name}
              </a>
            ))}
          </div>
        </section>


        {/* Projetos */}
        <section id="projects" className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Projects</h2>
          <div className="space-y-2">
            {[
              {
                date: "Mar 2023",
                title: "Caminhos de Aprendizagem Personalizados",
                link: "#",
              },
              {
                date: "Jan 2023",
                title: "Integração WhatsApp para Encaixe",
                link: "#",
              },
              {
                date: "Dez 2022",
                title: "Sistema POS Sizi",
                link: "#",
              },
              {
                date: "Set 2022",
                title: "Biblioteca de Conteúdo Educacional",
                link: "#",
              },
              // Adicione mais projetos conforme necessário
            ].map((project, index) => (
              <div key={index} className="flex text-base">
                <div className="text-gray-400 w-28">{project.date}</div>
                <a
                  href={project.link}
                  className="flex-1 text-gray-200 hover:underline"
                >
                  {project.title}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section id="contact" className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para me
            contatar por email ou através das minhas redes sociais.
          </p>
          <a
            href="mailto:vitorg.dev@gmail.com"
            className="inline-block bg-gray-700 text-white py-2 px-4 rounded text-base font-medium hover:bg-gray-600 transition-colors"
          >
            Diga Olá
          </a>
        </section>
      </div>
    </main>
  )
}

export default IndexPage
