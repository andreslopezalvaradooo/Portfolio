"use client";

import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Projects completed" },
  { num: 15, text: "Technologies I work with" },
];

const Stats = () => {
  return (
    <section className="grid grid-cols-2 md:flex gap-1 md:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center justify-start md:justify-center gap-1"
        >
          <CountUp
            end={stat.num}
            duration={5}
            delay={1}
            className="text-5xl text-outline text-transparent font-semibold transition-all duration-500"
          />

          <p className="text-base leading-snug">{stat.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
