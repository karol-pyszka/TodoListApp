# Todo List App

## Overview
The Todo List App is a simple task management application where users can add, edit, filter and delete tasks. Due dates set to today will be displayed in red to grab the user's attention. Additionally, the app provides notifications for tasks due tomorrow.

## Features
- Add tasks: Users can add new tasks to the list.
- Edit tasks: Users can edit existing tasks.
- Delete tasks: Users can delete tasks from the list.
- Filter tasks: User can filter tasks based on due date.
- Highlight today's tasks: Due dates set to today are displayed in red.
- Notifications: Users receive notifications for tasks due tomorrow.

## Screenshots

*Screenshot 1: Notification if user have tasks due tomorrow*

![Screenshot 1](https://github.com/karol-pyszka/TodoListApp/assets/59529749/41cf4c17-7cbd-4002-aaf2-445978f9633f)

*Screenshot 2: Main task list and date due today displayed in red*

![Screenshot 2](https://github.com/karol-pyszka/TodoListApp/assets/59529749/9c50936b-700f-40b7-8eee-49568e736866)

*Screenshot 3: Filtered tasks*

![Screenshot 3](https://github.com/karol-pyszka/TodoListApp/assets/59529749/e181a728-0e9f-4b2f-9a5b-f499031be6e1)

*Screenshot 4: Editing a task*

![Screenshot 4](https://github.com/karol-pyszka/TodoListApp/assets/59529749/0c5530d7-a029-4e66-bc43-691b4342fdba)

*Screenshot 5: Deleting a task*

![Screenshot 5](https://github.com/karol-pyszka/TodoListApp/assets/59529749/aaaecf02-7678-46ff-92d2-162d0fe705f3)

## Getting Started
To run the Todo List App, follow these steps:

1. **Download the Build**
    - Download the TodoListAppBuild folder from the repository.

2. **Run the Application**
    - Navigate to the TodoListAppBuild folder.
    - Run TodoListApp.exe.

3. **Access the Application**
    - Open a web browser and go to [https://localhost:5001/](https://localhost:5001/).

## Development

To develop the Todo List App, follow these steps:

1. **Clone repository**
    - Open your terminal or command prompt.
    - Use the `git clone` command followed by the repository URL to clone the repository to your local machine.

2. **Copy all files to TodoListApp Folder except .sln file**
    - Navigate to the cloned repository directory.
    - Copy all files and directories to a new folder named TodoListApp, excluding the `.sln` file.
    - This ensures that you have all the necessary files for the Todo List App, ready for development.

3. **Restore dependencies**
    - Run `dotnet restore` in the root directory of your project (TodoListApp).
    - This command ensures that all necessary dependencies are downloaded and restored to your local machine.

4. **Open TodoListApp in Visual Studio**
    - Launch Visual Studio IDE.
    - Select "Open a project or solution" from the start window.
    - Navigate to the TodoListApp folder and open it as a project.

5. **Start development**

## License
This project is licensed under the [MIT License](LICENSE).
