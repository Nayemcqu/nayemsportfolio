import { ArrowUpRight, Github } from "lucide-react";

export function Projects(){
const projects=[{
     title: "Amazon Clone",
    description:
      "A Clone of The Amazon Website.Which shows Product List, Cart,Checkout and the HomePage.",
    image: "/projects/Project1.JPG",
    tags: ["React", "JavaScript", "Redux","Axios","React Router"],
    link: "https://react-amazon-clone-flame.vercel.app/",
    github: "https://github.com/Nayemcqu/react-amazon-clone",
  },
  {
    title: "Weather App",
    description:
      "A full-featured Weather App Where you get the current  weather  details based on the location and also get the forecast of the following day.users can also search any location weather.",
    image: "/projects/Project2.JPG",
    tags: ["React js", "Open-Weather", "React-Query", "Tailwind"],
    link: "https://react-weather-app-sigma-umber.vercel.app/",
    github: "https://github.com/Nayemcqu/React-Weather-App",
  },
  {
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
];

    return (
    <section id="projects" className="py-32 relatie overflow-hidden">

 {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
<div className="text-center mx-auto max-w-3xl mb-16">
    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"> Featured Work </span>
    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 animate-fade-in animation-delay-100">Project that 
    <span className="font-serif italic font-normal text-white" > make an impact. </span>
   </h2>
<p className="text-muted-foreground animate-fade-in animation-delay-200">A Selection of my recent,work, from complex web application
     to innovative tools that solve-real world problems.</p>

    </div>

{/* projects Grid  */}
<div className="grid md:grid-cols-2 gap-8">
{projects.map((project,index)=>(
<div key={index}  className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
style={{
  animationDelay:`${(index+1)*100}ms`  
}}
>
{/* Image */}
<div className="relative overflow-hidden aspect-video">
<img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
<div className="absoulute inset-0 bg-gradient-to-b from-card via-card/50 opacity-50 "/>
{/* overlay links */}
<div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
 <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground 
 transition-all ">
    <ArrowUpRight className="w-5 h-5"/>
    </a>   
    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground 
 transition-all ">
        <Github className="w-5 h-5"/>
    </a>
</div>

</div>

{/*content */}
<div className="p-6 space-y-4 "> 
<div className="flex items-start justify-between">
<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
<ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1
 group-hover:text-primary group-hover:translate-y-1 transition-all"/>
</div>   
<p className="text-muted-foreground text-sm">{project.description}</p> 
<div className="flex flex-wrap gap-2 ">  
    {project.tags.map((tag,index)=>(
        <span key={index} className="px-4 py-1 rounded-full bg-surface text-xs font-medium border
         border-border/50 text-muted-foreground hover:border-primary/50 transition-all duration-300">{tag}</span>
    ))}
</div>
</div>

</div>

))}

</div >
{/* view all CTA */}
<div className="flex justify-center mt-12 animate-fade-in animation-delay-500">
<button className="flex gap-2 border rounded-full border-green-300 py-4 px-4 cursor-pointer text-xl text-foreground 
hover:bg-primary/50 hover:text-primary-foreground  transition-all">
View All Projects <ArrowUpRight className="ml-2"/>    
</button>
</div>
      </div>





    </section>);
}