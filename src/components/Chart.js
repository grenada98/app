import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    tech: 'HTML',
    fullMark: 8,
  },
  {
    tech: 'CSS',
    fullMark: 8,
  },
  {
    tech: 'JavaScript',
    fullMark: 5,
  },
  {
    tech: 'SASS',
    fullMark: 6,
  },
  {
    tech: 'ReactJS',
    fullMark: 4,
  }
];

export class Chart extends PureComponent {
  render() {
    return (
        <div className="category-about">
            <div className="category-about__title">Software skills</div>
            <div className="category-about__graph">
                <div className="graph-wrapper">
                    <ResponsiveContainer width="100%" height="100%" >
                        <RadarChart 
                            cx="50%" 
                            cy="50%" 
                            outerRadius="70%" 
                            data={data}
                            >
                        <PolarGrid stroke="black" />
                        <PolarAngleAxis dataKey="tech" stroke="black" />
                        <PolarRadiusAxis stroke="black" domain={[0, 10]}  
                        tickCount = {10}
                            />
                        <Radar name="Mike" dataKey="fullMark" stroke="black" fill="#8884d8" fillOpacity={0.5}  />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
  }
}