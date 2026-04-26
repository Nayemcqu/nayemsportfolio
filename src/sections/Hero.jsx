import { Download,ArrowRight, Github, Linkedin,ChevronDown} from "lucide-react";
import { Button } from "../components/Button";
import {useState} from 'react'


export function Hero(){

const skills=["React","Javascript","TypeScript","TailwindCss", "MongoDb","vercel","Git"];
  const [dots] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 20}s`,
      delay: `${Math.random() * 5}s`,
    }))
  );


    return( 
    
<section className="relative min-h-screen flex items-center overflow-hidden" >

  { /* Bg */}
<div className="absolute inset-0">
    <img src="./hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40 "/>
    
<div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background "/>
    </div>

{ /*Green Dots */ }
<div className="absolute inset-0 overflow-hidden pointer-events-none">
   {dots.map(p => (
        <div
          key={p.id}
          className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#20B2A6",
            left: p.left,
            top: p.top,
            animation: `slow-drift ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
</div>

{/* Content  */}
<div className="container mx-auto px-6 pt-32 pb-20 relative z-20">
<div className="flex md:flex-row flex-col space-x-12 items-center ">
{/* left column -text Content*/}
<div className="space-y-8  md:w-1/2">
<div className="animate-fade-in animation-dealy-100">
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
 <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>SoftWare Engineer ***React Developer***  
</span>
</div>

{/*Headline */}
<div  className="space-y-4">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
    Making <br/> ideas into <br/> <span className="font-serif italic font-normal text-white">Reality</span>
</h1>
<p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
I am Nayem Khan, a front End Developer specialized in React, 
javaScript and TypeSscript. I love making optimized websites with the power of React and 
make visually appealing with tailwind.js.

</p>
</div>

{/*CTAs section */}
<div className="flex items-center space-x-4 animate-fade-in animation-delay-300">
<Button
  size="lg"
  asChild
  className="cursor-pointer"
>
  <a href="#contact" className="flex items-center">
    Contact Me
    <ArrowRight className="w-5 h-5 ml-2"/>
  </a>
</Button>

<a
  href="/cv.pdf"
  download
  className="flex gap-2 border rounded-full border-green-300 py-4 px-4 cursor-pointer text-xl text-foreground items-center"
>
  Download CV
  <Download className="ml-2" />
</a>

</div>

{/*Social Links */}
<div className="flex items-center gap-4 animate-fade-in animation-delay-400"> 
<span className="text-muted-foreground text-sm">Follow me:</span>
{[{icon:Github,href:"https://github.com/Nayemcqu"},
   {icon:Linkedin,href:"#"} 
].map((social,indx)=>(
   <a className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300" key={indx} href={social.href}>
    {<social.icon className="w-5 h-5"/>}</a> 
))} 
</div>
</div>
{/* right column -profile image*/}
<div className="relative animate-fade-in animation-delay-400 md:w-1/2">
{/*Profile Image */}
<div className="relative max-w-md mx-auto">
<div className="relative glass rounded-3xl p-2 w-full">
    <img src="/profilePic.png" alt="" className=" w-full  aspect-4/5 bg-cover rounded-2xl"/>
{/*Floating badge */}
<div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
<div className="flex items-center gap-3">
<div  className="w-3 h-3 bg-green-300 rounded-full animate-pulse"/>
<span>Available for work </span>
</div>
</div> 

{/* stats badge */}

<div className="absolute left-0 -top-4  glass rounde-full px-3 py-1 animate-float">

<div className="flex items-center gap-3 ">
<div className="w-3 h-3 bg-green-300 rounded-full animate-bounce"/>
<div><span className="text-green-500 text-2xl">1+</span> years experience</div>
</div>
</div>


</div>
</div>


</div>

</div>

{/* skills  Section */}
<div className="mt-20 animate-fade-in animation-delay-600  w-full">
<p className="text-sm text-muted-foreground mb-6 text-center">Technologies i worked with..</p> 
<div className="relative overflow-hidden max-w-2xl mx-auto">
<div className="flex items-center space-x-4 animate-marque transition-all ">
{[...skills,...skills].map((skill,index)=>(
    <div key={index} className="flex-shrink-0 px-8 py-4"> 
       <span className="text-xl font-semibold">{skill}</span> 
    </div>
))}
</div>
</div>
</div>

</div>

<div className="absolute bottom-8 left-1/2">

<a href="#about"
className="flex flex-col justify-center items-center cursor-pointer"
>

<span className="text-xs uppercase tracking-wider">scroll </span>
<ChevronDown className="w-6 h-6 animate-bounce transition-all"/>
</a>
</div>
</section>
    
);
}