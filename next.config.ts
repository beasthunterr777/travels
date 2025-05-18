
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.sushanttravels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tripver.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'karnatakatourism.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.prestigesraintreepark.info',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kristujayanti.edu.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's7ap1.scene7.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.herzindagi.info',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.tourism-of-india.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'boujeelife.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'jsak.goibibo.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'photos.prnewswire.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

