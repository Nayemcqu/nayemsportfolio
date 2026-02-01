import { Button } from "../components/Button";
import { HouseWifiIcon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks=[
   {href:"#About",label:"About"},
   {href:"#projects",label:"Projects"},
   {href:"#testimonials",label:"testimonials"},
    {href:"#experience",label:"experience"},
     
]
export function Navbar(){
const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
const [isScrolled,setIsScrolled]=useState(false);

useEffect(()=>{
const handleScroll=()=>{
   setIsScrolled(window.scrollY>50);
}   

window.addEventListener('scroll',handleScroll);

return ()=> window.removeEventListener('scroll',handleScroll);

},[])

function onClickHandler(){
setIsMobileMenuOpen((prev)=>{
   if(prev===false){
      prev=true;
   }
   else{
      prev=false;
   }
   return prev;
})
}
   return(
    <header className={`fixed top-0 left-0 right-0
     ${isScrolled ? "glass-strong py-3":"bg-transparent py-5"} z-50 transition-all duration-500`} >
<nav className="container  mx-auto flex  px-6 md:flex-row  justify-between items-center ">
<a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
   Portfolio<span className="text-primary">.</span>
</a>
{/* Desktop Nav */}
<div className=" hidden md:flex items-center gap-1">
   <div className="glass rounded-full px-4 py-2 flex items-center space-x-3">

{navLinks.map((link,index)=>{
   return <a href={link.href} key={index} className="px-4 py-2 text-bold text-zinc-300 hover:text-foreground rounded-full hover:bg-zinc-600">
      {link.label}
      </a>
})}
   </div>
</div>

{/* CTA Button */}
<div className="hidden md:block">
<Button size="sm">Contact Me</Button>
</div>

{/* Mobile Menu Button */}

<button className="md:hidden flex p-2 text-foreground cursor-pointer" onClick={onClickHandler}>
{isMobileMenuOpen ? <X/> : <Menu size={24}/>}
</button>

</nav>

{/* Mobile Menu */}

{isMobileMenuOpen && <div className="md:hidden glass-strong animate-fade-in ">

<div className="container mx-auto  flex items-center justify-center flex-col p-6 space-y-4 transition-all  ">
{navLinks.map((link,index)=>{
   return <a 
   href={link.href}
    key={index}
    onClick={()=>setIsMobileMenuOpen(false)}
    className=" text-center text-lg text-bold text-zinc-300
    hover:text-foreground  hover:bg-zinc-600 w-full py-2">
      {link.label}
      </a>
})}

<Button size="default"  onClick={()=>setIsMobileMenuOpen(false)} className="cursor-pointer w-full">Contact Me</Button>
</div>

</div>
}

</header>
   ) ;
}