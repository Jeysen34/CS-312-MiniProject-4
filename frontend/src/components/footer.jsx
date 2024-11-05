import React from "react";

function footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright&copy; {year} - HOW TO BLOG...</p>
      </footer>
    </div>
  );
}

export default footer;
