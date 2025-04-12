import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import React from "react";
import styles from "./index.module.css";
import {
  BookOpen,
  Code,
  Lightbulb,
  Book,
  Github,
  Compass,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  BrainCircuit,
  FlaskConical,
  BookCopy,
  Shield
} from 'lucide-react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContainer}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <p className={styles.heroText}>
          Your comprehensive resource for mastering prompt design, evaluation, and advanced techniques for large language models. Explore best practices, prompt types, and real-world applications.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started/introduction"
          >
            <BookOpen className="margin-right--sm" size={18} />
            Get Started
          </Link>
          <Link
            className="button button--secondary button--outline button--lg"
            to="https://github.com/Alg0rix/prompt-docs"
          >
            <Github className="margin-right--sm" size={18} />
            GitHub Repo
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Comprehensive Techniques',
      icon: <BrainCircuit size={24} />,
      description: 'Explore a wide range of prompting techniques, from basic zero-shot to advanced methods like Chain-of-Thought and RAG.'
    },
    {
      title: 'Best Practices & Ethics',
      icon: <Shield size={24} />,
      description: 'Learn best practices for crafting effective prompts and understand the crucial ethical considerations for responsible AI.'
    },
    {
      title: 'Practical Examples',
      icon: <FlaskConical size={24} />,
      description: 'Gain practical insights through clear explanations and examples to apply these techniques in your own LLM projects.'
    },
    {
      title: 'Prompt Collection',
      icon: <BookCopy size={24} />,
      description: 'Access our curated collection of effective prompts at promptllm.xyz to jumpstart your AI interactions and projects.'
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Why Master Prompt Engineering?
        </Heading>
        <div className={styles.featuresContainer}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuidesSection() {
  const guides = [
    {
      title: 'Basic Techniques',
      description: 'Learn fundamental prompt engineering methods like zero-shot, one-shot, and few-shot prompting.',
      link: '/docs/prompt-engineering/basic-techniques/zero-shot',
      icon: <Book size={24} />
    },
    {
      title: 'Chain-of-Thought',
      description: 'Master the technique of breaking down complex reasoning into sequential steps.',
      link: '/docs/prompt-engineering/advanced-techniques/chain-of-thought',
      icon: <Lightbulb size={24} />
    },
    {
      title: 'Retrieval-Augmented Generation',
      description: 'Enhance LLM outputs by retrieving and incorporating external knowledge.',
      link: '/docs/prompt-engineering/advanced-techniques/retrieval-augmented',
      icon: <Code size={24} />
    },
    {
      title: 'Safety & Ethics',
      description: 'Understand the crucial ethical considerations for responsible AI development.',
      link: '/docs/responsible-ai/safety-ethics',
      icon: <Shield size={24} />
    },
    {
      title: 'Prompt Collection',
      description: 'Browse our extensive library of ready-to-use prompts for various tasks and applications.',
      link: 'https://promptllm.xyz',
      icon: <BookCopy size={24} />,
      isExternal: true
    },
  ];

  return (
    <section className={styles.guidesSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Explore Our Key Guides
        </Heading>
        <div className={styles.guidesList}>
          {guides.map((guide, idx) => (
            <Link
              key={idx}
              className={styles.guideItem}
              to={guide.link}
              target={guide.isExternal ? "_blank" : undefined}
              rel={guide.isExternal ? "noopener noreferrer" : undefined}
            >
              <div className={styles.guideIcon}>
                {guide.icon}
              </div>
              <div className={styles.guideContent}>
                <h3 className={styles.guideTitle}>{guide.title}</h3>
                <p className={styles.guideDescription}>{guide.description}</p>
                <div className={styles.guideLink}>
                  {guide.isExternal ? 'Visit collection' : 'Read guide'} <ChevronRight size={16} style={{ marginLeft: '4px' }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <Heading as="h2" className={styles.ctaTitle}>
          Ready to Master Prompt Engineering?
        </Heading>
        <p className={styles.ctaText}>
          Start exploring our comprehensive guides and examples to enhance your AI interactions and build more effective LLM applications today.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg button--secondary"
            to="/docs/getting-started/introduction"
          >
            <BookOpen size={18} className="margin-right--sm" />
            Get Started Now
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/resources"
          >
            <Compass size={18} className="margin-right--sm" />
            Explore Resources
          </Link>
        </div>
      </div>
    </section>
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
        <FeaturesSection />
        <GuidesSection />
        <CTASection />
      </main>
    </Layout>
  );
}
