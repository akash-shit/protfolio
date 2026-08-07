export const StatsSection = () => {
  const stats = [
    { number: "400+", label: "LeetCode Problems Solved" },
    { number: "100+", label: "GeeksforGeeks Problems Solved" },
    { number: "10+", label: "Coding Contests Participated" },
    { number: "2×", label: "Smart India Hackathon - Round 2" },
    { number: "1st", label: "Manual Robotics Competition Winner" },
  ];

  return (
    <section id="stats" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Achievements</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-primary/20 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]"
            >
              <h3 className="text-4xl font-bold text-primary">
                {stat.number}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};