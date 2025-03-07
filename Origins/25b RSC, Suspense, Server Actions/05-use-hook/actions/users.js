'use server';

import fs from 'node:fs';

export async function saveUserAction(formData) {
  console.log('Executed');
  const data = fs.readFileSync('dummy-db.json', 'utf-8');
  const instructors = JSON.parse(data);
  const newInstructor = {
    id: new Date().getTime().toString(),
    name: formData.get('name'),
    title: formData.get('title'),
  };

  instructors.push(newInstructor);
  fs.writeFileSync('dummy-db.json', JSON.stringify(instructors));
}
