'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Check, Copy, Leaf, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

export function Brand({ small = false }: { small?: boolean }) {
  return <a href="#top" aria-label="EcoFundMe home" className={cn('brand', small && 'brand-small')}><Image src="/images/ecofundme-logo.png" width={36} height={36} alt="" /><span>EcoFundMe<span className="brand-period">.</span></span></a>
}
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={cn('eyebrow', light && 'eyebrow-light')}><span aria-hidden="true" />{children}</p>
}
export function StartCampaign({ label = 'Start a campaign', variant = 'default' }: { label?: string; variant?: 'default' | 'outline' }) {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const command = '@ecofundmebot send 100 dollars to @campaign_handle'
  async function copy() {
    try { await navigator.clipboard.writeText(command); setCopied(true); setCopyError(false) } catch { setCopyError(true) }
  }
  return <Dialog onOpenChange={() => { setCopied(false); setCopyError(false) }}>
    <DialogTrigger render={<Button variant={variant} size="lg" className="cta-button" />}>{label}<ArrowUpRight data-icon="inline-end" /></DialogTrigger>
    <DialogContent className="start-dialog sm:max-w-lg">
      <DialogHeader><div className="dialog-mark"><Leaf size={24} /></div><DialogTitle>Big change starts with your story.</DialogTitle><DialogDescription>Tell your community what needs to change, what it will cost, and how you will show progress.</DialogDescription></DialogHeader>
      <ol className="start-steps"><li><span>1</span><div><strong>Share the need on X</strong><p>Describe your project and the people it will help.</p></div></li><li><span>2</span><div><strong>Bring your community into the replies</strong><p>The bot donation flow connects support to campaign escrow.</p></div></li><li><span>3</span><div><strong>Verify and set your milestones</strong><p>Complete identity checks and define delivery before funds can be released.</p></div></li></ol>
      <div className="command-example"><span>Example supporter reply · replace the handle</span><code className="font-mono">{command}</code><Button variant="outline" onClick={copy}>{copied ? <Check data-icon="inline-start" /> : <Copy data-icon="inline-start" />}{copied ? 'Copied' : 'Copy example'}</Button><p className="sr-only" aria-live="polite">{copied ? 'Example copied to clipboard.' : ''}</p>{copyError && <p>Select the example above to copy it manually.</p>}</div>
      <a className="action-link" href={`https://x.com/intent/post?text=${encodeURIComponent('Our community is ready to make a difference. Here is what we want to change, what we need, and the milestones we will share:')}`} target="_blank" rel="noopener noreferrer">Draft your story on X<ArrowUpRight size={18} /></a>
      <p className="fine-print"><ShieldCheck size={16} />This opens a draft, not a live campaign. This landing-page preview does not accept donations or create accounts.</p>
    </DialogContent>
  </Dialog>
}
export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="text-link">{children}<ArrowRight size={18} /></a>
}
