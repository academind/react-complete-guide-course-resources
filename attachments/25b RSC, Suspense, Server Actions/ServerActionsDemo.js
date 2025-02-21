import fs from 'node:fs';

export default function ServerActionsDemo() {
  async function saveUserAction(formData) {
    'use server';
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

  return (
    <div className='rsc'>
      <h2>Server Actions</h2>
      <p>
        A "Form Action" converted to a "Server Action" via{' '}
        <strong>"use server"</strong>.
      </p>
      <p>Can be defined in a server component or a separate file.</p>
      <p>Can be called from inside server component or client component.</p>
      <form action={saveUserAction}>
        <p>
          <label htmlFor='name'>User name</label>
          <input type='text' id='name' name='name' required />
        </p>
        <p>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' name='title' required />
        </p>
        <p>
          <button>Save User</button>
        </p>
      </form>
    </div>
  );
}
