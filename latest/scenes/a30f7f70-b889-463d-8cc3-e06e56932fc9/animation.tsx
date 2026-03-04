import React from "react";
import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Easing,
} from "remotion";

const FONT_FAMILY = "Inter, sans-serif";

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

export const AIWorkflowBuilderIntro: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();

	const isWide = width / height > 1.55;

	const pad = Math.round(Math.min(width, height) * 0.07);
	const contentMax = Math.min(1320, width - pad * 2);

	// Background subtle motion
	const bgShift = interpolate(frame, [0, 180], [0, -22], {
		extrapolateRight: "clamp",
		easing: Easing.bezier(0.2, 0.8, 0.2, 1),
	});

	// Left text block entrance
	const textIn = spring({
		frame,
		fps,
		config: { damping: 18, mass: 0.9, stiffness: 110 },
	});

	const textX = interpolate(textIn, [0, 1], [-36, 0]);
	const textOpacity = interpolate(textIn, [0, 1], [0, 1]);

	// Staggered lines
	const introProg = clamp(interpolate(frame, [6, 22], [0, 1]));
	const titleProg = clamp(interpolate(frame, [14, 34], [0, 1]));

	const introY = interpolate(introProg, [0, 1], [10, 0]);
	const titleY = interpolate(titleProg, [0, 1], [14, 0]);

	const introOpacity = introProg;
	const titleOpacity = titleProg;

	// Right visual (image) entrance
	const imgIn = spring({
		frame: frame - 8,
		fps,
		config: { damping: 16, mass: 0.9, stiffness: 95 },
	});

	const imgX = interpolate(imgIn, [0, 1], [48, 0]);
	const imgY = interpolate(imgIn, [0, 1], [12, 0]);
	const imgOpacity = interpolate(imgIn, [0, 1], [0, 1]);
	const imgScale = interpolate(imgIn, [0, 1], [0.98, 1]);

	// Gentle floating for the visual
	const floatY =
		Math.sin((frame / fps) * Math.PI * 1.1) * (isWide ? 6 : 5);

	// Subtle end hold fade (optional, keeps it crisp)
	const endFade = interpolate(frame, [Math.max(1, 160), 180], [1, 0.98], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const kickerSize = Math.round(Math.min(width, height) * (isWide ? 0.04 : 0.042));
	const titleSize = Math.round(Math.min(width, height) * (isWide ? 0.085 : 0.075));

	return (
		<AbsoluteFill
			style={{
				fontFamily: FONT_FAMILY,
				backgroundColor: "#070A12",
				overflow: "hidden",
			}}
		>
			{/* Background: gradient + soft blobs */}
			<AbsoluteFill
				style={{
					transform: `translateY(${bgShift}px)`,
				}}
			>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"radial-gradient(1200px 700px at 75% 40%, rgba(124, 92, 255, 0.22), rgba(0,0,0,0) 60%), radial-gradient(900px 600px at 18% 30%, rgba(30, 214, 255, 0.16), rgba(0,0,0,0) 62%), radial-gradient(800px 520px at 35% 88%, rgba(255, 106, 193, 0.10), rgba(0,0,0,0) 62%), linear-gradient(180deg, #070A12 0%, #060812 45%, #050611 100%)",
					}}
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(90deg, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0) 1px), linear-gradient(0deg, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0) 1px)",
						backgroundSize: "64px 64px",
						opacity: 0.08,
						mixBlendMode: "screen",
					}}
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
						opacity: 0.9,
					}}
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"radial-gradient(900px 460px at 50% 0%, rgba(255,255,255,0.09), rgba(0,0,0,0) 55%)",
						opacity: 0.35,
					}}
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,0.55) 100%)",
					}}
				/>
			</AbsoluteFill>

			{/* Content */}
			<AbsoluteFill
				style={{
					padding: pad,
					opacity: endFade,
				}}
			>
				<div
					style={{
						width: "100%",
						height: "100%",
						margin: "0 auto",
						maxWidth: contentMax,
						display: "grid",
						gridTemplateColumns: isWide ? "1.05fr 0.95fr" : "1fr",
						alignItems: "center",
						gap: isWide ? 42 : 28,
					}}
				>
					{/* Left: Typography */}
					<div
						style={{
							transform: `translateX(${textX}px)`,
							opacity: textOpacity,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "flex-start",
						}}
					>
						<div
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: 10,
								padding: "10px 14px",
								borderRadius: 999,
								background:
									"linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05))",
								border: "1px solid rgba(255,255,255,0.12)",
								boxShadow:
									"0 18px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
								marginBottom: 18,
								transform: `translateY(${introY}px)`,
								opacity: introOpacity,
							}}
						>
							<div
								style={{
									width: 10,
									height: 10,
									borderRadius: 999,
									background:
										"radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(255,255,255,0.15) 55%, rgba(255,255,255,0) 70%)",
									boxShadow: "0 0 20px rgba(30, 214, 255, 0.35)",
								}}
							/>
							<div
								style={{
									fontSize: kickerSize,
									letterSpacing: 0.2,
									color: "rgba(255,255,255,0.88)",
									fontWeight: 600,
									lineHeight: 1,
								}}
							>
								Introducing
							</div>
						</div>

						<div
							style={{
								transform: `translateY(${titleY}px)`,
								opacity: titleOpacity,
							}}
						>
							<div
								style={{
									fontSize: titleSize,
									fontWeight: 800,
									letterSpacing: -1.2,
									lineHeight: 1.02,
									color: "rgba(255,255,255,0.96)",
									textShadow:
										"0 10px 35px rgba(0,0,0,0.45), 0 0 40px rgba(124, 92, 255, 0.08)",
								}}
							>
								The{" "}
								<span
									style={{
										background:
											"linear-gradient(90deg, #A78BFA 0%, #22D3EE 45%, #F472B6 100%)",
										WebkitBackgroundClip: "text",
										backgroundClip: "text",
										color: "transparent",
										filter: "drop-shadow(0 10px 30px rgba(34, 211, 238, 0.14))",
									}}
								>
									AI Workflow Builder
								</span>
							</div>

							<div
								style={{
									marginTop: 16,
									maxWidth: isWide ? 560 : 820,
									fontSize: Math.round(Math.min(width, height) * 0.033),
									lineHeight: 1.35,
									letterSpacing: -0.2,
									color: "rgba(255,255,255,0.72)",
								}}
							>
								Design, connect, and automate steps in seconds—powered by AI.
							</div>
						</div>
					</div>

					{/* Right: Visual reference image */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: isWide ? "flex-end" : "center",
						}}
					>
						<div
							style={{
								position: "relative",
								width: isWide ? "100%" : "88%",
								maxWidth: isWide ? 560 : 720,
								aspectRatio: "1 / 1",
								transform: `translateX(${imgX}px) translateY(${imgY + floatY}px) scale(${imgScale})`,
								opacity: imgOpacity,
								filter: "drop-shadow(0 40px 70px rgba(0,0,0,0.55))",
							}}
						>
							<div
								style={{
									position: "absolute",
									inset: -12,
									borderRadius: 26,
									background:
										"radial-gradient(420px 320px at 60% 35%, rgba(124, 92, 255, 0.28), rgba(0,0,0,0) 62%), radial-gradient(420px 320px at 30% 70%, rgba(34, 211, 238, 0.20), rgba(0,0,0,0) 62%)",
									opacity: 1,
								}}
							/>
							<div
								style={{
									position: "absolute",
									inset: 0,
									borderRadius: 24,
									background:
										"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
									border: "1px solid rgba(255,255,255,0.14)",
									boxShadow:
										"inset 0 1px 0 rgba(255,255,255,0.10), 0 24px 60px rgba(0,0,0,0.40)",
									overflow: "hidden",
								}}
							>
								<Img
									src={AttachedImages[0]}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										transform: "scale(1.02)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										inset: 0,
										background:
											"radial-gradient(700px 420px at 25% 15%, rgba(255,255,255,0.10), rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)",
										mixBlendMode: "screen",
										opacity: 0.55,
									}}
								/>
							</div>

							{/* Accent ring */}
							<div
								style={{
									position: "absolute",
									inset: -18,
									borderRadius: 28,
									border: "1px solid rgba(255,255,255,0.08)",
									opacity: 0.9,
								}}
							/>
						</div>
					</div>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

export default AIWorkflowBuilderIntro;