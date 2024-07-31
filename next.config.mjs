import fs from 'fs';
import withPWA from 'next-pwa';
import path from 'path';

// 環境変数用の設定ファイルを読み取る
async function getConfig(env) {
  const configPath = path.resolve(`./config/${env || 'local'}.json`);
  const configData = await fs.promises.readFile(configPath, 'utf-8');
  return JSON.parse(configData);
}

async function createNextConfig() {
  const config = await getConfig(process.env.APP_ENV);
  return withPWA({
    dest: 'public',
    register: true, // サービスワーカーに登録（独自ならfalse）
    skipWaiting: true, // サービスワーカーの待機状態をスキップする
    // ローカルだと不要なwarningが出るためdisable
    disable: process.env.APP_ENV === 'local',
  })({
    output: 'export', // 静的エクスポート有効設定
    reactStrictMode: true,
    env: {
      ...config,
    },
  });
}

const nextConfigPromise = createNextConfig();
export default nextConfigPromise;
