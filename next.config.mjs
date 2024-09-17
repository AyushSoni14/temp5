/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com"
        ]
    },
    eslint: {
        ignoreDuringBuilds: true, // This will allow the build to succeed even if there are ESLint errors
    }
};

export default nextConfig;
