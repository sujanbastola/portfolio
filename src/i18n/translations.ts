export const translations = {
  en: {
    nav: { about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', blog: 'Blog', contact: 'Contact' },
    hero: {
      available: 'Available for opportunities',
      title: 'Full Stack Developer',
      bio: '"Build it by yourself."',
      experience: '5 years experience',
      github: 'GitHub',
      contact: 'Get in touch',
    },
    skills: {
      label: 'Expertise',
      title: 'Skills & Technologies',
      subtitle: '5 years of building real products from scratch — alone.',
    },
    experience: {
      label: 'Journey',
      title: 'Experience & Education',
    },
    projects: {
      label: 'Work',
      title: 'Projects & Achievements',
      subtitle: 'Real products built solo — from idea to deployment. Each one solves a genuine problem.',
      live: 'Live',
      ndaToggleShow: 'Show company achievements (NDA)',
      ndaToggleHide: 'Hide company achievements (NDA)',
      github: 'View all repositories on GitHub',
      stats: [
        { value: '4+', label: 'Public Projects' },
        { value: '5yr', label: 'Industry Experience' },
        { value: '1', label: 'Live Production App' },
      ],
    },
    blog: {
      label: 'Writing',
      title: 'Blog',
      subtitle: 'Deep dives into my projects — the why, the how, and what I learned.',
      readMore: 'Read more',
      minRead: 'min read',
    },
    contact: {
      label: 'Contact',
      title: "Let's Build Together",
      subtitle: "I'm open to new opportunities, collaborations, and interesting problems. Feel free to reach out.",
      copy: 'Copy',
      copied: 'Copied!',
      viewProfile: 'View Profile',
      sendEmail: 'Send Email',
      cta: 'Ready to work together? Send me a message.',
    },
    footer: 'Built with',
  },
  ja: {
    nav: { about: 'について', skills: 'スキル', experience: '経歴', projects: 'プロジェクト', blog: 'ブログ', contact: 'お問い合わせ' },
    hero: {
      available: '新しい機会を探しています',
      title: 'フルスタック開発者',
      bio: '「自分で作る。」',
      experience: '5年の経験',
      github: 'GitHub',
      contact: 'お問い合わせ',
    },
    skills: {
      label: '専門知識',
      title: 'スキルと技術',
      subtitle: '5年間、一人でゼロからプロダクトを構築してきました。',
    },
    experience: {
      label: '経歴',
      title: '職歴・学歴',
    },
    projects: {
      label: '実績',
      title: 'プロジェクトと実績',
      subtitle: '一人でゼロから作った実プロダクト。それぞれが現実の問題を解決しています。',
      live: 'ライブ',
      ndaToggleShow: '会社の実績を表示 (NDA)',
      ndaToggleHide: '会社の実績を非表示 (NDA)',
      github: 'GitHubで全リポジトリを見る',
      stats: [
        { value: '4+', label: '公開プロジェクト' },
        { value: '5年', label: '業界経験' },
        { value: '1', label: '本番アプリ' },
      ],
    },
    blog: {
      label: 'ブログ',
      title: 'ブログ',
      subtitle: 'プロジェクトの深掘り — なぜ作ったか、どう作ったか、何を学んだか。',
      readMore: '続きを読む',
      minRead: '分で読める',
    },
    contact: {
      label: 'お問い合わせ',
      title: '一緒に作りましょう',
      subtitle: '新しい機会やコラボレーション、面白い問題に取り組みたいと思っています。お気軽にご連絡ください。',
      copy: 'コピー',
      copied: 'コピーしました！',
      viewProfile: 'プロフィールを見る',
      sendEmail: 'メールを送る',
      cta: '一緒に仕事をしませんか？メッセージをください。',
    },
    footer: '作成者',
  },
} as const;

export type Lang = keyof typeof translations;
export type Translations = typeof translations.en;
