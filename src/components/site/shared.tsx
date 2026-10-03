import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { CFG } from '@/data/site';

export const NAV = [ ['Início','inicio'], ['Sobre','sobre'], ['Soluções','solucoes'], ['Projetos','projetos'], ['Avaliações','avaliacoes'], ['Contato','contato'] ] as const;
export function Logo() { return <a href="#inicio" className="inline-flex items-center gap-3 text-on-dark" aria-label="F Dois Engenharia — início"><span className="grid size-11 shrink-0 place-items-center bg-gold text-xl font-extrabold text-gold-foreground">F2</span><span className="flex flex-col leading-none"><strong className="text-[17px] font-extrabold tracking-wide">F DOIS</strong><small className="mt-1 text-[9px] font-bold tracking-[.28em]">ENGENHARIA</small></span></a>; }
export function ExternalButton({href, children, variant='gold', className=''}: {href:string,children:ReactNode,variant?:'gold'|'navy'|'whiteOutline'|'navyOutline',className?:string}) { return <Button asChild variant={variant} className={className}><a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>{children}</a></Button>; }
export function Media({image,video,alt,className='',position='',priority=false,hero=false}: {image:string,video:string,alt:string,className?:string,position?:string,priority?:boolean,hero?:boolean}) {
 const ref = useRef<HTMLVideoElement>(null); const [available,setAvailable]=useState(true); const [playing,setPlaying]=useState(false);
 useEffect(()=>{ const el=ref.current; if(!el || !available) return; const reduced=window.matchMedia('(prefers-reduced-motion: reduce)'); let visible=hero;
 const update=()=>{ if (!document.hidden && visible && !reduced.matches) { el.play().then(()=>setPlaying(true)).catch(()=>setPlaying(false)); } else { el.pause(); setPlaying(false); } };
 const obs = new IntersectionObserver(([entry])=>{ visible=entry.isIntersecting; update(); },{threshold:.12}); obs.observe(el); document.addEventListener('visibilitychange',update); reduced.addEventListener('change',update); return ()=>{ obs.disconnect(); document.removeEventListener('visibilitychange',update); reduced.removeEventListener('change',update); el.pause(); };
 },[available,hero]);
 return <div className={`relative overflow-hidden ${className}`}><img src={image} alt={alt} className={`media-image ${position}`} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':undefined}/>{available && <video ref={ref} src={video} className={`media-video ${position} ${playing?'is-playing':''}`} muted loop playsInline preload="none" aria-hidden="true" onError={()=>setAvailable(false)} />}</div>;
}
export function Reveal({children,className='',delay=0}: {children:ReactNode,className?:string,delay?:number}) { const ref=useRef<HTMLDivElement>(null); useEffect(()=>{ const node=ref.current;if(!node)return;const obs=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){node.classList.add('is-visible');obs.unobserve(node)}},{threshold:.1});obs.observe(node);return()=>obs.disconnect();},[]);return <div ref={ref} style={{'--reveal-delay':`${delay}ms`} as CSSProperties} className={`reveal ${className}`}>{children}</div>; }
export function SectionHeading({tag,title,description}: {tag?:string,title:string,description?:string}) {return <><div className="eyebrow mb-6">{tag}</div><h2 className="section-title">{title}</h2>{description && <p className="section-intro mt-6 max-w-xl">{description}</p>}</>}
export const WhatsApp = CFG.contact.whatsappHref;
