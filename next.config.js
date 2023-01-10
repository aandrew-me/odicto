/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
	env: { NODE_OPTIONS: "--max_old_space_size=4096" },
};

module.exports = nextConfig;
