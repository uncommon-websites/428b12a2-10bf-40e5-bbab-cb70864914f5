<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Fei Lin",
      position: "General Counsel",
      company: "Orion Holdings",
      quote: "Harvey delivered immediate ROI—automating regulatory research cut our team’s time by more than half in the first quarter.",
      image: "/generated/image-a-professional-headshot-of-a-chinese-fem.webp"
    },
    {
      name: "Kwame Attah",
      position: "Chief Compliance Officer",
      company: "Mason & Rowe LLP",
      quote: "Onboarding Harvey was effortless. Our entire legal department now drafts, reviews, and analyzes at a pace we could never achieve before—no steep learning curve, just results.",
      image: "/generated/image-a-professional-headshot-of-a-black-male-.webp"
    },
    {
      name: "Marisela Domínguez",
      position: "Head of Legal Innovation",
      company: "Delgado Capital",
      quote: "The value is clear. Harvey lets us serve clients faster and more accurately while reducing billable hours spent on repetitive tasks.",
      image: "/generated/image-a-professional-headshot-of-a-hispanic-fe.webp"
    }
  ]}
/>

<CallToAction
	title="Ready to see the value of professional class AI?"
	subtitle="Experience AI built for legal, tax, and professional teams."
	description="Empower your team with Harvey. Boost productivity, accelerate research, and gain peace of mind with industry-leading security and world-class support."
	imageSrc="/generated/image-a-happy-business-professional-standing-i.webp"
	callsToAction={[
		{ href: '/demo', label: 'Schedule a demo', variant: 'primary' },
		{ href: '/get-started', label: 'Start free trial', variant: 'secondary' }
	]}
/>
