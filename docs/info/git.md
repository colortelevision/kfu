## Git Cheat Sheet


Here’s a summary of what each Git command does:
	•	git init – Initializes a new Git repository in the current folder.
	•	git remote add origin <repo-url> – Connects the local repository to a remote repository at <repo-url> and names it origin.
	•	git add <file-name> – Stages a specific file for commit.
	•	git add . – Stages all changed and new files in the current directory for commit.
	•	git commit -m "Your message" – Commits staged changes with a message describing the changes.
	•	git commit -am "Your message" – Stages and commits all tracked (previously added) files in one step.
	•	git commit --amend -m "New message" – Modifies the last commit’s message without changing the commit content.
	•	git push – Uploads local commits to the remote repository.
	•	git push -u origin main – Pushes the local main branch to the remote repository and sets it as the default upstream branch.
	•	git clone <repo-url> – Creates a local copy of a remote repository.
	•	git pull – Fetches the latest changes from the remote repository and merges them into the current branch.
	•	git status – Displays the current state of the working directory, showing untracked, modified, or staged files.
	•	git log – Shows a detailed commit history.
	•	git log --oneline – Displays a simplified commit history with one-line summaries of each commit.
	•	git restore --staged <file-name> – Unstages a file that was added to the staging area.
	•	cd <folder-name> – Changes the current directory to <folder-name>. Not a Git command, but useful for navigating in a terminal.

```bash
git init
git remote add origin <repo-url>
git add <file-name>
git add .
git commit -m "Your message"
git commit -am "Your message"
git commit --amend -m "New message"
git push
git push -u origin main
git clone <repo-url>
git pull
git status
git log
git log --oneline
git restore --staged <file-name>
cd <folder-name>
```
