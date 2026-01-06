var posts=["posts/3357.html","posts/2700.html","posts/fd28.html","posts/df2a.html","posts/fb4c.html","posts/ab5b.html","posts/94a6.html","posts/3290.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };