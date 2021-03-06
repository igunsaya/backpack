import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2a10 10 0 1 0 10 10A9.98 9.98 0 0 0 12 2zm4 11.846c0 1.538-.923 2.77-2.923 3.23v1.847h-2.154v-1.539A7.216 7.216 0 0 1 7.538 16l1.385-1.846a5.362 5.362 0 0 0 2.615.923q1.385 0 1.385-.923C12.923 12.923 8 12.615 8 9.846c0-1.692 1.077-2.77 2.923-3.077V5.077h2.154v1.692A4.763 4.763 0 0 1 16 8.154l-1.692 1.538a3.24 3.24 0 0 0-2-.769c-.77 0-1.231.154-1.231.77 0 1.23 4.923 1.23 4.923 4.153z" /></svg>);