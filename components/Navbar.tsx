'use client'
import { useState, useEffect } from 'react'

const navItems = [
  { href: '#hero', label: 'Home', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] shrink-0">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/>
    </svg>
  )},
  { href: '#about', label: 'About', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] shrink-0">
      <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  )},
  { href: '#skills', label: 'Skills', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] shrink-0">
      <polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>
    </svg>
  )},
  { href: '#projects', label: 'Projects', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] shrink-0">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  )},
  { href: '#contact', label: 'Contact', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] shrink-0">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )},
]

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] shrink-0">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] shrink-0">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

export default function Navbar() {
  const [dark, setDark] = useState(false)

  // Load saved theme on first render
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') setDark(true)
  }, [])

  // Apply theme whenever dark changes
  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.setAttribute('data-theme', 'dark')
      root.classList.add('dark')
    } else {
      root.setAttribute('data-theme', 'light')
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const NavItem = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => (
    <a href={href} className="nav-item">{icon}{label}</a>
  )

  return (
    <>
      {/* Desktop */}
      <nav className="main-nav">
        {navItems.map(item => <NavItem key={item.href} {...item} />)}
        <div className="nav-divider" />
        <button className="nav-item" onClick={() => setDark(d => !d)}>
          {dark ? <MoonIcon /> : <SunIcon />}Theme
        </button>
      </nav>

      {/* Mobile */}
      <nav className="mobile-nav">
        {navItems.map(item => (
          <a key={item.href} href={item.href} className="nav-item flex-col gap-[3px] !text-[0.62rem]">
            {item.icon}
            <span>{item.label === 'Projects' ? 'Work' : item.label}</span>
          </a>
        ))}
        <div className="nav-divider" />
        <button className="nav-item flex-col gap-[3px] !text-[0.62rem]" onClick={() => setDark(d => !d)}>
          {dark ? <MoonIcon /> : <SunIcon />}<span>Theme</span>
        </button>
      </nav>
    </>
  )
}
