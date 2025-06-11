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
			title: "Innovation",
			description: "Constantly challenging the status quo to create better solutions."
		},
		{
			title: "Integrity",
			description: "Building trust through transparent actions and honest communication."
		},
		{
			title: "Impact",
			description: "Measuring our success by the positive change we create for our clients."
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
<StakeholderGrid
	stakeholderType="team"
	title="Our team."
	subtitle="Your partners in innovation."
	stakeholders={[
		{
			name: "Alex Morgan",
			position: "Founder & CEO",
			bio: "Started the company with a vision to transform the industry through innovative solutions.",
			image:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "Jamie Chen",
			position: "Chief Design Officer",
			bio: "Award-winning designer with a passion for creating intuitive and beautiful experiences.",
			image:
				"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
		},
		{
			name: "Taylor Wright",
			position: "Head of Engineering",
			bio: "Technology enthusiast focused on building scalable systems that make a difference.",
			image:
				"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
		}
	]}
/>

<StakeholderGrid
	stakeholderType="investor"
	title="Backed by the best."
	subtitle="Point Nine, TSIC and others"
	stakeholders={[
		{
			name: "Point Nine Capital",
			image: "https://cdn.brandfetch.io/pointnine.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7"
		},
		{
			name: "TSIC Ventures",
			image: "https://cdn.brandfetch.io/tiny.vc/w/400/h/400/logo?c=1a2b3c4d5e"
		},
		{
			name: "Sequoia Capital",
			image: "https://cdn.brandfetch.io/sequoiacap.com/w/400/h/400/logo"
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
	title="Ready to collaborate?"
	subtitle="Let's create something amazing"
	description="Join the companies already leveraging our expertise to transform their digital presence and achieve their business goals."
/>
