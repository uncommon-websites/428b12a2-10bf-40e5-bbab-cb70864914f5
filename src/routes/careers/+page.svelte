<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
	{
		title: "Global Impact",
		description: "Your work directly shapes AI used by the world’s leading legal and professional service firms.",
		icon: IconGlobe
	},
	{
		title: "Expert Growth",
		description: "Work and learn alongside top engineers, researchers, and industry leaders in law, tax, and AI.",
		icon: IconUsers
	},
	{
		title: "Secure, Flexible Work",
		description: "Remote-first, with competitive compensation, enterprise-grade benefits, and flexible hours.",
		icon: IconBriefcase
	}
];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
  {
    name: "Michael Chen",
    position: "Senior Developer",
    company: "Engineering Team",
    quote:
      "The collaborative environment here means everyone’s ideas are heard and respected. I’m constantly inspired by the support from my teammates and the drive we have to improve together.",
    image:
      "/generated/image-a-professional-headshot-of-an-asian-amer.webp"
  },
  {
    name: "Priya Sharma",
    position: "Product Designer",
    company: "Design Team",
    quote:
      "Harvey has given me room to grow and push my creative boundaries every day. The mentorship and feedback here keep me motivated to learn and develop my skills further.",
    image:
      "/generated/image-a-professional-headshot-of-a-south-asian.webp"
  },
  {
    name: "Marcus Johnson",
    position: "Marketing Lead",
    company: "Marketing Team",
    quote:
      "I’ve advanced so much in my career since joining Harvey thanks to real growth opportunities and a leadership team that cares about each person. The workplace is dynamic, energizing, and genuinely supportive.",
    image:
      "/generated/image-a-professional-headshot-of-an-african-am.webp"
  }
];

	const processSteps = [
	{
		step: 1,
		title: "Apply online",
		description: "Submit your resume and, optionally, a short intro message. We review each application carefully."
	},
	{
		step: 2,
		title: "Introductory chat",
		description: "Speak with a member of our team to discuss your background, goals, and fit for Harvey."
	},
	{
		step: 3,
		title: "Skills interview",
		description: "Complete a take-home project, case, or structured interview relevant to your role."
	},
	{
		step: 4,
		title: "Meet the team",
		description: "Interview virtually or onsite with future teammates and leadership for a deeper conversation."
	},
	{
		step: 5,
		title: "Decision & onboarding",
		description: "Receive a quick decision and, if successful, begin your onboarding for US or EU—support every step."
	}
];

	const values = [
	{
		icon: IconHeart,
		title: "Excellence without ego",
		description: "We set an elite bar, but believe that breakthrough ideas are welcome from anyone—no titles necessary."
	},
	{
		icon: IconUsers,
		title: "Trusted autonomy",
		description: "We give high-trust, autonomous ownership to every teammate—our culture runs on responsibility, not micromanagement."
	},
	{
		icon: IconGlobe,
		title: "Mission above all",
		description: "We move quickly, learn fast, and stay anchored to building real value for professionals at scale."
	}
];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Shape the future of legal AI"
	subtitle="Innovate with collaborative teams making meaningful change"
	imageSrc="/generated/image-a-happy-diverse-team-engaged-in-a-meetin.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career while making an impact" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
