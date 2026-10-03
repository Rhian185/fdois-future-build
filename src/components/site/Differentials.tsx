import { ArrowUpRight, Award, BadgeCheck, DraftingCompass, Ruler, ShieldCheck } from 'lucide-react';
import { CFG } from '@/data/site';
import { Reveal, SectionHeading } from './shared';
const icons={award:Award,check:BadgeCheck,ruler:Ruler,shield:ShieldCheck,arrow:ArrowUpRight};
export function Differentials(){return <section className="section-pad blueprint"><div className="wrap"><Reveal><SectionHeading tag="Diferenciais" title="Por que a F Dois Engenharia?"/></Reveal><div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{CFG.differentials.map((item,i)=>{const Icon=icons[item.icon];return <Reveal key={item.title} delay={(i%3)*90} className="border-t border-border py-7"><Icon size={32} strokeWidth={1.4} className="text-ocean"/><h3 className="mt-6 text-base font-extrabold uppercase">{item.title}</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{item.description}</p></Reveal>})}</div></div></section>}
