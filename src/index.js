import { createHeader } from "./html/header.js";
import { createLeftContainer } from "./html/leftContainer.js";
import { collapseSidebar } from "./functions/collapse.js";
import { createTodoContainer } from "./html/todoContainer.js";


createHeader();
createLeftContainer();
createTodoContainer();
collapseSidebar();