/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode:true,
  swcMinify:true,
  //output: 'standalone', // Outputs a Single-Page Application (SPA)
  distDir: './dist', // Changes the output directory `./dist/`
}
export default nextConfig