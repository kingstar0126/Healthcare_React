# fullstack-candidate-testing

## Instructions


1. Clone this repo. Then clone the main branch and use the following naming convention for the new branch: **firstname-lastname-YYYY-MM-DD**. If your name is John Doe, and today's date is 2020-11-17, then the new branch should be called **john-doe-2020-11-17**.
2. The repo has 2 folders. **/data** and **/screenshots**.
3. In the **/data** folder you will find 2 .json files. This is the data you will use to build the React app. You have to build a simple REST API to consume the data in the React app.
4. In the **/screenshots** folder you will find what you are required to build for this test. 
5. We strongly recommend you use Next.js and TailwindCSS for this test, since these are the frameworks we are using to build our own apps, but if you're not familiar with them, then create-react-app or Bootstrap 4 or 5 are fine. 
6. The search input on top of the page should work. The search index should be built using the **/data/jobs.json** file.
7. Sort by options on top of the page should sort in 3 states per each filter: ascending, descending or remove the sorting operation.
8. Sort by options should work simultaneously with other sort by options and with the search input if the user is searching for something. This means that the user could sort for example by Location:asc, Department:asc while searching for a Nurse in California.
9. Ensure your code can work with unstable internet connection (see in pages/api/jobs.js)
10. Implement unit tests for API at the server-side

## After you're done:
1. Push you branch
2. Deploy your branch to a public url. We recommend you use Vercel, Netlify or AWS S3, but you're free to use any other service as long as the url is publicly accessible. 
3. Include a README with the installation instructions and with the publicly accessible url. 
4. Don't forget to let us know you're done to review your test.


## The fine print:
- Please keep it simple. We don't like complicated setups.
- Try to replicate the original designs as much as possible.
- Functional components only. 
- For interactions in the React app you're free to use reducers, individual component state or any other library, but again, please keep it simple.
- Typescript use is OK but not required.
- SCSS use is not required. It is OK to include compiled CSS files or CDN urls.
- This test shouldn't take you more than 4-6 hours to complete.
- After the invitation is sent, your acccess rights to this repo will last 48 hours.  

## Important

The screenshot files are for reference only. The React app you are required to build has to look like these screenshots, but we don't expect your views to be an exact clone of every single one of them. All the components in the screenshot were built in plain .jsx with Tailwind CSS, with almost no custom CSS and no additional design assets (images, svg, logos).

Good luck!
