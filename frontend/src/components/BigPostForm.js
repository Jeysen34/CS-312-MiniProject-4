import React, { useState } from "react";

// posts form
function BigPostForm() {
  const [title, setTitle] = useState("");
  const [creator_name, setCreator] = useState("");
  const [body, setBody] = useState("");

  // handle form submission
  function handleForm(event) {
    event.preventDefault();
    fetch("/post", {
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
          alert("Post successful");
        }
      });
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <h1>Create Post</h1>
          <div class="createPost">
            <form action="/submit" method="POST">
              <label for="title">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label for="creator_name">Creator Name:</label>
              <input
                type="text"
                name="creator_name"
                placeholder="Creator Name"
                onChange={(e) => setCreator(e.target.value)}
              />
              <label for="date_created">Date:</label>
              <input type="date_created" name="date_created" />
              <label for="body">Content:</label>
              <textarea
                id="textRezise"
                name="body"
                placeholder="body"
                onChange={(e) => setBody(e.target.value)}
              >
                {" "}
              </textarea>
              <button type="submit" value="OK">
                Create Post
              </button>
            </form>
          </div>
          <hr />
          <h1>Posts</h1>
          <div class="post">
            <div class="post-content">
              <form action="/delete" method="POST">
                <input type="hidden" name="id" value="<%= data.id %>" />
                <button type="submit" value="OK">
                  Delete Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BigPostForm;
