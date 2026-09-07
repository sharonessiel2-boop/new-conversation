'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Brand, StartCampaign } from './shared'

const links = [{ href: '#how-it-works', label: 'How it works' }, { href: '#campaigns', label: 'Explore campaigns' }, { href: '#governance', label: 'Built on trust' }]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header dark-surface"><div className="page-container header-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><div className="header-action"><StartCampaign label="Make a difference" /></div><Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>{open && <nav id="mobile-menu" aria-label="Mobile navigation" className="mobile-nav">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a href="#money" onClick={() => setOpen(false)}>Campaign cards & payouts</a><StartCampaign /></nav>}</header>
}
