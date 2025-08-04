
import React, { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (hovered) {
      let start = 0;
      const step = () => {
        start += Math.max(1, Math.round(skill.level / 20));
        if (start < skill.level) {
          setProgress(start);
          setTimeout(step, 15);
        } else {
          setProgress(skill.level);
        }
      };
      step();
    } else {
      setProgress(0);
    }
  }, [hovered, skill.level]);

  return (
    <div
      className="glass-effect p-6 rounded-2xl card-3d hover:scale-105 transition-all duration-300 relative cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mr-4 text-white font-bold animate-glow`}>
          {skill.icon}
        </div>
        <h4 className="text-xl font-bold text-white">{skill.name}</h4>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 mb-2 relative overflow-visible">
        <div
          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-700 ease-out`}
          style={{ width: hovered ? `${progress}%` : '0%' }}
        ></div>
        {hovered && (
          <span className="absolute left-1/2 top-[-28px] -translate-x-1/2 text-xs font-bold text-white bg-gray-800 px-2 py-1 rounded shadow-lg animate-fade-in">
            {progress}%
          </span>
        )}
      </div>
      <p className="text-gray-300 text-sm">{skill.level >= 85 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}</p>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default SkillCard;
