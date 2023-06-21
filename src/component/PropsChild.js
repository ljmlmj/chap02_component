import React from 'react';

// 2. 배열 형태로 전달된 경우
export default function PropsChild({salaries}){
    const [oh, park, jung] = salaries;
    let maxSalary = 0;

    // 최대값
    for (let key in salaries){
        if(salaries[key] > maxSalary){
            maxSalary = salaries[key];
        }
    }

    return (
        <div>
            <h2>{oh}</h2>
            <h2>{park}</h2>
            <h2>{jung}</h2>
            <h2>최대값:{maxSalary}</h2>
        </div>
    );
}