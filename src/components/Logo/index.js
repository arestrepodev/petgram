import React from "react";
import { Svg } from "./styles";
import { Link } from "@reach/router";

export const Logo = props => (
	<Link to="/">
		<Svg
			width={314.398}
			height={150.815}
			viewBox="92.801 -0.408 314.398 150.815"
			style={{
				background: "0 0"
			}}
			preserveAspectRatio="xMidYMid"
			{...props}
		>
			<defs>
				<linearGradient
					id="prefix__editing-halftone-gradient"
					x1={0.479}
					y1={0.799}
					x2={0.521}
					y2={0.201}
					gradientUnits="objectBoundingBox"
				>
					<stop offset={0} stopColor="#ffd06c" stopOpacity={0.8} />
					<stop offset={0.5} stopColor="#ffd06c" stopOpacity={0.9} />
					<stop offset={1} stopColor="#bb11a0" />
				</linearGradient>
				<filter id="prefix__editing-halftone">
					<feFlood result="color" floodColor="red" />
					<feImage
						xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwcHgiIGhlaWdodD0iMTAwMHB4Ij4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNCIgaGVpZ2h0PSI0Ij4KICAgICAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEuNyIgZmlsbD0icmVkIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz4KPC9zdmc+"
						width={1000}
						height={1000}
						result="image"
					/>
					<feTile in="image" result="tile" />
					<feComposite
						operator="in"
						in="SourceGraphic"
						in2="tile"
						result="dot"
					/>
					<feComposite
						operator="in"
						in="dot"
						in2="SourceGraphic"
						result="dotted"
					/>
					<feGaussianBlur in="dotted" stdDeviation={0.8} />
					<feComponentTransfer result="cutoff">
						<feFuncA type="linear" slope={10} intercept={-3} />
					</feComponentTransfer>
				</filter>
			</defs>
			<path
				d="M2.24 9.34v-56.19h11.39v2.5q2.43-3.01 6.72-3.01 5.44 0 7.59 3.65 2.14 3.65 2.14 10.11v17.34q0 5.51-.64 9-.64 3.48-2.82 5.63Q24.45.51 20.03.51q-4.22 0-6.4-2.37v11.2H2.24zM16.32-8.19q1.54 0 1.98-1.41.45-1.41.45-4.1v-19.9q0-2.43-.45-3.71-.44-1.28-2.04-1.28-2.63 0-2.63 4.86v20.55q0 2.36.55 3.68.54 1.31 2.14 1.31zM47.36.51q-7.23 0-10.37-3.97-3.13-3.96-3.13-11.84v-18.81q0-6.47 3.71-9.86 3.71-3.39 10.37-3.39 13.5 0 13.5 13.25v3.39q0 5.12-.13 8.32H45.06v9.09q0 2.43.51 3.81.51 1.37 2.17 1.37 1.28 0 1.83-.77.54-.76.64-1.76.09-.99.09-2.91v-4.54h11.14v2.69q0 8.19-3.17 12.06Q55.1.51 47.36.51zm-2.37-28.48h5.31v-6.01q0-5.06-2.49-5.06-2.82 0-2.82 5.06v6.01zM75.14.51q-4.42 0-6.08-1.85-1.67-1.86-1.67-5.96v-29.24h-3.13v-8.52h3.13v-9.92h10.88v9.92h3.2v8.52h-3.2v26.3q0 1.22.19 1.79.2.58 1.03.58.64 0 1.21-.07.58-.06.77-.06v7.68q-.96.26-2.78.54-1.83.29-3.55.29zM97.6 6.85q-4.99 0-7.84-.8-2.85-.8-5.6-3.04L88-3.46q4.1 2.44 8.13 2.44 2.62 0 3.97-1.67 1.34-1.66 1.34-4.54v-2.56q-1.34 4.8-7.1 4.8-4.8 0-7.08-3.27-2.27-3.26-2.27-8.7v-17.6q0-6.21 2.08-9.5 2.08-3.3 7.27-3.3 3 0 4.76 1.5 1.76 1.51 2.34 4.26v-5.25h11.46v38.91q0 7.88-3.65 11.33-3.65 3.46-11.65 3.46zm1.22-20.29q2.62 0 2.62-4.74v-16.7q0-1.41-.77-2.69t-1.92-1.28q-1.47 0-1.98 1.06-.51 1.05-.51 2.91v16.7q0 2.12.51 3.43t2.05 1.31zM117.25 0v-46.85h11.2v5.19q.83-2.76 2.91-4.26t5.15-1.5v9.34q-2.37 0-5.21.67-2.85.67-2.85 1.57V0h-11.2zm30.53.51q-5.44 0-7.46-3.61-2.02-3.62-2.02-10.34 0-5.5 1.44-8.45 1.44-2.94 4-4.32 2.56-1.37 7.81-3.04l3.07-1.02v-4.8q0-1.86-.73-2.85-.74-.99-1.76-.99-.9 0-1.57.83t-.67 2.24v2.82h-10.88v-1.54q0-6.91 3.23-9.86 3.23-2.94 10.53-2.94 5.82 0 9.47 3.04 3.65 3.04 3.65 8.61V0h-11.14v-5.57q-.83 2.88-2.65 4.48-1.83 1.6-4.32 1.6zm4.41-8.7q1.28 0 1.83-1.06.54-1.05.54-2.59V-24.9q-2.5.96-3.68 2.44-1.18 1.47-1.18 4.09v6.02q0 4.16 2.49 4.16zM170.18 0v-46.85h10.94v5.44q.77-3.01 2.62-4.48 1.86-1.47 5.25-1.47 2.75 0 4.77 1.25 2.02 1.25 2.85 3.42 1.41-2.43 3.13-3.55 1.73-1.12 4.8-1.12 5.51 0 7.65 3.36 2.15 3.36 2.15 9.76L214.21 0h-11.27v-34.43q0-4.55-2.3-4.55-1.6 0-2.3 1.57-.71 1.57-.71 3.75V0h-11.2v-34.43q0-1.99-.41-3.2-.42-1.22-1.76-1.22-1.73 0-2.44 1.7-.7 1.69-.7 4.06V0h-10.94z"
				fill="url(#prefix__editing-halftone-gradient)"
				transform="translate(141.71 107.254)"
				filter="url(#prefix__editing-halftone)"
			/>
			<style />
		</Svg>
	</Link>
);
