import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Mail } from "lucide-react";
import posterImage from "@/assets/madras-engineering-poster.jpg";

const courses = [
  {
    id: "cse",
    title: "B.E. in Computer Science & Engineering",
    description: "Design, develop, and lead with powerful computing skills to drive innovation in the digital world.",
    tag: "CSE",
    color: "bg-green-500",
  },
  {
    id: "aids",
    title: "B.Tech. in Artificial Intelligence & Data Science",
    description: "Master AI, Machine Learning & Big Data to solve real-world problems with intelligent solutions.",
    tag: "AIDS",
    color: "bg-purple-600",
  },
  {
    id: "aiml",
    title: "B.E. in Computer Science & Engineering (AI & ML)",
    description: "Dive deep into AI & Machine Learning technologies to build smart systems & future-ready applications.",
    tag: "AIML",
    color: "bg-green-400",
  },
  {
    id: "it",
    title: "B.Tech. in Information Technology (IT)",
    description: "Ace Computing, Programming & System Design to build innovative software & technology solutions.",
    tag: "IT",
    color: "bg-blue-500",
  },
];

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const handleChat = (courseId: string) => {
    setSelectedCourse(courseId);
    window.open(`https://wa.me/917002080020?text=I'm interested in ${courses.find(c => c.id === courseId)?.title}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-50 to-blue-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-4">
                Your Tech Journey Begins @ Madras Engineering College
              </h1>
              <p className="text-lg md:text-xl text-blue-700 mb-6">
                India's 1st Engineering College Specialising in IT, Computer Science, Data Science, 
                Artificial Intelligence, Machine Learning, Cyber Security & Business Systems
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-foreground">
                  <Phone className="w-5 h-5" />
                  <span>+91 7002080020</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>Chennai, India</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Mail className="w-5 h-5" />
                  <span>TNEA Code: 1203</span>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <img 
                src={posterImage} 
                alt="Madras Engineering College Poster" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Course Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card 
                key={course.id} 
                className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:scale-105"
                onClick={() => setSelectedCourse(course.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground flex-1">
                    {course.title}
                  </h3>
                  <span className={`${course.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {course.tag}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  {course.description}
                </p>
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChat(course.id);
                  }}
                  className="w-full"
                  variant="default"
                >
                  💬 Let's Chat
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-muted py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.open('tel:+917002080020')}
              className="gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://wa.me/917002080020')}
              className="gap-2"
            >
              💬 WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
