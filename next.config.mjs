/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的エクスポート有効設定
  reactStrictMode: true,
  //   env: {
  //     ...require(`./config/${process.env.APP_ENV || 'local'}.json`),
  //   },
};

export default nextConfig;
