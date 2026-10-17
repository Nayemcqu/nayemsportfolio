import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

export function About(){

const highlights=[

{
  icon: Code2,
  title: "Clean Code",
  description:
    "Writing clean, maintainable, and reusable code to build reliable and scalable applications.",
},
{
  icon: Rocket,
  title: "Performance",
  description:
    "Building fast, responsive, and optimized web applications for a smooth user experience.",
},
{
  icon: Users,
  title: "Collaboration",
  description:
    "Turning ideas into practical solutions through clear communication, feedback, and teamwork.",
},
{
  icon: Lightbulb,
  title: "Continuous Learning",
  description:
    "Exploring new technologies and improving my skills to build better, more effective software.",
},

]


    return(
 <section id="About" className="py-32 relative overflow-hidden">
<div className="container mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center"> 
    {/*Left column */}
<div className=" space-y-8 ">
  <div className="animate-fade-in">
    
<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase"> About Me</span>
</div>

<h2 className="text-4xl md:text-5xl font-bold animate-fade-in animation-delay-100 text-secondary-foreground leading-tight">
  From frontend to backend,
  <span className="text-foreground font-serif italic font-normal">
    {" "}building with purpose.
  </span>
</h2>

<div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
   
<p>
  I'm Nayem Khan, a passionate full-stack developer who enjoys
  building modern, responsive, and user-friendly web applications.
  I work with technologies like React, Next.js, Node.js, JavaScript,
  and TypeScript to turn ideas into practical digital experiences.
</p>

<p>
  I enjoy developing everything from interactive frontend
  interfaces to full-stack applications with REST APIs,
  database integration, authentication, and payment processing.
  I focus on writing clean, maintainable code and creating
  visually appealing interfaces with Tailwind CSS.
</p>

<p>
  When I'm not coding, I'm exploring new technologies,
  improving my development skills, and building projects
  that challenge me to become a better software engineer.
</p>

</div>

<div className="glass rounded-2xl p-6 animate-fade-in animation-delay-300">
 <p className="text-lg font-medium italic text-foreground">
      "I love creating  websites that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
    </p>   
</div>
</div>

{/* Right column */}
<div className="grid md:grid-cols-2 gap-6">
{highlights.map((item,indx)=>(
    <div key={indx} className="glass p-6 rounded-2xl group animate-fade-in space-y-1" 
    style={{animationDelay:`${(indx+1)*100} ms` }}>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20">
 <item.icon className="w-6 h-6 text-primary"/> 
        </div>
   <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3> 
   <p className="text-sm text-muted-foreground">{item.description}</p>
    </div>
))}

</div>


</div>
</div>

    </section>
    
);
}