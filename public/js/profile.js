const newBlogpost = async (event) => {
  event.preventDefault();

  const blog_title = document.querySelector('#blog_title').value.trim();
  const blog_post = document.querySelector('#blog_post').value.trim();

  let arrStep = steps.split(',')
  console.log(arrStep)
  let arrInge = blog_post.split(',')
  console.log(arrInge)

  if (blog_title && blog_post) {
    const response = await fetch(`/api/blogpost`, {
      method: 'POST',
      body: JSON.stringify({ blog_title, blog_post}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      console.log(response);
      alert('Failed to create project');
    }
  }
};


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogpost/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

const newPost = () => {
  let form = document.querySelector('.form-container');
  let postList = document.querySelector('.blogpost-list');
  let postBtn = document.querySelector('#newBlogpostBtn');

  postList.classList.add('hidden');
  form.classList.remove("hidden");
  postBtn.classList.add('hidden');
}

const cancelPost = () => {
  let form = document.querySelector('.form-container');
  let postList = document.querySelector('.blogpost-list');
  let postBtn = document.querySelector('#newBlogpostBtn');

  postList.classList.remove('hidden');
  form.classList.add("hidden");
  postBtn.classList.remove('hidden')
}

document
  .querySelector('.new-blogpost-form')
  .addEventListener('submit', newBlogpost);

document
  .querySelector('.blogpost-list')
  .addEventListener('click', delButtonHandler);

  document.querySelector('#newBlogpostBtn').addEventListener('click', newPost);

  document.querySelector('#cancel-form').addEventListener('click', cancelPost);

