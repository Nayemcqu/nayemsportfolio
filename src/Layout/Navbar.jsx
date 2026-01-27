import { Button } from "../components/Button";
import { Menu } from "lucide-react";
const navLinks=[
   {href:"#About",label:"About"},
   {href:"#projects",label:"Projects"},
   {href:"#testimonials",label:"testimonials"},
    {href:"#experience",label:"experience"},
     
]
export function Navbar(){

   return(
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 ">
<nav className="container mx-auto flex  px-6 md:flex-row  justify-between items-center ">
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

<button className="md:hidden flex p-2 text-foreground cursor-pointer">
<Menu size={24}/>
</button>

</nav>




</header>
   ) ;
}