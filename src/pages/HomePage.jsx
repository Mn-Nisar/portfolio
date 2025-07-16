import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { PublicationCard } from "../components/PublicationCard";
import { TimelineItem } from "../components/TimelineItem";
import { TestimonialCard } from "../components/TestimonialCard";
import { BlogPreview } from "../components/BlogPreview";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { RxExternalLink } from "react-icons/rx";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-amber-50 font-mono text-zinc-800">
      <div style={{ backgroundBlendMode: "multiply" }}>
        <Header />

        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="py-20 flex flex-col items-center text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                <span className="block">Senior Data Scientist/</span>
                <span className="block mt-2">Software Developer</span>
              </h1>
              <p className="text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed">
                Developing computational solutions for complex biological system
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button
                  variant="outline"
                  className="border-zinc-800 hover:bg-zinc-800 hover:text-amber-50"
                >
                  View Research
                  <svg
                    className="ml-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Button>
                <Button className="bg-zinc-800 text-amber-50 hover:bg-zinc-700">
                  Get in Touch
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-800 hover:bg-zinc-800 hover:text-amber-50"
                >
                  Download CV
                  <svg
                    className="ml-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </Button>
              </div>
            </div>
          </section>
          {/* About Section */}
          <section id="about" className="py-20 border-t border-zinc-300">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 tracking-tight">
                About Me
              </h2>
              <div className="space-y-4 text-lg">
                <p>
                  I'm a software developer specializing in bioinformatics
                  research, with a passion for developing tools that help
                  scientists analyze and interpret biological data.
                </p>
                <p>
                  With a background in both computer science Data Analysis, I
                  bridge the gap between computational methods and biological
                  research, creating software solutions that advance our
                  understanding of complex biological systems.
                </p>
                <p>
                  My expertise lies in designing and implementing software
                  systems for multi-omics data. Skilled in developing and
                  deploying full-stack web applications and APIs, I create
                  efficient and scalable solutions for complex biological data
                  analysis.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 border border-zinc-300 rounded-lg">
                  <div className="text-3xl font-bold mb-2">7+</div>
                  <div className="text-zinc-700">Years Experience</div>
                </div>
                <div className="p-4 border border-zinc-300 rounded-lg">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-zinc-700">Publications</div>
                </div>
                <div className="p-4 border border-zinc-300 rounded-lg">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-zinc-700">Projects</div>
                </div>
              </div>
            </div>
          </section>
          {/* Expertise Section */}
          <section id="expertise" className="py-20 border-t border-zinc-300">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 tracking-tight">
                Technical Expertise
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Programming Languages & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Django",
                      "Sql",
                      "Django REST Framework",
                      "FastAPI",
                      "LangChain",
                      "Pandas",
                      "NumPy",
                      "Matplotlib",
                      "PySpark",
                      "PyTorch",
                      "Scikit-learn",
                    ].map((lang) => (
                      <Badge
                        key={lang}
                        variant="outline"
                        className="text-sm py-1 border-zinc-400"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Web Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "React.js",
                      "Next.js",
                      "Redux",
                      "D3.js",
                      "Cytoscape.js",
                      "HTML",
                      "CSS",
                      "Tailwind CSS",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-sm py-1 border-zinc-400"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Cloud Computing (AWS)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "EC2",
                      "S3",
                      "RDS",
                      "IAM",
                      "ECS",
                      "AWS Glue",
                      "AWS Lambda",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-sm py-1 border-zinc-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Git",
                      "Docker",
                      "Kubernetes",
                      "CI/CD",
                      "ETL Pipeline",
                    ].map((tool) => (
                      <Badge
                        key={tool}
                        variant="outline"
                        className="text-sm py-1 border-zinc-400"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Research Projects Section */}
          <section id="research" className="py-20 border-t border-zinc-300">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 tracking-tight">
                Projects
              </h2>

              <div className="grid gap-8">
                {[
                  {
                    title: "ProteoArk",
                    description:
                      "A comprehensive data analysis tool that integrates data visualization, statistical analysis, and machine learning techniques. The tool streamlines the analysis ofProteomics datasets.",
                    tags: [
                      "Python",
                      "FastAPI",
                      "Pandas",
                      "React.js",
                      "AWS",
                      "Docker",
                      "Matplotlib",
                      "MySQL",
                    ],
                    image: "/placeholder.svg?height=200&width=400",
                  },
                  {
                    title:
                      "Generative AI application for Biological pathway implementation",
                    description:
                      "Using agentic AI for document extraction, query chaining, and visualization of dynamic biological interaction networks. This project leverages LangChain to develop a system that autonomously extracts and visualizes complex biological pathways from scientific literature.",

                    tags: ["JavaScript", "React", "D3.js", "Systems Biology"],
                    image: "/placeholder.svg?height=200&width=400",
                  },

                  {
                    title: "Biological Databases",
                    description:
                      "Designed, developed, tested, and deployed multiple open-source biological databases including the following: VirhostlncR, REMEMProt, GCPDB, HNCDrugResDb, HomoeOmicsDB and PxKD ",
                    tags: [
                      "Python",
                      "Django",
                      "DRF",
                      "MySQL",
                      "JavaScript",
                      "React.js",
                      "D3.js",
                      "Cytoscape.js",
                      "HTML/CSS",
                      "tailwind",
                      "AWS",
                      "Docker​",
                    ],
                    image: "/placeholder.svg?height=200&width=400",
                  },

                  {
                    title:
                      "Automated Big Data Pipeline for Phosphoproteomics Insight Generation",
                    description:
                      "Designed and implemented a scalable ETL pipeline to automate the exploratory data analysis of phosphoproteomics datasets. The pipeline enabled efficient mapping of human proteins and phosphorylation sites to a curated phosphoproteome knowledgebase, significantly accelerating downstream biological interpretation and hypothesis generation.",
                    tags: [
                      "Python",
                      "PySpark",
                      "Pandas",
                      "NumPy",
                      "Matplotlib",
                      "AWS",
                      "Docker​",
                    ],
                    image: "/placeholder.svg?height=200&width=400",
                  },
                ].map((project, index) => (
                  <Card
                    key={index}
                    className="bg-amber-50 border-zinc-300 overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <CardContent className="p-6 md:col-span-2">
                        <div className="flex justify-center items-center">
                          <h3 className="text-xl font-semibold mb-2 text-center">
                            {project.title}
                          </h3>
                          {/* <div className="relative group m-1 flex flex-col items-center">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <RxExternalLink className="text-2xl" />
                            </a>
                            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg transition-opacity">
                              {project.link}
                            </span>
                          </div> */}
                        </div>

                        <p className="mb-4 text-zinc-700 text-justify">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-zinc-200 text-zinc-800 hover:bg-zinc-300"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4"></div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {/* <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="border-zinc-800 hover:bg-zinc-800 hover:text-amber-50"
                >
                  View All Projects
                  <svg
                    className="ml-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </Button>
              </div> */}
            </div>
          </section>
          {/* Publications Section */}
          <section id="publications" className="py-20 border-t border-zinc-300">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 tracking-tight">
                Selected Publications
              </h2>

              <div className="grid gap-6">
                <PublicationCard
                  title="ProteoArk: A One-Pot Proteomics Data Analysis and Visualization Tool for Biologists"
                  journal="Journal of Proteome Research"
                  year="2025"
                  authors="Nisar, M., Soman, S. P., Sreelan, S., John, L., Pinto, S. M., Kandasamy, R. K., Subbannayya, Y., Prasad, T. S. K., Kanekar, S., Raju, R., & Devasahayam Arokia Balaya, R. "
                  doi="https://pubs.acs.org/doi/10.1021/acs.jproteome.4c00556"
                  abstract="ProteoArk is a web-based tool that offers a range of computational pipelines for comprehensive analysis and visualization of mass spectrometry-based proteomics data. The application comprises four primary sections designed to address various aspects of mass spectrometry data analysis in a single platform, including label-free and labeled samples (SILAC/iTRAQ/TMT), differential expression analysis, and data visualization."
                  tags={[
                    "mass spectrometry",
                    "proteomics",
                    "bioinformatics tools",
                    "data analysis",
                    "data visualization",
                    "web application",
                  ]}
                />

                <PublicationCard
                  title="VirhostlncR: A comprehensive database to explore lncRNAs and their targets in viral infections. Computers in Biology and Medicine"
                  journal="Computers in Biology and Medicine"
                  year="2023"
                  authors="Thatai, A.K.S., Ammankallu, S., Balaya, R.D.A., Soman, S.P., Nisar, M., Babu, S., John, L., George, A.,Anto, C.K., Sanjeev, D. and Kandiyil, M.K.."
                  doi="https://doi.org/10.1016/j.compbiomed.2023.107279"
                  abstract="The VirhostlncR is a user-friendly online database of experimentally identified long non-coding RNAs (lncRNAs) perturbed by diverse viral infections in the mammalian host cell lines. Currently, it hosts over 2802 lncRNAs differentially expressed in 31 different cell lines in response to 33 viral infections. Such lncRNAs reported in the published research articles identified using RNA-Seq, microarray, northern blot, and qPCR-based approaches are assembled in this database."
                  tags={[
                    "lncRNAs",
                    "bioinformatics",
                    "data analysis",
                    "data visualization",
                    "web application",
                    "viral infections",
                  ]}
                />

                <PublicationCard
                  title="REMEMProt: a resource of membrane-enriched proteome profiles, their disease associations, and biomarker status"
                  journal="Life science alliance"
                  year="2024"
                  authors="Aravind, A., Nandakumar, R., Ahmed, M., Nisar, M., Palollathil, A., Kanichery, A., Sreelan, S., Sinan, K.M., Balaya, R. D. A., Vijayakumar, M., Prasad, T. S. K., & Raju, R."
                  doi="https://doi.org/10.26508/lsa.202302443"
                  abstract="Resource of Experimental Membrane-Enriched Mass spectrometry-derived Proteome (REMEMProt) is an open resource of experimentally-identified proteins derived by mass spectrometry-based approaches uniquely from plasma membrane enriched samples in diverse biological contexts."
                  tags={[
                    "Membrane Proteome",
                    "bioinformatics",
                    "data analysis",
                    "data visualization",
                    "web application",
                  ]}
                />

                <PublicationCard
                  title="Delineating protein biomarkers for gastric cancers: A catalogue of mass spectrometry-based markers and assessment of their suitability for targeted proteomics applications."
                  journal="Journal of Proteomics"
                  year="2024"
                  authors="Ramesh, P., Nisar, M., Neha, S., Ammankallu, S., Babu, S., Nandakumar, R., Abhinand, C. S., Prasad, T. S.K., Codi, J. A. K., & Raju, R"
                  doi="https://doi.org/10.1016/j.jprot.2024.105262"
                  abstract="The Gastric Cancer Proteomics DataBase (GCPDB) is an online repository of protein biomarkers linked to gastric cancers, identified via mass spectrometry -based methods. Currently, the database contains manually curated differential regulation data for over 6900 proteins across various clinical samples, including cancerous tissue, blood serum, urine, saliva, stomach fluid, and fixed tissues."
                  tags={[
                    "Gastric Cancer",
                    "bioinformatics",
                    "data analysis",
                    "data visualization",
                    "web application",
                  ]}
                />

                <PublicationCard
                  title="HNCDrugResDb: a platform for deciphering drug resistance in head and neck cancers"
                  journal="Scientific reports"
                  year="2024"
                  authors="Palollathil, A., Nandakumar, R., Ahmed, M., Velikkakath, A. K. G., Nisar, M., Nisar, M., Devasahayam Arokia Balaya, R., Parate, S. S., Hanehalli, V., Mahin, A., Mathew, R. T., Shetty, R., Codi, J. A. K.,Revikumar, A., Vijayakumar, M., Prasad, T. S. K., & Raju, R"
                  doi="https://doi.org/10.1016/j.jprot.2024.105262"
                  abstract="HNCDrugResDb is a freely accessible database of molecular expression level alterations in proteins, multiple post-translational modifications (PTMs), mRNAs, long non-coding RNAs (lncRNAs) and microRNAs associated with drug resistance in Head and Neck Cancers (HNC)."
                  tags={[
                    "Drug resistance",
                    "bioinformatics",
                    "data analysis",
                    "data visualization",
                    "web application",
                  ]}
                />
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://scholar.google.com/citations?user=uP1Jfl8AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-zinc-800 hover:bg-zinc-800 hover:text-amber-50"
                  >
                    Google Scholar Profile
                    <svg
                      className="ml-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Button>
                </a>
              </div>
            </div>
          </section>
          {/* Experience Timeline Section */}
          <section id="experience" className="py-20 border-t border-zinc-300">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 tracking-tight">
                Experience & Education
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Professional Experience
                  </h3>
                  <div className="mt-4">
                    <TimelineItem
                      year="2020 - Present"
                      title="Lead Bioinformatics Researcher"
                      organization="Genomics Research Institute"
                      description="Leading a team of researchers in developing computational methods for analyzing complex genomic datasets. Responsible for designing and implementing novel algorithms for variant calling and functional annotation."
                    />
                    <TimelineItem
                      year="2016 - 2020"
                      title="Senior Computational Biologist"
                      organization="BioTech Solutions Inc."
                      description="Developed software tools for protein structure prediction and molecular dynamics simulations. Collaborated with wet-lab scientists to design experiments and analyze results."
                    />
                    <TimelineItem
                      year="2013 - 2016"
                      title="Bioinformatics Software Engineer"
                      organization="GenomeSoft"
                      description="Built web applications for visualizing and analyzing genomic data. Implemented efficient algorithms for sequence alignment and variant calling."
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    Education & Training
                  </h3>
                  <div className="mt-4">
                    <TimelineItem
                      year="2010 - 2013"
                      title="Ph.D. in Computational Biology"
                      organization="Stanford University"
                      description="Dissertation: 'Novel Computational Methods for Analyzing High-Throughput Sequencing Data in Cancer Genomics'. Developed statistical models and algorithms for identifying driver mutations in cancer genomes."
                    />
                    <TimelineItem
                      year="2008 - 2010"
                      title="M.S. in Computer Science"
                      organization="Massachusetts Institute of Technology"
                      description="Specialized in machine learning and algorithms. Thesis: 'Efficient Algorithms for Large-Scale Biological Network Analysis'."
                    />
                    <TimelineItem
                      year="2004 - 2008"
                      title="B.S. in Molecular Biology"
                      organization="University of California, Berkeley"
                      description="Minor in Computer Science. Graduated with honors. Undergraduate research in computational genomics."
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonials Section */}
          <section className="py-20 border-t border-zinc-300">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 tracking-tight">
                Collaborator Testimonials
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <TestimonialCard
                  quote="J. Doe's computational expertise was instrumental in our breakthrough research on rare genetic disorders. Their algorithms helped us identify key biomarkers that would have been impossible to discover through traditional methods."
                  name="Dr. Sarah Chen"
                  title="Principal Investigator"
                  organization="National Institute of Genomic Medicine"
                />

                <TestimonialCard
                  quote="Working with J. Doe transformed our approach to protein structure analysis. Their innovative software tools have become essential in our lab's daily workflow, significantly accelerating our research progress."
                  name="Prof. Michael Rodriguez"
                  title="Director"
                  organization="Structural Biology Department, Oxford University"
                />

                <TestimonialCard
                  quote="J. Doe bridges the gap between complex computational methods and practical biological applications better than anyone I've worked with. Their ability to translate between these worlds makes them an invaluable collaborator."
                  name="Dr. Emily Johnson"
                  title="Research Director"
                  organization="Pharmaceutical Research Institute"
                />

                <TestimonialCard
                  quote="The bioinformatics pipeline developed by J. Doe revolutionized how we process and analyze our sequencing data. What used to take weeks now takes hours, and with greater accuracy."
                  name="Dr. James Wilson"
                  title="Head of Genomics"
                  organization="Cancer Research Center"
                />
              </div>
            </div>
          </section>
          {/* Blog Section */}
          <section id="blog" className="py-20 border-t border-zinc-300">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 tracking-tight">
                Latest Articles
              </h2>

              <div className="grid gap-6">
                <BlogPreview
                  title="Demystifying Deep Learning for Bioinformatics Researchers"
                  excerpt="An introduction to how deep learning techniques can be applied to common bioinformatics problems, with practical examples and code snippets for beginners."
                  date="May 15, 2023"
                  readTime="8 min read"
                  slug="deep-learning-bioinformatics"
                  categories={["Machine Learning", "Tutorial"]}
                />

                <BlogPreview
                  title="The Future of Single-Cell RNA Sequencing Analysis"
                  excerpt="Exploring emerging computational methods for analyzing single-cell RNA sequencing data and how they're revolutionizing our understanding of cellular heterogeneity."
                  date="March 22, 2023"
                  readTime="12 min read"
                  slug="single-cell-rna-seq-future"
                  categories={["Genomics", "Research"]}
                />

                <BlogPreview
                  title="Building Interactive Visualizations for Biological Data with D3.js"
                  excerpt="A step-by-step guide to creating compelling and informative visualizations for complex biological datasets using D3.js and modern web technologies."
                  date="January 10, 2023"
                  readTime="15 min read"
                  slug="d3js-biological-visualizations"
                  categories={["Data Visualization", "Web Development"]}
                />
              </div>

              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="border-zinc-800 hover:bg-zinc-800 hover:text-amber-50"
                >
                  View All Articles
                  <svg
                    className="ml-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </Button>
              </div>
            </div>
          </section>
          {/* Contact Section */}
          <section id="contact" className="py-20 border-t border-zinc-300">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 tracking-tight">
                Get in Touch
              </h2>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="space-y-6 flex-1">
                  <p className="text-lg">
                    I'm always interested in collaborating on new research
                    projects or discussing opportunities in bioinformatics and
                    computational biology.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="mailto:contact@example.com"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <span>contact@example.com</span>
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>github.com/username</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span>linkedin.com/in/username</span>
                    </a>
                  </div>

                  <div className="p-6 border border-zinc-300 rounded-lg mt-6">
                    <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Thursday:</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday:</span>
                        <span>9:00 AM - 3:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday - Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-zinc-600">
                      * All times are in Pacific Standard Time (PST)
                    </p>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <Card className="bg-amber-50 border-zinc-300">
                    <CardContent className="p-6">
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium"
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full p-2 border border-zinc-300 bg-amber-50 font-mono"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full p-2 border border-zinc-300 bg-amber-50 font-mono"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium"
                          >
                            Subject
                          </label>
                          <input
                            id="subject"
                            type="text"
                            className="w-full p-2 border border-zinc-300 bg-amber-50 font-mono"
                            placeholder="What is this regarding?"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className="w-full p-2 border border-zinc-300 bg-amber-50 font-mono resize-none"
                            placeholder="Your message..."
                          />
                        </div>
                        <Button className="w-full bg-zinc-800 text-amber-50 hover:bg-zinc-700">
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
