export type WorkItem = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: readonly string[];
  status: 'prototype' | 'study' | 'release';
  overview: string;
  goal: string;
  process: readonly string[];
  features: readonly string[];
  learning: string;
  note?: string;
  repositoryUrl?: string;
  liveUrl?: string;
  thumbnail: {
    src: string;
    alt: string;
    position?: 'center' | 'center top';
  };
  images?: {
    src: string;
    alt: string;
    caption: string;
    fit?: 'contain' | 'cover';
  }[];
};

export const works = [
  {
    slug: 'fe-subject-b',
    title: '基本情報技術者試験 学習サイト',
    summary: '基本情報技術者試験の科目A・Bを学べる、チーム制作の練習サイト。',
    year: '2026',
    role: 'チーム制作 / 科目B側を担当',
    tags: ['JavaScript', 'HTML / CSS', 'JSON', 'Team Development'],
    status: 'release',
    repositoryUrl: 'https://github.com/siw-career-design/subjectB',
    liveUrl: 'https://siw-career-design.github.io/subjectB/subjectB.html',
    thumbnail: {
      src: 'images/works/subject-b/thumbnail.png',
      alt: '科目Bのステップトレース練習画面',
      position: 'center top',
    },
    overview:
      '基本情報技術者試験の科目A・科目Bをブラウザ上で練習できる学習サイトです。チームで分担して制作し、私は科目B側の画面と学習機能を担当しました。',
    goal:
      '科目Bのアルゴリズム問題を、コードを眺めるだけでなく、実行の流れを追いながら段階的に練習できるようにすることを目指しました。',
    process: [
      'チーム内で科目A側と科目B側を分担し、共通デザインやページ間の導線を調整',
      '問題データをJSONとして分離し、JavaScriptで設問と選択肢を動的に表示',
      '一問一答、ステップトレース、トレース表パズルの3つの学習モードを実装',
      '実際に操作しながら、コードと設問を見比べやすいレイアウトへ調整',
    ],
    features: [
      '実行結果を予測する一問一答モード',
      'コードを1行ずつ追跡できるステップトレース',
      'パーツを組み合わせて完成させるトレース表パズル',
      '実行中の行を見失いにくい強調表示',
      '文字サイズの変更など、学習中の見やすさを考えた操作',
    ],
    learning:
      '担当範囲だけを作るのではなく、チームの他ページと見た目や移動方法を揃えることを意識しました。また、問題を解く人が迷わないよう、コードと設問の配置、現在位置の強調、操作ボタンの分かりやすさを調整し、使いやすさを考えながら実装する経験になりました。',
    note: 'チーム制作のうち、科目Bのトレース練習機能を担当しました。',
    images: [
      {
        src: 'images/works/subject-b/thumbnail.png',
        alt: '科目Bのステップトレースでコードの実行行と設問を表示している画面',
        caption: 'コードと設問を並べ、実行中の行を強調したステップトレース画面',
      },
    ],
  },
  {
    slug: 'ftb-ex-counter',
    title: 'EXカウンター',
    summary: '周回数や遭遇結果を記録し、確率や履歴を自動集計するWebアプリ。',
    year: '2026',
    role: '個人制作 / 設計・実装',
    tags: ['JavaScript', 'Cloudflare Workers', 'D1', 'GitHub Pages'],
    status: 'release',
    repositoryUrl: 'https://github.com/ftb-anz/ftbEXcounter',
    liveUrl: 'https://ftb-anz.github.io/ftbEXcounter/',
    thumbnail: {
      src: 'images/works/ex-counter/thumbnail.png',
      alt: 'EXカウンターの記録画面',
    },
    overview:
      '周回中の遭遇有無とドロップ数を手軽に記録し、総周回数、遭遇確率、ハマり回数、勝敗などを自動集計するWebアプリです。ブラウザだけで利用でき、複数の記録をタブで切り替えて管理できます。',
    goal:
      '周回結果をその場で素早く入力し、感覚だけでは分かりにくい遭遇確率や連続未遭遇回数を、いつでも数値と履歴で確認できるようにすることを目指しました。',
    process: [
      'HTML、CSS、JavaScriptでスマートフォンからも操作しやすい記録画面を実装',
      '遭遇・未遭遇の入力から各種統計と遭遇履歴を自動更新する処理を作成',
      'Cloudflare WorkersとD1を使い、UUID単位でデータを保存・取得するAPIを構築',
      'オフライン時の端末保存と通信復帰後の再同期、複数端末での競合検知を追加',
    ],
    features: [
      '総周回数、遭遇回数、遭遇確率の自動集計',
      '現在・最小・最大の連続未遭遇回数を記録',
      'ドロップ数、勝敗、累計周回を含む遭遇履歴',
      'UUIDを使った複数端末間のデータ共有',
      'オフライン保存、自動再同期、編集競合の検知',
      '入力の取り消し・やり直しと複数タブ管理',
    ],
    learning:
      '画面内の集計処理だけでなく、APIとデータベースを組み合わせた永続化まで実装しました。通信できない状況や複数端末から同時に編集された場合も考慮し、実際に継続利用できるWebアプリにするための状態管理と同期設計を学びました。',
  },
  {
    slug: 'buildcardmaker',
    title: 'BuildCardMaker',
    summary: '原神のキャラクター情報を取得し、見やすい画像にまとめるDiscord Bot。',
    year: '2023',
    role: '個人制作 / 設計・実装',
    tags: ['Python', 'Discord Bot', 'API', 'Pillow'],
    status: 'release',
    repositoryUrl: 'https://github.com/apricot-hw/BuildCardMaker',
    thumbnail: {
      src: 'images/works/buildcardmaker/build-card.png',
      alt: 'BuildCardMakerが生成した縦型ビルドカード',
      position: 'center top',
    },
    overview:
      'DiscordからUIDを指定すると、ゲーム内で公開されているキャラクター情報を取得し、ステータスや装備を縦型のカード画像にまとめて返すBotです。当時、既存のツールでは欲しかった縦型のカードを作れなかったため、自分で制作しました。外部APIとの通信からDiscord上の操作画面、画像生成まで一通り実装しています。',
    goal:
      '既存ツールにはない縦型のレイアウトで、キャラクターの育成状況を1枚に整理し、Discord上ですぐ共有できるようにすることを目指しました。',
    process: [
      'Discord Botとスラッシュコマンドの仕組みを調べ、基本的な応答処理を実装',
      '外部APIからキャラクター・武器などのデータを非同期で取得',
      '取得したデータを整理し、キャラクター選択メニューとUID登録機能を作成',
      'Pillowで背景、文字、アイコンを合成し、結果を1枚の画像として出力',
    ],
    features: [
      'DiscordアカウントとゲームUIDの紐付け',
      'キャラクターを選べるインタラクティブなメニュー',
      'ステータス、武器、聖遺物情報の取得と整形',
      '聖遺物スコアの計算とビルド画像の自動生成',
    ],
    learning:
      '外部APIのレスポンスを読み解き、必要な情報を取り出して表示へつなげる一連の流れを学びました。また、非同期処理、データ保存、画像レイアウトなど、複数の技術をひとつの体験にまとめる経験になりました。',
    note: '生成AIが一般化する前に、公式ドキュメントやWeb上の資料を自分で調べながら制作しました。',
    images: [
      {
        src: 'images/works/buildcardmaker/discord-command.png',
        alt: 'Discord上でBuildCardMakerのキャラクター選択メニューを開いている画面',
        caption: 'スラッシュコマンド実行後のキャラクター選択画面',
        fit: 'contain',
      },
      {
        src: 'images/works/buildcardmaker/build-card.png',
        alt: 'BuildCardMakerが生成したニィロウのステータス・武器・聖遺物をまとめた画像',
        caption: 'APIから取得した情報をもとに自動生成したビルドカード',
      },
    ],
  },
  {
    slug: 'battle-counter',
    title: '対戦カウンター',
    summary: '2人分の勝利数と点差を、その場で記録できるデスクトップツール。',
    year: '2018',
    role: '個人制作 / 設計・実装',
    tags: ['Java', 'Swing', 'Desktop App'],
    status: 'release',
    repositoryUrl: 'https://github.com/apricot-hw/battle-counter',
    thumbnail: {
      src: 'images/works/battle-counter/thumbnail.png',
      alt: '対戦カウンターの操作画面',
    },
    overview:
      '2人で対戦するときの勝利数を左右に分けて記録し、現在の点差を自動表示するJava製デスクトップアプリです。シンプルなボタン操作で、その場ですぐに記録できます。',
    goal:
      '対戦中でも記録に手間を取られず、両者の勝利数と点差をひと目で確認できる小さなツールを作ることが目的でした。',
    process: [
      'JavaのGUI開発方法を調べ、Swingを使ってウィンドウと操作部品を配置',
      '左右それぞれの加算・減算処理をイベントとして実装',
      '勝利数が変わるたび、両者の差を再計算して画面に反映',
    ],
    features: [
      '2人分の勝利数を独立して加算・減算',
      '現在の点差を自動計算',
      '大きな数字を中心にしたシンプルな画面',
    ],
    learning:
      '初めてGUIアプリの構造を調べ、画面部品の配置、ボタンイベント、状態の保持と表示更新を実装しました。自分が欲しい道具を、調査しながら動く形にする原点となった作品です。',
    note: '生成AIのない時期に、JavaやSwingの使い方を自分で調べながら制作しました。',
  },
] satisfies readonly WorkItem[];
