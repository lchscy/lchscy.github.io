var posts=["posts/3357.html","posts/fd28.html","posts/224d.html","posts/2700.html","posts/3290.html","posts/df2a.html","posts/4963.html","posts/629f.html","posts/ab5b.html","posts/fb4c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };