import { useState, useEffect, FormEvent } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronDown, Server, Shield, Network, Code, FileText, Award, Briefcase, GraduationCap, Eye } from 'lucide-react';

const GITHUB_URL = 'https://github.com/bakoww';
const LINKEDIN_URL = 'https://www.linkedin.com/in/mathis-dupont—korpys-12a474295';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [scrolled, setScrolled] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['accueil', 'presentation', 'competences', 'projets', 'experiences', 'veille', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact portfolio - ${contactName || 'Sans nom'}`);
    const body = encodeURIComponent(`Nom: ${contactName}\nEmail: ${contactEmail}\n\n${contactMessage}`);
    window.location.href = `mailto:dupontkorpysm@gmail.com?subject=${subject}&body=${body}`;
  };

  const competences = [
    {
      icon: Server,
      titre: 'Administration Systèmes',
      description: 'Installation, configuration et administration de serveurs Windows Server et Linux (Debian, Ubuntu, CentOS)',
      technologies: ['Windows Server 2019/2022', 'Active Directory', 'Linux', 'PowerShell', 'Bash']
    },
    {
      icon: Network,
      titre: 'Réseaux & Infrastructure',
      description: 'Configuration et maintenance d\'infrastructures réseau, routage, VLAN, et services réseau',
      technologies: ['Cisco IOS', 'VLANs', 'Routage', 'DHCP/DNS', 'VPN']
    },
    {
      icon: Shield,
      titre: 'Cybersécurité',
      description: 'Mise en place de solutions de sécurité, pare-feu, surveillance et analyse des vulnérabilités',
      technologies: ['pfSense', 'Firewalls', 'IDS/IPS', 'Sauvegardes', 'RGPD']
    },
    {
      icon: Code,
      titre: 'Virtualisation & Cloud',
      description: 'Déploiement et gestion d\'environnements virtualisés et conteneurisés',
      technologies: ['VMware', 'Hyper-V', 'Docker', 'Proxmox', 'VirtualBox']
    },
    {
      icon: FileText,
      titre: 'Scripting & Automatisation',
      description: 'Développement de scripts pour automatiser les tâches d\'administration système',
      technologies: ['PowerShell', 'Bash', 'Python', 'Batch', 'Ansible']
    },
    {
      icon: Award,
      titre: 'Support & Documentation',
      description: 'Assistance utilisateurs, résolution d\'incidents et rédaction de documentation technique',
      technologies: ['GLPI', 'Ticketing', 'Documentation', 'Formation', 'Support N1/N2']
    }
  ];

  const projets = [
    {
      titre: 'Infrastructure Active Directory',
      contexte: 'Stage en entreprise',
      description: 'Déploiement complet d\'une infrastructure Active Directory pour une PME de 50 utilisateurs. Configuration des GPO, gestion des droits, mise en place de stratégies de sécurité.',
      competences: ['Windows Server', 'Active Directory', 'GPO', 'DNS', 'DHCP'],
      resultats: 'Centralisation de la gestion des utilisateurs, amélioration de la sécurité, réduction du temps d\'administration de 40%'
    },
    {
      titre: 'Solution de Virtualisation',
      contexte: 'Projet personnel / Lab',
      description: 'Mise en place d\'un serveur de virtualisation avec Proxmox pour héberger plusieurs machines virtuelles (serveurs web, BDD, services réseau).',
      competences: ['Proxmox', 'Linux', 'KVM', 'Réseaux virtuels', 'Stockage'],
      resultats: 'Infrastructure évolutive et économique, optimisation des ressources matérielles'
    },
    {
      titre: 'Sécurisation Réseau & Firewall',
      contexte: 'Projet scolaire',
      description: 'Configuration d\'un pare-feu pfSense avec segmentation réseau (DMZ, LAN, VLAN), règles de filtrage avancées, VPN site-à-site.',
      competences: ['pfSense', 'VLANs', 'Firewall', 'VPN', 'Sécurité'],
      resultats: 'Architecture sécurisée respectant les bonnes pratiques, isolation des services critiques'
    },
    {
      titre: 'Supervision & Monitoring',
      contexte: 'Stage en entreprise',
      description: 'Déploiement d\'une solution de supervision avec Zabbix pour monitorer l\'état des serveurs, services et équipements réseau.',
      competences: ['Zabbix', 'SNMP', 'Alertes', 'Graphiques', 'Reporting'],
      resultats: 'Détection proactive des incidents, amélioration de la disponibilité des services'
    },
    {
      titre: 'Automatisation avec Scripts',
      contexte: 'Projet personnel',
      description: 'Développement de scripts PowerShell et Bash pour automatiser la création d\'utilisateurs, sauvegardes, et maintenance système.',
      competences: ['PowerShell', 'Bash', 'Python', 'Automatisation', 'Planification'],
      resultats: 'Gain de temps significatif, réduction des erreurs humaines'
    },
    {
      titre: 'Migration Serveur Mail',
      contexte: 'Stage en entreprise',
      description: 'Migration d\'un serveur de messagerie Exchange vers une solution cloud Microsoft 365, avec formation des utilisateurs.',
      competences: ['Exchange', 'Microsoft 365', 'Migration', 'Formation', 'Support'],
      resultats: 'Transition réussie sans perte de données, satisfaction des utilisateurs'
    }
  ];

  const experiences = [
    {
      titre: 'Technicien Infrastructure',
      entreprise: 'Nom de l\'entreprise',
      periode: 'Mai - Juin 2024',
      type: 'Stage',
      missions: [
        'Administration de serveurs Windows Server et Linux',
        'Gestion du parc informatique (300+ postes)',
        'Support technique niveau 2',
        'Configuration d\'équipements réseau (switches, routeurs)',
        'Déploiement de solutions de sécurité'
      ]
    },
    {
      titre: 'Assistant Système et Réseau',
      entreprise: 'Nom de l\'entreprise',
      periode: 'Novembre - Décembre 2023',
      type: 'Stage',
      missions: [
        'Installation et configuration de postes de travail',
        'Maintenance préventive et corrective',
        'Gestion des sauvegardes',
        'Documentation des procédures',
        'Participation aux projets d\'infrastructure'
      ]
    }
  ];

  const veilleArticles = [
    {
      titre: 'Vulnérabilités Zero-Day',
      date: 'Mars 2024',
      source: 'CERT-FR',
      description: 'Analyse des dernières vulnérabilités critiques affectant Windows Server et recommandations de sécurisation.',
      tags: ['Sécurité', 'Windows', 'Vulnérabilités']
    },
    {
      titre: 'Evolution du Cloud Computing',
      date: 'Février 2024',
      source: 'IT Social',
      description: 'Tendances 2024 du cloud computing et impact sur les infrastructures d\'entreprise.',
      tags: ['Cloud', 'Infrastructure', 'Tendances']
    },
    {
      titre: 'Nouvelles fonctionnalités Windows Server 2025',
      date: 'Janvier 2024',
      source: 'Microsoft Tech Community',
      description: 'Découverte des innovations de Windows Server 2025 et préparation à la migration.',
      tags: ['Windows Server', 'Administration', 'Innovation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-cyan-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold transition-colors ${
                scrolled ? 'text-cyan-400' : 'text-cyan-300'
              }`}>
                Portfolio BTS SIO SISR
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {['accueil', 'presentation', 'competences', 'projets', 'experiences', 'veille', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === section
                        ? 'bg-cyan-500 text-gray-900'
                        : scrolled
                        ? 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'
                        : 'text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${
                  scrolled ? 'text-cyan-400' : 'text-cyan-300'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 shadow-lg shadow-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['accueil', 'presentation', 'competences', 'projets', 'experiences', 'veille', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400 mb-6 animate-fade-in">
            Mathis DUPONT--KORPYS
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 mb-4">
            Étudiant en BTS SIO Option SISR
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Spécialiste Solutions d'Infrastructure, Systèmes et Réseaux
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full transition-colors border border-cyan-500/30">
              <Github className="text-cyan-400" size={24} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full transition-colors border border-cyan-500/30">
              <Linkedin className="text-cyan-400" size={24} />
            </a>
            <a href="#contact" className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full transition-colors border border-cyan-500/30">
              <Mail className="text-cyan-400" size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('presentation')}
            className="animate-bounce"
          >
            <ChevronDown className="text-cyan-400" size={40} />
          </button>
        </div>
      </section>

      {/* Presentation */}
      <section id="presentation" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-cyan-400" size={32} />
            <h2 className="text-4xl font-bold text-white">Présentation</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Actuellement en deuxième année de BTS Services Informatiques aux Organisations, option Solutions d'Infrastructure, Systèmes et Réseaux (SISR), je me passionne pour l'administration système, la gestion des infrastructures réseau et la cybersécurité.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Mon parcours m'a permis d'acquérir des compétences solides en administration de serveurs Windows et Linux, en configuration d'équipements réseau, ainsi qu'en virtualisation et sécurisation des infrastructures informatiques.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              À travers mes stages et projets personnels, j'ai développé une approche méthodique de la résolution de problèmes techniques et une capacité d'adaptation aux différentes technologies et environnements professionnels.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
                <h3 className="font-semibold text-cyan-400 mb-2">Formation</h3>
                <p className="text-gray-300">BTS SIO SISR</p>
                <p className="text-sm text-gray-400">2024 - 2026</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
                <h3 className="font-semibold text-cyan-400 mb-2">Établissement</h3>
                <p className="text-gray-300">Lycée Saint-Marc</p>
                <p className="text-sm text-gray-400">Ville</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30">
                <h3 className="font-semibold text-cyan-400 mb-2">Objectif</h3>
                <p className="text-gray-300">Administrateur Système et Réseau</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competences */}
      <section id="competences" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Compétences Techniques</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competences.map((comp, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-shadow border border-cyan-500/20 hover:border-cyan-500/40"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <comp.icon className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{comp.titre}</h3>
                </div>
                <p className="text-gray-300 mb-4">{comp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {comp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Réalisations Professionnelles</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projets.map((projet, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-shadow border border-emerald-500/20 hover:border-emerald-500/40"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{projet.titre}</h3>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                    {projet.contexte}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{projet.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-emerald-400 mb-2">Compétences mobilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {projet.competences.map((comp, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <h4 className="font-semibold text-emerald-400 mb-2">Résultats :</h4>
                  <p className="text-sm text-gray-400">{projet.resultats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Briefcase className="text-cyan-400" size={32} />
            <h2 className="text-4xl font-bold text-white">Expériences Professionnelles</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg shadow-lg shadow-cyan-500/10 border border-cyan-500/20"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.titre}</h3>
                    <p className="text-lg text-cyan-400">{exp.entreprise}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                      {exp.type}
                    </span>
                    <p className="text-gray-400 mt-2">{exp.periode}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.missions.map((mission, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veille Technologique */}
      <section id="veille" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Eye className="text-cyan-400" size={32} />
            <h2 className="text-4xl font-bold text-white">Veille Technologique</h2>
          </div>

          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Dans le domaine de l'informatique, il est essentiel de se tenir informé des dernières évolutions technologiques,
            des nouvelles vulnérabilités et des bonnes pratiques en matière de sécurité et d'infrastructure.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {veilleArticles.map((article, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-shadow border border-orange-500/20 hover:border-orange-500/40"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white">{article.titre}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">{article.source} - {article.date}</p>
                <p className="text-gray-300 mb-4">{article.description}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded border border-orange-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 p-8 rounded-lg border border-cyan-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Sources de veille</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  CERT-FR (Alertes de sécurité)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  IT Social / Actualités IT
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  Microsoft Tech Community
                </li>
              </ul>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  Reddit r/sysadmin
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  YouTube (NetworkChuck, DevOps)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  Flux RSS spécialisés
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Me Contacter</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg shadow-cyan-500/10 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-cyan-400" size={20} />
                  <span className="text-gray-300">dupontkorpysm@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-cyan-400" size={20} />
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline">
                    www.linkedin.com/in/mathis-dupont—korpys-12a474295
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-cyan-400" size={20} />
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline">
                    github.com/bakoww
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-semibold text-white mb-3">Disponibilité</h4>
                <p className="text-gray-300">
                  Actuellement en recherche d'alternance ou de stage en administration système et réseau.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg shadow-lg shadow-cyan-500/10 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Envoyez un message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-300 mb-2">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="Votre Nom"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="votre@email.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="Votre message..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-500 text-gray-900 py-3 rounded-lg hover:bg-cyan-400 transition-colors font-semibold"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Portfolio BTS SIO SISR - Tous droits réservés
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Créé dans le cadre du BTS Services Informatiques aux Organisations
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
