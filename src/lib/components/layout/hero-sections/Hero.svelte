<!--
    @component
    Bold hero banner with eye-catching text and strong call-to-action. NEVER use title case.

    Usage:
    ```html
    <Hero
      title="Bold Claim"
      subtitle="Quick Value"
      imageSrc="/hero.jpg"
      callsToAction={[
        {
          href: "/start",
          label: "Go"
        },
        {
          href: "/learn",
          label: "More"
        }
      ]}
    />
    ```

    Props:
    - `title`: Main headline (string)
    - `subtitle`: Supporting text (string)
    - `imageSrc`: Hero image URL (string)
    - `callsToAction`: CTA buttons array (max two: primary, secondary)
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

	// Constants
	import { cta } from "$lib/navigation";

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement;
		target.src = "https://placehold.co/800x600/f8fafc/64748b?text=Hero+image";
	}

	// Types
	type Props = {
		centered?: boolean;
		title: string;
		subtitle: string;
		imageSrc?: string;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>; // A maximum of two calls to action, with the first one being primary and the second one being secondary
	};

	let {
		title,
		subtitle,
		imageSrc,
		callsToAction = [cta],
		centered = false,
		...rest
	}: Props = $props();
</script>

<div class="bg-background section-py" {...rest}>
	<header
		class={[
			"section-px container mx-auto grid items-end gap-20 gap-y-12 text-balance",
			centered ? "place-items-center text-center" : "xl:grid-cols-[1fr_auto]"
		]}
		data-enter-container
	>
		<div class="grid gap-8" class:max-w-prose={centered}>
			<h1 class="text-display font-[500] w-full mb-2 lg:mb-3" data-enter>
				<span class="block"><AnimateText text={title} /></span>
				{#if !centered}
					<span class="text-emphasis-dim block text-title2 mt-1"><AnimateText text={subtitle} /></span>
				{/if}
			</h1>

			{#if centered}
				<p
					data-enter
					class={[
						"text-muted-foreground text-headline mx-auto block max-w-[45ch] px-2 transition duration-500 ease-out lg:text-title2"
					]}
				>
					{subtitle}
				</p>
			{/if}
		</div>

		{#if callsToAction.length > 0}
			<div class="flex flex-wrap gap-3 sm:gap-4 mt-2" data-enter>
				{#each callsToAction as cta, index}
					<Button
						href={cta.href}
						size="lg"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="max-lg:hidden rounded-[var(--radius-md)] font-[450] shadow-sm">{cta.label}</Button
					>
					<Button
						href={cta.href}
						size="md"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="lg:hidden rounded-[var(--radius-md)] font-[450] shadow-sm">{cta.label}</Button
					>
				{/each}
			</div>
		{/if}
	</header>

	{#if imageSrc}
		<div class="col-span-full aspect-video rounded-[var(--radius-xl)] overflow-hidden shadow-xl border border-[var(--color-border)]" data-enter>
			<img
				src={imageSrc}
				alt="Customer"
				class="size-full object-cover"
				onerror={handleImageError}
			/>
		</div>
	{/if}
</div>
