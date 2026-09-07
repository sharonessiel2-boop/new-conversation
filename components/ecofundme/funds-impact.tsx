'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDownLeft, ArrowRight, Check, CreditCard, Landmark, LockKeyhole, Smartphone, Wifi } from 'lucide-react'
import { Eyebrow, TextLink } from './shared'
import { cn } from '@/lib/utils'

const methods = [
  { title: 'Pay online', label: 'Campaign card', icon: CreditCard, description: 'Buy the supplies, software, and services your campaign needs with a Visa or Mastercard payment card.', transaction: 'Solar equipment supplier', sub: 'Online purchase · example', amount: '−$240.00' },
  { title: 'Bank transfer', label: 'Bank payout', icon: Landmark, description: 'Move released campaign funds to a supported bank account to pay local suppliers and put your plans in motion.', transaction: 'Local supplier account', sub: 'Bank transfer · example', amount: '−$240.00' },
  { title: 'Mobile money', label: 'Mobile payout', icon: Smartphone, description: 'Reach people where they are. Send released funds through supported mobile-money outlets across African markets.', transaction: 'Community project team', sub: 'Mobile-money payout · example', amount: '−$240.00' },
]

export function FundsAndImpact() {
  const ref = useRef<HTMLElement>(null)
  const [method, setMethod] = useState(0)
  const [hover, setHover] = useState({ x: 0, y: 0 })
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, .5, 1], [-12, -5, 5])
  const current = methods[method]
  return <><section id="money" ref={ref} className="money-section"><div className="page-container money-layout"><div className="money-copy"><Eyebrow>The action</Eyebrow><h2>Raised with purpose.<br /><span className="muted-heading">Ready for real life.</span></h2><p className="section-description">Good things don&apos;t happen in a wallet.<br />They happen when you put the money to work.</p><div className="payment-methods" aria-label="Explore payout methods">{methods.map((item, index) => <button key={item.title} onClick={() => setMethod(index)} aria-pressed={index === method} className={cn(index === method && 'active')}><item.icon size={18} />{item.title}</button>)}</div><div className="method-description" aria-live="polite"><h3>{current.label}</h3><p>{current.description}</p></div><div className="coverage-note"><strong>20+</strong><span>African countries with fiat outlets.<br />More local ways to make a difference.</span></div><p className="fine-print">Card issuance and payout routes depend on country, provider, eligibility, and verification. Cards spend available funds—not locked escrow or borrowed credit.</p></div>
    <div className="money-stage" onPointerMove={event => { if (reduced || event.pointerType !== 'mouse') return; const rect = event.currentTarget.getBoundingClientRect(); setHover({ x: ((event.clientY - rect.top) / rect.height - .5) * -12, y: ((event.clientX - rect.left) / rect.width - .5) * 16 }) }} onPointerLeave={() => setHover({ x: 0, y: 0 })}>
      <div className="balance-window"><div className="balance-header"><span>YOUR CAMPAIGN, IN MOTION</span><LockKeyhole size={16} /></div><div className="balance-values"><div><span>Available to spend</span><strong>$1,250<span>.00</span></strong></div><span className="available-label"><span />Released funds</span></div><div className="balance-divider"><span>Still in escrow</span><span>$3,750.00 <LockKeyhole size={12} /></span></div></div>
      <motion.div className="payment-card" style={{ rotateZ: reduced ? -5 : rotate, rotateX: hover.x, rotateY: hover.y }}><div className="payment-card-top"><div><Image src="/images/ecofundme-logo.png" width={30} height={30} alt="" /><strong>EcoFundMe</strong></div><Wifi size={23} /></div><div className="chip" aria-hidden="true"><span /><span /><span /></div><div className="card-number">•••• &nbsp; •••• &nbsp; •••• &nbsp; 2048</div><div className="payment-card-bottom"><div><span>FUNDING A BETTER TOMORROW</span><strong>CAMPAIGN CARD</strong></div><span className="card-network">VISA<span>/ Mastercard</span></span></div></motion.div>
      <div className="transaction-slip" aria-live="polite"><span className="transaction-icon"><current.icon size={19} /></span><div><strong>{current.transaction}</strong><span>{current.sub}</span></div><strong>{current.amount}</strong></div><div className="money-stage-caption"><ArrowDownLeft size={15} />From collective support to everyday action.<span>Illustrative balances & card</span></div>
    </div></div></section>
    <section id="impact" className="impact-section dark-surface"><div className="impact-photo"><Image src="/images/community-solar.png" fill sizes="100vw" alt="Illustrative image of two technicians turning community support into solar energy" /></div><div className="impact-shade" /><div className="page-container impact-content"><Eyebrow light>The full circle</Eyebrow><h2>Not just funded.<br /><span>Followed through.</span></h2><p>A classroom with power. A community with possibilities.<br />Bring the evidence back to the people who made it possible.</p><TextLink href="#how-it-works">Back to the thread. Forward together.</TextLink><div className="impact-update"><span><Check size={17} /></span><div><strong>A promise, turned into progress.</strong><p>Milestone evidence shared with the community.</p></div><ArrowRight size={20} /></div><span className="impact-example">Illustrative campaign story</span></div></section></>
}
