// module.exports = {
// 	output: 'standalone',
// 	transpilePackages: ['react-virtualized'],
// 	// assetPrefix: '/main'
// }
// module.exports = {
//   output: 'standalone',
//   transpilePackages: ['react-virtualized'],
//   assetPrefix: process.env.NODE_ENV === 'production' ? '/react-congress-main' : '',
//   basePath: process.env.NODE_ENV === 'production' ? '/react-congress-main' : '',
//   trailingSlash: tru
// 
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProd ? '/react-congress-main' : '',
  assetPrefix: isProd ? '/react-congress-main' : '',
}

module.exports = nextConfig