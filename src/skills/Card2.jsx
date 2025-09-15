import React from 'react'

export default function Card2({ name, description, icon, level = "Intermediate" }) {
    const getLevelColor = (level) => {
        switch (level) {
          case "Beginner":
            return "text-yellow-400";
          case "Intermediate":
            return "text-blue-400";
          case "Advanced":
            return "text-purple-400";
          case "Expert":
            return "text-green-400";
          default:
            return "text-blue-400";
        }
      };
    return (
        <div className=" bg-amber-500 group relative overflow-hidden bg-skill-card border-skill-card-border shadow-card transition-all duration-300 hover:shadow-card-hover hover:bg-skill-card-hover hover:scale-[1.02] hover:-translate-y-1">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
          
          <div className="relative p-6 space-y-4">
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-primary p-0.5">
              <div className="flex items-center justify-center w-full h-full rounded-xl bg-skill-card">
                <img 
                  src={icon} 
                  alt={`${name} icon`} 
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
    
            {/* Skill Name */}
            <h3 className="text-xl font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
    
            {/* Level Badge */}
            <div className="flex justify-center">
              <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getLevelColor(level)} border-current/20 bg-current/10`}>
                {level}
              </span>
            </div>
    
            {/* Description */}
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              {description}
            </p>
    
            {/* Animated border on hover */}
            <div className="absolute inset-0 rounded-lg border border-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>
      );
}