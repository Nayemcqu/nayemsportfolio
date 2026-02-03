import { Indent } from "lucide-react";

export function Experience(){

const experiences = [
{
    period: "2025 — 2026",
    topic: "React",
    description:
      "Then comes the framework which helps us to create scalable and clean application and i choose react over anything."
  ,current:true,
    },

{
    period: "2025 — 2026",
    topic: "data structures and algorithms",
    description:
      "i have then learned data structures and algorithms so that i can use them into my apllication functionaly.",
  current:false,
  },

  {
    period: "2024 — 2025",
    topic: "advance javaScript and tailwind css",
    description:
      "After that i have dig into javaScript and tailwind css so that i can add dynamics into my websites.",
  current:false,
  },
  {
    period: "2024 — 2025",
    topic: "html and css",
    description:
      "first technologies that i have learned are html and css before javascript.i started designing sites with no functionaly.",
  current:false,
  },
];

 return( 
    
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

<div className="container mx-auto px-6 realtive z-10">
{/* section header */}

<div className="max-w-3xl mb-16">

<span className="text-secondary-foreground text-sm font-medium
 tracking-wider uppercase animate-fade-in">Learning Journey</span>
<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in 
animation-delay-100 text-secondary-foreground">
    knowledge that <span className="italic font-serif font-normal text-white">
         display's outcome.</span>
         </h2>
<p className="text-muted-foreground animate-fade-in animation-delay-200">
A timeline of my learning journey. from a scared guy who thought computer 
science is not for him to learn the technologies that are the backbone of web technology.
</p>
</div>
{/* Timeline */}

<div className="relative">

<div className=" timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-500/70 via-red-500/30 to-transparent 
md:-translate-x-1/2 "/>

{/* experience Items */}
<div className="space-y-12">

{experiences.map((experience,index)=>(
<div key={index}  className="relative grid md:grid-cols-2 gap-8 animate-fade-in "
style={{animationDelay:`${(index+1)*100}ms`}}
>

{/* Timeline dot */}
<div className="absolute md:left-1/2 w-4 h-4 bg-pink-700 rounded-full -translate-x-1/2 "
>
    {experience.current &&( <span className="absolute inset-0 rounded-full bg-purple-700 animate-ping"></span>)}
</div>

{/* Content */}
<div className={` pl-8 md:pl-0  ${index%2===0 ? 
             "md:pr-16 md:text-right" 
    : "md:col-start-2 md:pl-16"  }`}>
<div className={`glass p-6 rounded-2xl border border-primary/30 
    hover:border-primary/50 transition-all duration-500`}>
    <span className="text-sm text-primary font-medium">{experience.period}</span>
    <h3 className="text-xl font-semibold mt-2">{experience.topic}</h3>
    <p className="text-sm text-muted-foreground mt-4">{experience.description}</p>
</div>

</div>
</div>

))}
</div>


</div>

</div>


    </section>
    );
}