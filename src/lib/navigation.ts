/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
		{
			label: "AI-powered contract review",
			href: "/use-cases/contract-analysis",
			image: "/generated/image-a-corporate-meeting-with-the-legal-team-.webp",
			description: "Accelerate contract analysis and reduce risk by letting Harvey summarize, benchmark, and highlight issues—helping your team close deals with confidence and speed.",
			showInNav: true,
			showInFooter: true
		},
		{
			label: "Continuous compliance insights",
			href: "/use-cases/compliance-insights",
			image: "/generated/image-a-group-of-compliance-professionals-in-a.webp",
			description: "Stay on top of changing regulations. Harvey reviews policies, flags exposure, and produces up-to-date compliance reports for your organization—no manual tracking required.",
			showInNav: true,
			showInFooter: true
		},
		{
			label: "Intelligent litigation preparation",
			href: "/use-cases/litigation-intelligence",
			image: "/generated/image-a-litigation-team-preparing-for-court-in.webp",
			description: "Transform case preparation by having Harvey organize evidence, summarize precedent, and generate drafts—cutting hours from traditional litigation workflows.",
			showInNav: true,
			showInFooter: true
		},
		{
			label: "Healthcare",
			href: "/use-cases/healthcare",
			image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1920&auto=format&fit=crop",
			description: "Innovative solutions for patient care, delivering advanced analytics to improve diagnostics, enhancing personalized treatment plans through real‑time data insights, and seamlessly integrating with existing healthcare systems to drive better outcomes and streamline clinical workflows",
			showInNav: true,
			showInFooter: true
		},
		{
			label: "Finance",
			href: "/use-cases/finance",
			image: "https://images.unsplash.com/photo-1638913662180-afc4334cf422?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			description: "Streamlining operations and compliance across financial services by automating regulatory reporting, strengthening risk management, integrating advanced real‑time analytics, and ensuring robust audit trails for enhanced governance and operational efficiency",
			showInNav: true,
			showInFooter: true
		},
		{
			label: "Technology",
			href: "/use-cases/technology",
			image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			description: "Cutting-edge tools for tech companies, offering scalable cloud-based platforms, AI-driven development frameworks, secure collaboration environments, and streamlined deployment pipelines to accelerate innovation and deliver market-leading solutions",
			showInNav: true,
			showInFooter: true
		},
		{
			label: "Education",
			href: "/use-cases/education",
			image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			description: "Enhancing learning experiences",
			showInNav: true,
			showInFooter: true
		}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
