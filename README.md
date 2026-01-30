# React - The Complete Guide Course Resources

This repository provides access to code files, code snapshots, slides & other resources that are used or provided by the [React - The Complete Guide](https://acad.link/reactjs) course.

If you're facing any issues with the code, please post in the course Q&A section.

# Repository Content

- **Code Snapshots:** All code snapshots (starting snapshots, intermediate snapshots, finished snapshots) for the various course sections can be found in the [/code](/code/) folder.
- **Lecture Attachments:** Any standalone code files or other attachments that are mentioned in course lectures (and attached to those lectures) are stored in the [/attachments](/attachments/) folder.
- **Other Resources:** Other resources (like the course slides) can be found in the [/other](/other/) folder.

The **Code Snapshots** and **Lecture Attachments** folders contain one subfolder per course section - this allows you to easily access the resources for a specific course section.

# How To Use Code Snapshots

Code snapshots are primarily provided to allow you to compare your code to mine. The snapshots are taken directly from the course recordings and therefore reflect my code you see in the videos.

Of course, you can also try running those code snapshots on your machine. You'll need to run `npm install` in the individual snapshot folders, followed by `npm run dev` to start the development server - just as shown in the course.

# Anton's Experiments

This repository includes experimental implementations by [anton-karlovskiy](https://github.com/anton-karlovskiy) that explore best practices and improvements to the course code.

**Branch:** `anton-experiment`

## 10 Advanced State Management with Context useReducer -> 09-dispatching-actions-finished

This experiment focuses on React Context best practices and TypeScript migration:

- Porting the shopping-cart-context from JavaScript to TypeScript
- Implementing React Context following best practices (as outlined in [Kent C. Dodds' guide](https://kentcdodds.com/blog/how-to-use-react-context-effectively))
- Refactoring the context implementation with improved naming and structure

**Related Links:**
- [GitHub Pull Request #84](https://github.com/academind/react-complete-guide-course-resources/pull/84)
- [Live Demo (Vercel)](https://react-complete-guide-course-resources-10-9.vercel.app/)
