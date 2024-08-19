File Upload Application with Progress Bar

This project is a React-based file upload application that allows users to upload up to 10 files. The application includes a progress bar that updates as files are uploaded, with each file contributing 10% to the progress. The progress bar changes color based on completion, and users can delete individual files if needed. The application also handles duplicate file detection and provides error handling through a modal dialog.

Features

1. File Upload Limit
Users can upload up to 10 files.
The application prevents uploading more than 10 files at a time. If a user attempts to upload more than 10 files, a modal dialog is displayed with an error message.
2. Progress Bar
The progress bar updates in 10% increments as files are uploaded.
The color of the progress bar changes dynamically:
Red: Progress is 30% or less.
Orange: Progress is between 31% and 70%.
Green: Progress is above 70%.
When all 10 files are uploaded, the progress bar reaches 100%, and a success message is displayed.
3. Duplicate File Detection
The application checks for duplicate file names during upload.
If a duplicate file is detected, an error message is shown, and the file is not added to the list.
4. Delete Option
Each uploaded file has a delete button beside it, allowing users to remove the file from the list.
Deleting a file decreases the progress accordingly and allows space for new uploads.
5. Error Handling with Modal Dialog
If a user tries to upload more than 10 files at once, a modal dialog appears, informing them to select only up to 10 files.
Technologies Used

React.js: The core framework used to build the application.
CSS: For styling the components, including the progress bar and modal dialog.
React Modal: A library used to create the modal dialog for error handling.

Usage

Upload Files: Click the "Choose Files" button to select up to 10 files from your local system.
View Progress: The progress bar will update as files are uploaded. The color of the progress bar will change based on the percentage completed.
Delete Files: To remove a file, click the "Delete" button beside the file name. This will also update the progress bar.
Error Handling: If you attempt to upload more than 10 files or a duplicate file, an error will be displayed.