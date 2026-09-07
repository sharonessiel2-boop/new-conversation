'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, ArrowRight, Check, CheckCheck, ChevronRight, FileCheck2, Heart, Leaf, LockKeyhole, MessageCircle, Repeat2, ShieldCheck, Vote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Eyebrow, TextLink } from './shared'

const beats = [
  { title: 'Share the spark.', text: 'A school needs power. A coastline needs care. Post the need on X, right where your community already is.' },
  { title: 'Let a reply do more.', text: 'Supporters reply with @ecofundmebot. The bot connects that support to a campaign and its own escrow.' },
  { title: 'Keep everyone in the loop.', text: 'The creator verifies their identity and sets milestones. Evidence and updates return to the same thread.' },
]

export function CampaignStory() {
  const section = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: section, offset: ['start center', 'end center'] })
  useMotionValueEvent(scrollYProgress, 'change', value => { if (!reduced) setActive(Math.min(2, Math.floor(value * 3))) })
  const y = useTransform(scrollYProgress, [0, 1], [25, -25])
  return <section id="how-it-works" ref={section} className="story-section"><div className="page-container story-layout"><div className="story-copy"><Eyebrow>The spark</Eyebrow><h2>A post starts it.<br /><span className="muted-heading">People power it.</span></h2><p className="section-description">Your timeline is more than a feed.<br />It could be the beginning of something good.</p><div className="story-beats" aria-label="Explore the campaign journey">{beats.map((beat, index) => <button key={beat.title} onClick={() => setActive(index)} className={cn('story-beat', active === index && 'active')} aria-pressed={active === index}><span className="beat-number">0{index + 1}</span><span><strong>{beat.title}</strong><span className="beat-description">{beat.text}</span></span><ChevronRight size={18} /></button>)}</div><TextLink href="#governance">See how trust is built in</TextLink></div>
      <motion.div className="thread-stage" style={{ y: reduced ? 0 : y }}><div className="thread-stage-heading"><span className="x-mark">𝕏</span><span>A SMALL REPLY. A BIG POSSIBILITY.</span></div><div className="social-thread" aria-label="Illustrative X thread, not live activity">
        <article className={cn('thread-post', active === 0 && 'focused')}><div className="thread-identity"><span className="thread-avatar"><Leaf size={20} /></span><div><strong>Bright Futures Collective</strong><span>@brightfutures · Illustrative story</span></div><span className="post-ellipsis">···</span></div><p>Our community classroom has the ideas. Now it needs the energy. Help us bring solar power to a brighter next chapter.</p><div className="thread-photo"><Image src="/images/community-solar.png" fill sizes="(max-width: 700px) 85vw, 440px" alt="Illustrative community solar installation" /></div><div className="social-actions" aria-hidden="true"><MessageCircle size={16} /><Repeat2 size={16} /><Heart size={16} /><ArrowRight size={16} /></div></article>
        <article className={cn('thread-reply', active === 1 && 'focused')}><span className="supporter-avatar">AK</span><div><strong>A community supporter</strong><p><span className="mention">@ecofundmebot</span> send 100 dollars to <span className="mention">@brightfutures</span></p></div></article>
        <article className={cn('thread-bot', active === 2 && 'focused')}><Image src="/images/ecofundme-logo.png" alt="" width={34} height={34} /><div><strong>EcoFundMe Bot <ShieldCheck size={15} /></strong><p>Support received into campaign escrow. Next up: creator verification and milestones.</p><span className="bot-link">The journey continues here <ArrowRight size={14} /></span></div></article>
      </div><div className="example-caption"><span className="live-dot" />Illustrative thread · no donation is being made</div></motion.div>
    </div></section>
}

const milestoneSteps = [
  { label: 'The plan', title: 'A clear promise, before the payout.', description: 'The creator defines the work, budget, and evidence for each milestone. Identity checks confirm who is raising—not a guarantee of delivery.', status: 'Milestones agreed', icon: FileCheck2 },
  { label: 'The proof', title: 'Show the work. Not just the words.', description: 'Photos, receipts, and progress updates give backers evidence to assess. The next release is gated by the campaign’s governance rules.', status: 'Evidence submitted', icon: CheckCheck },
  { label: 'Your say', title: 'Your support comes with a say.', description: 'Backers assess whether the current milestone delivered what was promised. The governance outcome determines whether the next release can proceed.', status: 'Backer review', icon: Vote },
]

export function Governance() {
  const [stage, setStage] = useState(1)
  const [vote, setVote] = useState<'approve' | 'review' | null>(null)
  const current = milestoneSteps[stage]
  return <section id="governance" className="governance-section dark-surface"><div className="page-container"><div className="section-heading-row"><div><Eyebrow light>The trust</Eyebrow><h2>Good intentions.<br /><span className="accent-heading">Even better accountability.</span></h2></div><p>Trust isn&apos;t a promise in the small print.<br />It&apos;s built into how the money moves.</p></div><div className="governance-layout"><div className="milestone-visual"><div className="milestone-top"><span><Leaf size={16} />Community solar project</span><span>Example walkthrough</span></div><div className="milestone-tabs" aria-label="Milestone walkthrough">{milestoneSteps.map((step, index) => <button key={step.label} aria-pressed={stage === index} onClick={() => { setStage(index); setVote(null) }} className={cn(index <= stage && 'complete', stage === index && 'selected')}><span>{index < stage ? <Check size={15} /> : index + 1}</span>{step.label}</button>)}</div><div className="evidence-image"><Image src="/images/solar.jpg" fill sizes="(max-width: 760px) 90vw, 550px" alt="Solar panels as illustrative milestone evidence" /><span><FileCheck2 size={15} />{current.status}</span></div><div className="milestone-detail"><div><p>Milestone 01</p><h3>Bring the first panels to life.</h3></div><LockKeyhole size={22} /></div>{stage === 2 ? <div className="vote-demo"><div className="vote-options"><Button variant={vote === 'approve' ? 'default' : 'outline'} onClick={() => setVote('approve')}><Check data-icon="inline-start" />Looks delivered</Button><Button variant={vote === 'review' ? 'default' : 'outline'} onClick={() => setVote('review')}>Needs more evidence</Button></div><p aria-live="polite">{vote === 'approve' ? 'Example choice: approve. A real release depends on the full governance outcome.' : vote === 'review' ? 'Example choice: request more evidence. No live vote was submitted.' : 'Try an example choice. This is not a live ballot.'}</p></div> : <div className="escrow-note"><ShieldCheck size={17} /><span>Remaining funds stay in escrow until release conditions are met.</span></div>}</div>
        <div className="governance-copy"><span className="chapter-index">0{stage + 1} / 03</span><h3>{current.title}</h3><p>{current.description}</p><div className="governance-features"><div><LockKeyhole size={20} /><span><strong>Private participation. Verifiable rules.</strong><span>Zero-knowledge voting adds privacy-preserving verification to campaign governance.</span></span></div><div><ShieldCheck size={20} /><span><strong>Funding follows progress.</strong><span>Milestone-based disbursement keeps future funding tied to what happens next.</span></span></div></div><button className="text-link" onClick={() => { setStage((stage + 1) % 3); setVote(null) }}>Explore {milestoneSteps[(stage + 1) % 3].label.toLowerCase()}<ArrowRight size={18} /></button></div></div><p className="governance-footnote">On-chain records show funding activity. Real-world delivery still needs evidence and backer review. Voting thresholds and privacy guarantees depend on the deployed protocol.</p></div></section>
}
