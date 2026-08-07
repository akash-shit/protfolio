import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Engineer & Web Developer 
            </h3>

            <p className="text-muted-foreground">
                I am an undergraduate B.Tech student in Electronics and Communication
                Engineering at Techno Main Salt Lake (2023-2027), passionate about software
                development and building modern web applications.
            </p>

            <p className="text-muted-foreground">
                I enjoy solving programming problems, exploring new technologies, and
                creating responsive, user-friendly applications. I continuously work on
                improving my skills in web development, problem-solving, and software
                engineering to build impactful solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover hover:border-primary hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and scalable web applications using React, Tailwind CSS, Node.js, Express.js, and MongoDB.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover hover:border-primary hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Practicing data structures and algorithms to improve logical thinking and develop efficient solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover hover:border-primary hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Electronics & Communication</h4>
                  <p className="text-muted-foreground">
                    Connecting hardware with software by building IoT solutions using sensors, microcontrollers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};