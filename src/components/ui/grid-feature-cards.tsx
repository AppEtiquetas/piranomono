import { cn } from '@/lib/utils';
import React from 'react';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.ComponentProps<'svg'>>;
	description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
	const p = genRandomPattern();

	return (
		<div
			className={cn(
				'group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-card p-10 transition-all duration-300 hover:border-primary/50',
				className
			)}
			{...props}
		>
			<GridPattern
				width={40}
				height={40}
				x="0"
				y="0"
				squares={p}
				className="absolute inset-0 h-full w-full fill-primary/10 stroke-primary/5 [mask-image:radial-gradient(250px_circle_at_center,white,transparent)]"
			/>
			<div className="relative z-10 flex flex-col gap-6">
				<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary border border-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
					<feature.icon className="h-8 w-8" />
				</div>
				<div>
					<h3 className="text-2xl font-heading font-bold uppercase mb-4 tracking-tight leading-none">{feature.title}</h3>
					<p className="text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
				</div>
			</div>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern
					id={patternId}
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
					x={x}
					y={y}
				>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([sqX, sqY], index) => (
						<rect
							strokeWidth="0"
							key={`${sqX}-${sqY}-${index}`}
							width={width - 1}
							height={height - 1}
							x={(sqX ?? 0) * width + 1}
							y={(sqY ?? 0) * height + 1}
						/>
					))}
				</svg>
			)}
		</svg>
	);
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
		Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
	]);
}

