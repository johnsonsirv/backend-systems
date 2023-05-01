## Building TaskTerm

See related Post on [Medium](https://medium.com/@VOkeugo/understanding-node-js-event-emitters-with-example-13eb3894249d)

TaskTerm is a simple task manager that runs on the terminal. Most developers use terminal in their day to day workflow. Imagine tracking your todos on the same terminal without having to leave your favourite interface. 

With TaskTerm users can add, modify, remove new tasks from a task list. They can mark tasks as complete or incomplete.

TaskTerm adopts a minimal client/server architecture and uses node.js event emitters under the hood.
The server will be responsible for executing operations, handling logics, saving data and sending a response to client. The client will handle processing of user input . 

The goal is to help you understand event emitters, so don't worry so much about architecture.

