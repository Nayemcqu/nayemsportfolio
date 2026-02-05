import { Mail,Phone,MapPin, Send,CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../components/Button";
import { useState,useRef } from "react";
import emailjs from "@emailjs/browser"
export function Contact(){
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nayem178548@gmail.com",
    href: "mailto:nayem178548@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0452269152",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sydney, Australia",
    href: "#",
  },
];
const nameData=useRef();
const emailData=useRef();
const messageData=useRef();
const [isSubmitting,setIsSubmitting]=useState({
  type:null,
  message:""
});
const [isLoading,setIsLoading]=useState(false);


async function handleSubmit (e){
  e.preventDefault();
const data = {
  name: nameData.current.value,
  email: emailData.current.value,
  message: messageData.current.value,
};
setIsLoading(true);
setIsSubmitting({type:null,message:null});
try{
const serviceId=import.meta.env.VITE_EmailJs_Service_Id;
const templateId=import.meta.env.VITE_EmailJs_Template_Id;
const publicKey=import.meta.env.VITE_EmailJs_Public_key;

if(!serviceId || !templateId || !publicKey){
  throw new Error("Emailjs configuration is missing. please check your evironment variables");
}
await emailjs.send(serviceId,templateId,{
name:data.name,
email:data.email,
message:data.message

},publicKey);

setIsSubmitting({
  type:"success",
  message:"Message sent successfully I'll get back to you soon"
});
nameData.current.value="";
emailData.current.value="";
messageData.current.value="";

}catch(err){
console.error("emailjs error",err ?? "");
setIsSubmitting({
  type:"error",
  message:err.text ||"failed to send message.Please try again later."
});

}
finally{
  setIsLoading(false);
}

}



    return( 
    
    <section id="contact" className="py-32 relative overflow-hidden">
    
    <div className="container mx-auto px-6 relative z-10 ">     
        
    <div className="max-w-3xl text-center mx-auto py-4 mb-16">
        <span className="capitalize text-primary tracking-wider font-medium"> Contact me to Hire</span>
        
<h2 className="text-4xl md:text-5xl font-bold mt-4 mb- animate-fade-in ">Looking for a 
     <span className="font-serif italic font-normal text-white"> workaholic fresher?</span></h2>

<p className="text-muted-foreground animate-fade-in animation-delay-200 mt-8">
are you looking for somebody new yet know's how to solve problem like a  pro.
can be valuable for the team and someone who is happy to work in any situation! 
you are in the right profile.
</p>
        </div> 

<div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto ">
<div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
<form className="space-y-6" onSubmit={handleSubmit}>

<div>
<label htmlFor="name" className="block text-sm font-medium mb-2"> Name</label>
<input
 id="name" 
 type="text" 
 ref={nameData}
 required
 placeholder="Enter your Name Please"
 className="w-full px-4 py-3 bg-surface rounded-xl border
 border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
</div>

<div>
<label htmlFor="email" className="block text-sm font-medium mb-2"> Email</label>
<input id="email"
ref={emailData}

required
placeholder="Enter Your Email please"
className="w-full px-4 py-3 bg-surface rounded-xl border
 border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
</div>

<div>
<label htmlFor="message" className="block text-sm font-medium mb-2" > Message</label>
<textarea 
ref={messageData}
rows={4}
id="message"
required
placeholder="Enter you Query Here"
className="w-full px-4 py-3 bg-surface rounded-xl border
 border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"/>
</div>
<div>

</div>
<Button className=" w-full flex justify-center space-x-4 " type="submit" disabled={isLoading} >
{ isLoading ?(
<>
Sending...
</>
):(
  <>
  <p>Send Message</p>

<Send/>
  </>
)}

</Button>
    {isSubmitting.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       isSubmitting.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {isSubmitting.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{isSubmitting.message}</p>
                </div>
              )}


</form>

</div>

 {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>


</div>

    
    
    </section>

  

);
}