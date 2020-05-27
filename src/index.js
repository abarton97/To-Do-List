import { createHeader } from "./html/header.js";
import { createLeftContainer } from "./html/leftContainer.js";
import { collapseSidebar } from "./functions/collapse.js";
import { addButton } from "./functions/addButton.js";
import { addCell } from "./functions/addCell.js";
import { newTodo } from "./html/newTodo.js";
import { createPage } from "./html/createPage.js";
import { viewPage } from "./functions/viewPage.js";
import { bookmarkme } from "./functions/bookmark.js";

createHeader();
createLeftContainer();
createPage();
newTodo();
collapseSidebar();
addButton();
addCell();
viewPage();
bookmarkme();