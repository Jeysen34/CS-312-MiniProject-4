import React from "react";

// edit form
function edit() {
  const [title, setTitle] = useState("");
  const [creator_name, setCreator] = useState("");
  const [body, setBody] = useState("");

  // handle form submission
  function handleForm(event) {
    event.preventDefault();
    fetch("/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, creator_name, body }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Edit successful");
        }
      });
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <form action="/edit" method="POST">
          <input type="hidden" name="id" value="{post.id}" />
          <button typddde="submit" value="OK">
            Edit Post
          </button>
        </form>
        <div className="editPost">
          <form id="editForm" action="/edit" method="POST">
            <label for="title">Title</label>
            <input
              type="text"
              name="title"
              value="{posts.title}"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label for="CreatorName">Creator Name:</label>
            <input
              type="text"
              name="creator_name"
              value="{post.creator_name}"
              onChange={(e) => setCreator(e.target.value)}
            />
            <input
              type="date_created"
              name="date_created"
              value="{posts.date_created}"
            />
            <label for="body">Content:</label>
            <textarea
              name="body"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button type="submit" value="OK">
              Update Post
            </button>
          </form>
        </div>
      </form>
    </div>
  );
}

export default edit;
