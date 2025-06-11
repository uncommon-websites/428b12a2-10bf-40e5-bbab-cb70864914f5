<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "Human intelligence at the core",
    description:
      "We believe professionals—not just products—shape progress. Our team combines world-class legal, technical, and operational minds to tackle meaningful challenges together."
  },
  {
    title: "Collaboration of sharp minds",
    description:
      "Innovation is a team sport here. We solve hard problems in close partnership across disciplines and with the global firms we serve."
  },
  {
    title: "Rigor, ethics, and responsibility",
    description:
      "We hold ourselves to the highest standards—making thoughtful decisions that matter, and building tools that last."
  },
  {
    title: "Growth through meaningful work",
    description:
      "Progress beats hierarchy. Every voice helps shape Harvey, with challenges, deep thought, and curiosity valued above all."
  }
];
</script>

<SecondaryHero
	title="AI built for legal and tax professionals"
	subtitle="Domain-specific. Enterprise-secure. Trusted by the world's leading firms."
	imageSrc="/mockups/airport-screen-1749648462909.png"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"It started with a simple question: Why does the smartest work we do still feel so manual? Our founders—lawyers, technologists, and former researchers—saw up close how talented professionals in law, consulting, and corporate legal teams spent far too much time on routine research, document review, and repetitive tasks. The tools they had weren’t designed for complex reasoning, and generic AI couldn’t understand the nuance or stakes of high-level legal and regulatory work.",
		"So they built Harvey—an AI platform trained specifically to understand the language, structure, and precision required in legal, regulatory, and tax domains. From day one, Harvey was designed with enterprise security in mind. We don’t train on customer data, we don’t cut corners, and our models are purpose-built to meet the exacting standards of the world’s top law firms, professional services firms, and corporate legal departments. What good is AI if you can’t trust it where it matters most?",
		"Today, Harvey empowers teams to focus on what they do best—thinking critically, solving hard problems, and driving strategy—while we take care of the repetition, complexity, and scale. Whether it’s document analysis, regulatory research, or generating high-quality outputs with minimal input, Harvey helps professionals get to expert-level work faster and with more confidence. Because your best judgment deserves the best tools."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<!-- Harvey does not list a public team. We let our product and client results speak for themselves. -->

<!-- Harvey does not list external investors on this page. Trusted by industry leaders as clients and partners. -->

<!-- CTA Section -->
<CallToAction
  title="Join us in shaping the future of professional work"
  subtitle="Advance what's possible for legal and professional experts"
  description="We're building the next generation of domain-specific AI for the most complex and critical work in the world. Lawyers, technologists, and leaders can make real impact—with us or through partnership."
  callsToAction={[
    { href: "/careers", label: "View careers", variant: "primary" },
    { href: "/about", label: "Learn about our mission", variant: "secondary" },
    { href: "/contact", label: "Connect for partnerships", variant: "secondary" }
  ]}
/>
