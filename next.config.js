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
//   trailingSlash: true,
// 
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.PAGES_BASE_PATH || '',
}

module.exports = nextConfig