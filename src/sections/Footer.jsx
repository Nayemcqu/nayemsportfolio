import { Github,Linkedin } from "lucide-react";
export default function Footer(){
const navLinks=[
   {href:"#About",label:"About"},
   {href:"#projects",label:"Projects"},
   {href:"#testimonials",label:"testimonials"},
    {href:"#experience",label:"experience"},
     
]
return (
  <footer className="pb-20  mx-auto px-4 bg-primary/20 mt-12">
  <div className="py-8 flex md:flex-row md:justify-between flex-col space-y-8  md:space-x-4 items-center md:items-start justify-center ">

<div className="flex ">
<a href="#" className="text-3xl font-bold tracking-tight hover:text-primary">
   Portfolio<span className="text-primary">.</span></a>
</div>


<div className=" flex md:flex-row md:justify-between md:space-x-6 flex-col space-y-6 justify-center text-base " >

{navLinks.map((item,index)=>(
<div className="p-2" key={index}>
<a  href={item.href} className=" hover:text-primary-foreground/30 " >
{item.label}
</a>
</div>

 
))}

</div>

<div className="flex md:flex-row flex-col justify-center  md:justify-between animate-fade-in animation-delay-400 md:space-x-2 "> 
<span className="p-2 text-muted-foreground text-sm">Follow me:</span>
{[{icon:Github,href:"https://github.com/Nayemcqu"},
   {icon:Linkedin,href:"#"} 
].map((social,indx)=>(
   <a className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300" key={indx} href={social.href}>
    {<social.icon  className=""/>}</a> 
))} 
</div>


  </div>

 </footer>

);

}