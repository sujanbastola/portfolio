import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Clock, Calendar, ArrowRight } from 'lucide-react';
import { useLang } from '../context/LangContext';

const posts = [
  {
    slug: 'hamro-cricket',
    emoji: '🏏',
    titleEn: 'How I Built Hamro Cricket Score — A Free Live Scoreboard for Local Games',
    titleJa: 'ハムロ・クリケットスコアの開発記録 — 地域の試合向け無料ライブスコアボード',
    date: '2024-08-10',
    minRead: 5,
    tags: ['React', 'Firebase', 'Real-time'],
    accentColor: '#30d158',
    summaryEn: 'Local cricket games in Nepal and Japan deserved a proper live scoreboard — so I built one. Here\'s the full story.',
    summaryJa: 'ネパールや日本の地域クリケット試合に、ちゃんとしたライブスコアボードが必要だと思って作りました。その全記録です。',
    contentEn: `## The Problem

Local cricket communities — especially Nepali communities in Japan — had no affordable way to stream a professional-looking scoreboard during matches. Existing solutions were either paid, overly complex, or required dedicated hardware.

## The Idea

I wanted anyone with a phone to be able to:
- Score a live cricket match in real time
- Share a live link that updates automatically for viewers
- Display a broadcast-quality overlay on stream (OBS, etc.)
- All for free

## Tech Stack Decision

**React** was the obvious choice for the UI — component-based and fast to iterate. For the backend I chose **Firebase Realtime Database** because:

- Zero server setup
- WebSocket-based sync out of the box
- Free tier is generous enough for community use
- Data updates push instantly to all connected viewers

## Building the Scorer

The core scoring logic handles cricket-specific rules: overs, wickets, extras (wide, no-ball, bye, leg-bye), run rate calculation, and partnership tracking. Each ball bowled updates a single Firebase node, which instantly reflects on every viewer's screen.

## The Overlay Feature

The most exciting part. Scorers generate a shareable overlay URL that streamers paste directly into OBS as a Browser Source. The overlay is a transparent HTML page that polls Firebase in real time — showing score, overs, run rate, and current batsmen in a broadcast-quality design.

## What I Learned

- Firebase's real-time sync is genuinely impressive for this use case
- Cricket scoring rules are more complex than they look in code
- Designing for low-bandwidth users (rural Nepal) forced me to keep payloads tiny
- Community feedback loops are the best feature specification

## Live Today

The app is live and actively used by Nepali cricket communities. Try it at [hamro-cricket-d3a64.web.app](https://hamro-cricket-d3a64.web.app/#/login).`,

    contentJa: `## 問題

ネパールや日本の地域クリケットコミュニティには、試合中にプロらしいライブスコアボードを表示する手頃な方法がありませんでした。

## アイデア

スマートフォンさえあれば誰でも：
- リアルタイムで試合をスコアリング
- 自動更新されるライブリンクを共有
- OBSなどで放送品質のオーバーレイを表示
- すべて無料

## 技術スタック

**React**でUI構築、**Firebase Realtime Database**でリアルタイム同期を実現。Firebaseのリアルタイム同期は今回のユースケースに最適でした。

## 学んだこと

- Firebaseのリアルタイム同期は驚くほど強力
- クリケットのスコアリングルールはコードにすると複雑
- コミュニティのフィードバックが最高の機能仕様書`,
  },
  {
    slug: 'hospital-management',
    emoji: '🏥',
    titleEn: 'Building a Hospital Management System with Django — Lessons from the Real World',
    titleJa: 'Djangoで病院管理システムを構築 — 実際の開発から学んだこと',
    date: '2024-05-20',
    minRead: 6,
    tags: ['Django', 'Python', 'MySQL'],
    accentColor: '#2997ff',
    summaryEn: 'A full hospital management system is one of the most complex CRUD applications you can build. Here\'s what I learned building one from scratch.',
    summaryJa: '病院管理システムは最も複雑なCRUDアプリの一つです。ゼロから構築して学んだことを共有します。',
    contentEn: `## Why a Hospital System?

During my time studying Information Technology at Wakkanai Hokusei Gakuen University, I wanted to build something that genuinely mattered — not a toy project. A hospital management system touches real human needs: patient safety, accurate records, and efficient workflows.

## What It Covers

The system handles:
- **Patient registration & records** — full medical history, contact info, insurance details
- **Doctor & staff management** — schedules, departments, specializations
- **Appointment booking** — calendar-based scheduling with conflict detection
- **Billing & invoicing** — itemized bills, payment tracking
- **Admin dashboard** — overview of daily operations, bed availability, statistics

## Why Django?

Django's "batteries included" philosophy was perfect here. Built-in admin panel, ORM, authentication, and form validation saved enormous time. MySQL was chosen for its reliability in medical contexts where data integrity is critical.

## The Hardest Part

**Data relationships.** A patient has appointments. Appointments have doctors. Doctors have departments. Departments have rooms. Getting the database schema right before writing a single line of view code was the most important decision of the whole project.

I drew the ER diagram on paper first. Then translated it into Django models. Only then did I write views.

## Key Lessons

1. **Schema first, code second** — changing models mid-project in Django is painful
2. **Django's admin is underrated** — with proper ModelAdmin customization it becomes a real operations tool
3. **Never trust user input in medical systems** — validation at every layer
4. **Audit trails matter** — every record change should be logged with who did it and when

## Open Source

The full code is on GitHub: [github.com/sujanbastola/wakkanaihospital](https://github.com/sujanbastola/wakkanaihospital)`,

    contentJa: `## なぜ病院システムなのか

大学時代、本当に意味のあるものを作りたいと思いました。病院管理システムは患者の安全、正確な記録、効率的なワークフローという現実のニーズに応えます。

## 主な機能

- 患者登録・記録管理
- 医師・スタッフ管理
- 予約スケジューリング
- 請求・請求書発行
- 管理ダッシュボード

## 主な学び

1. スキーマ設計が最優先
2. DjangoのAdminは強力なツール
3. 医療システムではバリデーションを徹底
4. 変更履歴の記録は必須`,
  },
  {
    slug: 'bishnu-homestay',
    emoji: '🏡',
    titleEn: 'From Zero to Live: Building a Homestay Booking Web App with Django',
    titleJa: 'Djangoでホームステイ予約アプリを構築した話',
    date: '2024-03-15',
    minRead: 4,
    tags: ['Django', 'Python', 'Bootstrap'],
    accentColor: '#ff9900',
    summaryEn: 'A small business needed a digital presence and a way to manage bookings online. I built it solo in Django — here\'s the journey.',
    summaryJa: '小さなビジネスがオンラインプレゼンスと予約管理を必要としていました。Djangoで一人で構築した記録です。',
    contentEn: `## The Real-World Brief

Bishnu Homestay is a real small hospitality business. The owner needed:
- A website guests could find online
- A way to show available rooms with photos and prices
- An online inquiry/booking form
- A simple admin interface to manage reservations

No budget for a developer agency. No months of back-and-forth. Just build it.

## Approach

**Django** for the backend — fast to build, secure by default, and the built-in admin gave the owner a no-code interface to manage rooms and bookings.

**Bootstrap** for the frontend — responsive by default, professional-looking without a design team, and fast to implement.

**SQLite** for the database — for a small business with low concurrent traffic, SQLite is perfectly reliable and requires zero server configuration.

## Features Built

- Room listing page with photo gallery
- Availability calendar
- Booking inquiry form with email notification
- Admin dashboard for managing bookings, rooms, and guests
- Mobile-responsive design

## The Owner Experience

The most important metric wasn't technical — it was whether the owner could actually use the admin panel without help. I spent time customizing the Django admin with clear field names, helpful descriptions, and logical groupings. The owner now manages bookings independently.

## What I'd Do Differently

- Add a proper payment gateway (currently inquiry-based only)
- Use PostgreSQL even for small sites — SQLite has write-locking issues under concurrent load
- Add automated email reminders for upcoming bookings

## Code

[github.com/sujanbastola/bishnuhomestay](https://github.com/sujanbastola/bishnuhomestay)`,

    contentJa: `## 実際のニーズ

ホームステイオーナーが必要としていたもの：
- オンラインで見つけられるウェブサイト
- 部屋の表示と予約フォーム
- 予約管理のシンプルな管理画面

## アプローチ

Django + Bootstrap + SQLiteで構築。オーナーがコードなしで管理できるよう、Django Adminを丁寧にカスタマイズしました。

## 学んだこと

- 技術より「オーナーが使えるか」が最重要
- SQLiteは小規模サービスには十分
- メールリマインダーは最初から実装すべきだった`,
  },
];

const BlogModal: React.FC<{ post: typeof posts[0]; onClose: () => void }> = ({ post, onClose }) => {
  const { lang } = useLang();
  const content = lang === 'ja' ? post.contentJa : post.contentEn;
  const title = lang === 'ja' ? post.titleJa : post.titleEn;

  const renderContent = (md: string) =>
    md.split('\n').map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i} style={{ fontSize: 22, fontWeight: 800, marginTop: 32, marginBottom: 12, letterSpacing: -0.5 }}>{line.replace('## ', '')}</h2>;
      if (line.startsWith('- ')) return <li key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginLeft: 20, marginBottom: 4 }}>{line.replace('- ', '')}</li>;
      if (line.startsWith('**') && line.endsWith('**')) return <p key={i} style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{line.replace(/\*\*/g, '')}</p>;
      if (line.trim() === '') return <div key={i} style={{ height: 8 }} />;
      return <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: 8, fontSize: 15 }}>{line}</p>;
    });

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '40px 24px', overflowY: 'auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg)', border: '1px solid var(--border)',
          borderRadius: 28, maxWidth: 720, width: '100%',
          overflow: 'hidden', position: 'relative',
        }}
      >
        {/* Top bar */}
        <div style={{ height: 4, background: `linear-gradient(90deg, ${post.accentColor}, #2997ff)` }} />

        <div style={{ padding: '36px 40px 48px' }}>
          {/* Close */}
          <button onClick={onClose} style={{
            position: 'absolute', top: 20, right: 20,
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: '50%', width: 36, height: 36,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--text-secondary)',
          }}>
            <X size={16} />
          </button>

          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 32 }}>{post.emoji}</span>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {post.tags.map(t => (
                <span key={t} style={{
                  fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20,
                  background: `${post.accentColor}18`, color: post.accentColor,
                  border: `1px solid ${post.accentColor}30`,
                }}>{t}</span>
              ))}
            </div>
          </div>

          <h1 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, letterSpacing: -0.8, lineHeight: 1.25, marginBottom: 16 }}>{title}</h1>

          <div style={{ display: 'flex', gap: 16, marginBottom: 36, color: 'var(--text-tertiary)', fontSize: 13 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Calendar size={13} /> {post.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Clock size={13} /> {post.minRead} min read</span>
          </div>

          <div>{renderContent(content)}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Blog: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activePost, setActivePost] = useState<typeof posts[0] | null>(null);
  const { lang, t } = useLang();

  useEffect(() => {
    if (activePost) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [activePost]);

  return (
    <>
      <section id="blog" style={{ padding: 'clamp(80px, 10vw, 120px) clamp(16px, 4vw, 24px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: 72 }}
          >
            <p style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>{t.blog.label}</p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, letterSpacing: -2, marginBottom: 16 }}>{t.blog.title}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>{t.blog.subtitle}</p>
          </motion.div>

          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {posts.map((post, i) => {
              const title = lang === 'ja' ? post.titleJa : post.titleEn;
              const summary = lang === 'ja' ? post.summaryJa : post.summaryEn;
              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
                  onClick={() => setActivePost(post)}
                  whileHover={{ y: -8 }}
                  style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    borderRadius: 24, overflow: 'hidden', cursor: 'pointer',
                    transition: 'border-color 0.25s, box-shadow 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = post.accentColor + '55';
                    e.currentTarget.style.boxShadow = `0 20px 50px ${post.accentColor}18`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Color bar */}
                  <div style={{ height: 4, background: `linear-gradient(90deg, ${post.accentColor}, #2997ff)` }} />

                  <div style={{ padding: '28px 28px 32px' }}>
                    <div style={{ fontSize: 36, marginBottom: 16 }}>{post.emoji}</div>

                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                      {post.tags.map(t => (
                        <span key={t} style={{
                          fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 20,
                          background: `${post.accentColor}15`, color: post.accentColor,
                          border: `1px solid ${post.accentColor}25`,
                        }}>{t}</span>
                      ))}
                    </div>

                    <h3 style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.35, letterSpacing: -0.4, marginBottom: 12 }}>{title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{summary}</p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: 12, color: 'var(--text-tertiary)', fontSize: 12 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={11} /> {post.date}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={11} /> {post.minRead} {t.blog.minRead}</span>
                      </div>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 700, color: post.accentColor }}>
                        {t.blog.readMore} <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activePost && <BlogModal post={activePost} onClose={() => setActivePost(null)} />}
      </AnimatePresence>
    </>
  );
};


export default Blog;
