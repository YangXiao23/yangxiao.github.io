var posts=["2023/12/18/hello-world/","2023/12/19/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };