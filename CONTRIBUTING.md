# Contributing Guidelines

## Adding Your Portfolio

1. **Raise an [Issue](https://github.com/Kiran1689/Awesome-Dev-Portfolios/issues/new?assignees=&labels=Portfolio+Addition&projects=&template=portfolio-addition.md&title=Add+%3Cyour-username%3E+Portfolio):**
   - Title: "Add `<your-username>`'s Portfolio" (e.g., "Add Kiran1689's Portfolio")
   - Description: Attach your portfolio screenshot. The image resolution should be **1900x900** (width x height). Copy the image URL (this link will be needed later).
   - The image URL should look like this.
     
     `https://github.com/Kiran1689/Awesome-Dev-Portfolios/assets/75929997/0c32cd40-c299-4fc6-ad1d-5d1e59bfd7a4`
   - Example :
     ![Screenshot](https://github.com/Kiran1689/Awesome-Dev-Portfolios/assets/75929997/342423b3-bc78-41b6-b507-88b44eafbecd)
   - If you need to resize your image, you can use online tools like [Image Resizer](https://imageresizer.com/). Ensure your image dimensions are 1900x900.
  
<br/>

2. **Fork and Clone the Repository:**
   - Fork this repository by clicking on the "Fork" button in the top right corner of the page.
   - Clone your forked repository to your local machine:
     ```
     git clone https://github.com/your-username/awesome-dev-portfolios.git
     ```
     Replace `your-username ` with your actual Github username.

<br/>

4. **Create Your JSON File:**
   - In the `profileData` directory, create a new file named `your-username.json` (replace "your-username" with your GitHub username).
   - Add the following content to your JSON file, updating the details accordingly:
     ```
     {
       "username": "YourGitHubUsername",
       "name": "Your Full Name",
       "image": "PasteTheCopiedImageLinkHere",
       "technologiesUsed": "List of Technologies Used",
       "livePortfolioLink": "YourLivePortfolioLink",
       "githubRepoLink": "YourGitHubRepoLink",
       "email": "YourEmailAddress",
       "linkedin": "YourLinkedInProfileLink",
       "instagram": "YourInstagramProfileLink",
       "x": "YourTwitterProfileLink"
     }
     ```

    - Example:
     ```
       {
         "username": "Kiran1689",
         "name": "Kiran Naragund",
         "image": "https://github.com/Kiran1689/Awesome-Dev-Portfolios/assets/75929997/0c32cd40-c299-4fc6-ad1d-5d1e59bfd7a4",
         "technologiesUsed": "HTML/CSS, JavaScript, ReactJS, GrapghQL, React-Reveal",
         "livePortfolioLink": "https://Kiran1689.github.io",
         "githubRepoLink": "https://github.com/Kiran1689/Kiran1689.github.io",
         "email": "kirannaragund197@gmail.com",
         "linkedin": "https://www.linkedin.com/in/kiran-a-n",
         "instagram": "https://www.instagram.com/kiran_a_n",
         "x": "https://twitter.com/kiran__a__n"
       }
     ```
     - If you don't have any one of these or don't want to add, please put "-" in the value.

<br/>
     
6. **Create a Pull Request (PR):**
   - Create a new branch for your changes.
   - Commit your changes and push them to your forked repository:
     ```
     git checkout -b add-YourGitHubUsername-portfolio
     git add .
     git commit -m "Add YourGitHubUsername's Portfolio"
     git push origin add-YourGitHubUsername-portfolio
     ```
   - Create a pull request from your forked repository to the main repository.
   - Change the PR title to: "Fix: Add YourGitHubUsername's Portfolio."
   - In the description, add "Closes #issueNumber" (replace "issueNumber" with the number of the issue you raised earlier).

<p align="center">Thank you for contributing!❤</p>
