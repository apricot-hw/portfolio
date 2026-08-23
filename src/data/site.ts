export const site = {
  name: 'Honma Wataru',
  title: 'Honma Wataru Portfolio',
  description: '興味や好きなことを出発点に、調べ、試し、形にしてきた制作物を紹介するポートフォリオ。',
  heroLead: '「好き」を入口に、できることを広げていく。',
  heroBody:
    'ゲーム、PC、Bot、サーバー。興味を持ったことや自分が欲しいと思ったものから始め、必要な技術を調べ、実際に動くところまで作ってきました。',
};

export const contact = {
  githubLabel: 'github.com/apricot-hw',
  githubUrl: 'https://github.com/apricot-hw',
};

export const skillCategories = [
  {
    name: 'プログラミング言語',
    skills: [
      { name: 'Python', level: 4 },
      { name: 'Java', level: 3 },
      { name: 'JavaScript', level: 2 },
      { name: 'TypeScript', level: 2 },
      { name: 'Ruby', level: 2 },
      { name: 'Swift', level: 1 },
    ],
  },
  {
    name: 'Web・フレームワーク・API',
    skills: [
      { name: 'HTML / CSS', level: 2 },
      { name: 'Discord Bot / API', level: 4 },
      { name: 'Astro', level: 2 },
    ],
  },
  {
    name: 'クラウド・インフラ・データベース',
    skills: [
      { name: 'Linux', level: 2 },
      { name: 'ネットワーク', level: 2 },
      { name: 'AWS', level: 2 },
      { name: 'MySQL', level: 3 },
      { name: 'Raspberry Pi / 自宅サーバー', level: 3 },
    ],
  },
  {
    name: 'ハードウェア',
    skills: [
      { name: '自作PC・アップグレード', level: 4 },
      { name: 'PCトラブルシューティング', level: 4 },
    ],
  },
  {
    name: '開発手法・ツール',
    skills: [
      { name: 'Git / GitHub', level: 3 },
      { name: 'UML', level: 1 },
      { name: 'アジャイル開発', level: 1 },
      { name: 'AI活用', level: 3 },
      { name: 'Unity', level: 3 },
    ],
  },
];

export const timeline = [
  {
    year: '2026',
    title: 'EXカウンターを公開',
    description: '端末間同期とオフライン対応を備えた記録Webアプリを開発。',
  },
  {
    year: '2023',
    title: 'BuildCardMakerを制作',
    description: '外部APIと画像生成を組み合わせたDiscord Botを個人開発。',
  },
  {
    year: '〜2020',
    title: '対戦募集リツイートBotを制作・運用',
    description: 'ゲームの対戦募集ツイートを自動でリツイートするBotをJavaで制作。2020年頃まで運用し、フォロワーは約250人まで増加。',
  },
  {
    year: '2018',
    title: '対戦カウンターを制作',
    description: 'Java Swingを調べながら、初めてのGUIツールを制作。',
  },
];
