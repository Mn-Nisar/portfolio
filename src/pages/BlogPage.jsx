import { Button } from "../components/ui/button";
import { BlogPreview } from "../components/BlogPreview";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Demystifying Deep Learning for Bioinformatics Researchers",
      excerpt:
        "An introduction to how deep learning techniques can be applied to common bioinformatics problems, with practical examples and code snippets for beginners.",
      date: "May 15, 2023",
      readTime: "8 min read",
      slug: "deep-learning-bioinformatics",
      categories: ["Machine Learning", "Tutorial"],
    },
    {
      title: "The Future of Single-Cell RNA Sequencing Analysis",
      excerpt:
        "Exploring emerging computational methods for analyzing single-cell RNA sequencing data and how they're revolutionizing our understanding of cellular heterogeneity.",
      date: "March 22, 2023",
      readTime: "12 min read",
      slug: "single-cell-rna-seq-future",
      categories: ["Genomics", "Research"],
    },
    {
      title:
        "Building Interactive Visualizations for Biological Data with D3.js",
      excerpt:
        "A step-by-step guide to creating compelling and informative visualizations for complex biological datasets using D3.js and modern web technologies.",
      date: "January 10, 2023",
      readTime: "15 min read",
      slug: "d3js-biological-visualizations",
      categories: ["Data Visualization", "Web Development"],
    },
    {
      title: "Optimizing Bioinformatics Pipelines for Cloud Computing",
      excerpt:
        "Learn how to design and deploy efficient bioinformatics workflows on cloud platforms to handle large-scale genomic data processing.",
      date: "December 5, 2022",
      readTime: "10 min read",
      slug: "cloud-bioinformatics-pipelines",
      categories: ["Cloud Computing", "Best Practices"],
    },
    {
      title: "Understanding CRISPR: A Computational Perspective",
      excerpt:
        "A deep dive into the computational challenges and solutions for CRISPR gene editing technology, including guide RNA design and off-target prediction.",
      date: "October 18, 2022",
      readTime: "14 min read",
      slug: "crispr-computational-perspective",
      categories: ["CRISPR", "Genomics"],
    },
    {
      title: "Machine Learning for Protein Function Prediction",
      excerpt:
        "Exploring how various machine learning approaches can be used to predict protein functions from sequence and structural data.",
      date: "September 3, 2022",
      readTime: "11 min read",
      slug: "ml-protein-function-prediction",
      categories: ["Machine Learning", "Proteomics"],
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 font-mono text-zinc-800">
      <div style={{ backgroundBlendMode: "multiply" }}>
        <Header />

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 tracking-tight">
              Blog & Articles
            </h1>

            <div className="mb-8">
              <p className="text-lg mb-4">
                Thoughts, insights, and tutorials on bioinformatics,
                computational biology, and software development.
              </p>

              <div className="flex gap-2 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs border-zinc-400"
                >
                  All Posts
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs border-zinc-400"
                >
                  Genomics
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs border-zinc-400"
                >
                  Machine Learning
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs border-zinc-400"
                >
                  Tutorials
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs border-zinc-400"
                >
                  Research
                </Button>
              </div>
            </div>

            <div className="grid gap-8">
              {blogPosts.map((post, index) => (
                <BlogPreview
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  slug={post.slug}
                  categories={post.categories}
                />
              ))}
            </div>

            <div className="mt-12 flex justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-400"
                disabled
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-400 bg-zinc-800 text-amber-50"
              >
                1
              </Button>
              <Button variant="outline" size="sm" className="border-zinc-400">
                2
              </Button>
              <Button variant="outline" size="sm" className="border-zinc-400">
                3
              </Button>
              <Button variant="outline" size="sm" className="border-zinc-400">
                Next
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
