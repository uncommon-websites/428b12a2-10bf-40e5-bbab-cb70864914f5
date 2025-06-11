<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";
</script>

<CenteredTextOnlyHero
  title="Professional class AI for legal work"
  subtitle="Harvey transforms how elite law firms and Fortune 500 teams handle complex legal, regulatory, and tax matters. Secure, intelligent, and built for the highest stakes."
  imageSrc="/generated/image-a-modern-law-office-featuring-a-glass-wa.webp"
  callsToAction={[
    { href: '/contact', label: 'Request a demo' },
    { href: '/platform', label: 'Explore platform' }
  ]}
/>

<LogoScroller
  label="Trusted by industry leaders"
  logoUrls={[
    'https://logo.clearbit.com/pwc.com',
    'https://logo.clearbit.com/kkr.com',
    'https://logo.clearbit.com/repsol.com'
  ]}
/>

<Summary
	title="AI for legal, regulatory, and tax work"
	text="Harvey builds AI solutions for law firms, professional service providers, and the Fortune 500. Our secure, domain-specific platform streamlines high-stakes work in legal, regulatory, and tax fields, helping teams move faster and work smarter."
/>

<Testimonials
	testimonials={[
		{
			name: "Leona Keller",
			position: "Director of Legal Operations",
			company: "Westbury Capital",
			quote:
				"Harvey reduced our time to complete contract analysis by over 60%. What used to take a week gets done in two days—and with better consistency.",
			image: "/generated/image-a-professional-woman-in-a-modern-law-off.webp"
		},
		{
			name: "Vikram Das",
			position: "Chief Risk Officer",
			company: "Altochi Energy",
			quote:
				"By integrating Harvey into our compliance workflows, we cut our regulatory exposure on vendor reviews by nearly half in just one quarter.",
			image: "/generated/image-a-south-asian-man-in-a-corporate-office-.webp"
		},
		{
			name: "Maxime Lefèvre",
			position: "General Counsel",
			company: "Starrhold Group",
			quote:
				"We saved close to $600,000 on outside counsel costs last year thanks to Harvey's support on routine matter intake, admin, and regulatory summaries.",
			image: "/generated/image-a-french-man-who-is-a-general-counsel-is.webp"
		}
	]}
/>

<Features
	title="Professional class features"
	subtitle="Purpose-built AI solutions for legal, regulatory, and tax work—trusted by the world’s most demanding teams."
	features={[
		{
			title: "Domain-specific AI for professionals",
			description: "Get reliable, relevant answers tailored to your legal, regulatory, and tax work—not generic outputs."
		},
		{
			title: "Agentic workflows with zero prompting required",
			description: "Delegate complex tasks in plain English and receive structured, professional work product—no prompt engineering needed."
		},
		{
			title: "Enterprise-grade security",
			description: "All your data stays confidential with end-to-end encryption and zero model training on customer data."
		},
		{
			title: "Advanced document analysis at scale",
			description: "Upload hundreds of files and instantly review, compare, and extract insights across entire projects."
		},
		{
			title: "24/7 white glove support",
			description: "Work with real experts whenever you need help—onboarding, integration, or support."
		},
		{
			title: "Integrated platform for end-to-end work",
			description: "Manage research, drafting, analysis, and workflows all on a unified, secure platform built for professionals."
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for your business needs"
	useCases={[
		{
			title: "AI-powered contract review",
			description: "Accelerate contract analysis and reduce risk by letting Harvey summarize, benchmark, and highlight issues—helping your team close deals with confidence and speed.",
			image: "/generated/image-a-corporate-meeting-with-the-legal-team-.webp",
			link: {
				href: "/use-cases/contract-analysis",
				label: "Learn more"
			}
		},
		{
			title: "Continuous compliance insights",
			description: "Stay on top of changing regulations. Harvey reviews policies, flags exposure, and produces up-to-date compliance reports for your organization—no manual tracking required.",
			image: "/generated/image-a-group-of-compliance-professionals-in-a.webp",
			link: {
				href: "/use-cases/compliance-insights",
				label: "Learn more"
			}
		},
		{
			title: "Intelligent litigation preparation",
			description: "Transform case preparation by having Harvey organize evidence, summarize precedent, and generate drafts—cutting hours from traditional litigation workflows.",
			image: "/generated/image-a-litigation-team-preparing-for-court-in.webp",
			link: {
				href: "/use-cases/litigation-intelligence",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction
  title="Built for professionals. Trusted by industry leaders."
  subtitle="Harvey is professional class AI for legal, regulatory, and tax teams."
  description="Streamline work, delegate tasks, and analyze documents—securely, accurately, and fast. Used across the Fortune 500 and top law firms."
  imageSrc="/generated/image-a-smiling-legal-professional-in-a-modern.webp"
  callsToAction={[{ href: '/contact', label: 'Request a demo', variant: 'primary' }, { href: '/security', label: 'Learn more about security', variant: 'secondary' }]}
/>
