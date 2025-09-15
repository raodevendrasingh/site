export const PatternWide = () => {
	return (
		<section className="w-full border-y">
			<div className="grid h-24 w-full grid-cols-[1fr_minmax(0,1024px)_1fr]">
				<div className="h-full">
					<div className="h-full w-full bg-[image:repeating-linear-gradient(315deg,_var(--color)_0,_var(--color)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--color:var(--pattern)]" />
				</div>
				<div className="relative h-full w-full">
					<div className="h-full w-full bg-[image:repeating-linear-gradient(315deg,_var(--color)_0,_var(--color)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--color:var(--pattern)]" />

					<div className="-top-[0.8px] left-[0px] absolute hidden h-[1px] w-1.5 bg-primary/30 lg:block" />
					<div className="-top-[6.5px] -left-[0.8px] absolute hidden h-3 w-[1px] bg-primary/30 lg:block" />

					<div className="-bottom-[0.8px] -left-[0px] absolute hidden h-[1px] w-1.5 bg-primary/30 lg:block" />
					<div className="-bottom-[6.5px] -left-[0.8px] absolute hidden h-3 w-[1px] bg-primary/30 lg:block" />

					<div className="-top-[0.8px] -right-[0px] absolute hidden h-[1px] w-1.5 bg-primary/30 lg:block" />
					<div className="-top-[6.5px] -right-[0.8px] absolute hidden h-3 w-[1px] bg-primary/30 lg:block" />

					<div className="-bottom-[0.8px] -right-[0px] absolute hidden h-[1px] w-1.5 bg-primary/30 lg:block" />
					<div className="-bottom-[6.5px] -right-[0.8px] absolute hidden h-3 w-[1px] bg-primary/30 lg:block" />
				</div>
			</div>
		</section>
	);
};
