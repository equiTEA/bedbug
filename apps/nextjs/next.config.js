/** @type {import('next').NextConfig} */

const { commonEnvVars } = require('@bedbug/utility')
const { env } = require('./env')

const withNextTranspileModules = require('next-transpile-modules')([
  '@bedbug/ui',
  '@bedbug/types',
  '@bedbug/hooks',
  '@bedbug/networking',
  '@mui/material',
  '@mui/system',
  '@mui/icons-material',
])

const nextConfig = withNextTranspileModules({
  pageExtensions: ['page.tsx', 'page.ts'], // [page-name].page.ts(x)
  reactStrictMode: commonEnvVars.NEXT_PUBLIC_STRICT_MODE ?? true,
  swcMinify: true,
  rewrites: () => [
    {
      source: '/api/graphql',
      destination: env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    },
  ],
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
})

module.exports = nextConfig
