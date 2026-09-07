'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowUpRight, Check, Globe2, Heart, Leaf, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import { Eyebrow, StartCampaign } from './shared'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -65])
  return <><section ref={ref} id="top" className="hero dark-surface" aria-labelledby="hero-title">
    <motion.div className="hero-photo" style={{ y: reduced ? 0 : y }}><Image src="/images/community-solar.png" alt="Solar technicians working together on a community solar installation; illustrative image" fill priority sizes="100vw" quality={85} /></motion.div><div className="hero-shade" />
    <div className="page-container hero-content"><div className="hero-copy"><Eyebrow light>Small acts. Real-world impact.</Eyebrow><h1 id="hero-title">From a post.<br />To a better<br /><span>tomorrow.</span></h1><p className="hero-description">Back the change you want to see. Turn a simple reply into climate action—with funding that moves as progress is made.</p><div className="hero-actions"><StartCampaign /><a href="#how-it-works" className="hero-watch"><span><ArrowDown size={17} /></span>Watch the story unfold</a></div><div className="hero-assurance"><ShieldCheck size={17} /><span>Community-powered. Milestone-led. Blockchain-backed.</span></div></div>
    <motion.div className="hero-scene" style={{ y: reduced ? 0 : sceneY }} aria-label="Illustrative campaign activity"><div className="scene-location"><span className="live-dot" /><span>GOOD ENERGY. SHARED.</span></div>
      <div className="floating-post"><div className="floating-post-top"><div className="mini-avatar"><Leaf size={17} /></div><div><strong>A brighter community</strong><span>Illustrative campaign</span></div><span className="x-mark" aria-label="X">𝕏</span></div><p>What if our next chapter was powered by the sun?</p><div className="post-reply"><MessageCircle size={15} /><span>One reply can get it started.</span><Heart size={15} /></div></div>
      <div className="floating-receipt"><span className="receipt-icon"><Check size={19} /></span><div><strong>Support received. Purpose protected.</strong><span>Held in campaign escrow</span></div><Sparkles size={17} /></div>
      <div className="scene-caption"><span>THE PEOPLE BEHIND THE PROGRESS</span><ArrowUpRight size={18} /></div>
    </motion.div></div>
    <div className="hero-bottom page-container"><a href="#how-it-works"><span className="scroll-line" />SCROLL TO SEE WHAT HAPPENS NEXT<ArrowDown size={15} /></a><span>A little support can go a long way.</span></div>
  </section><section className="promise-strip" aria-label="The EcoFundMe difference"><div className="page-container promise-inner"><div><MessageCircle /><span>Start with a post.<strong>Reach your community.</strong></span></div><div><ShieldCheck /><span>Release by milestone.<strong>Let progress lead.</strong></span></div><div><Globe2 /><span>20+ African countries.<strong>Local fiat outlets. Real possibilities.</strong></span></div></div></section></>
}
