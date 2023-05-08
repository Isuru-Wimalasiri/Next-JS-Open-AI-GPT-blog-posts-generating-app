import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import HeroImage from '../public/hero.webp';
import LogoBanner from '../components/LogoBanner/LogoBanner';

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative">
      <Image src={HeroImage} alt="Hero" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
        <LogoBanner />
        <p>
          The AI-powered SAAS solution to generate SEO-optimized blog posts in
          minutes. Get high-quality content, without sacrificing your time.
        </p>
        <Link href="/post/new" className="btn">
          BEGIN
        </Link>
      </div>
    </div>
  );
}
