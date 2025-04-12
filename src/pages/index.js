import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          The Prompt Engineering Guide is your comprehensive resource for mastering prompt design, evaluation, and advanced techniques for large language models. Explore best practices, prompt types, and real-world applications to elevate your LLM workflows.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/prompt-engineering/02-prompt-types/index"
          >
            Get Started
          </Link>
          <Link
            className="button button--outline button--lg"
            to="https://github.com/Alg0rix/prompt-docs"
            style={{ marginLeft: "1rem" }}
          >
            GitHub Repo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="The Prompt Engineering Guide: best practices, prompt types, and advanced techniques for LLMs."
    >
      <HomepageHeader />
      <main>
        {/* You can add more custom sections here if desired */}
      </main>
    </Layout>
  );
}
