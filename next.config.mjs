/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  swcMinify:true,
  output: 'standalone', // Outputs a Single-Page Application (SPA)
  distDir: './dist', // Changes the output directory `./dist/`
}
export default nextConfig