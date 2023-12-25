var posts=["2023/12/26/ElasticSearch/","2023/12/20/Mysql/","2023/12/18/hello-world/","2023/12/20/kafka/","2023/12/19/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };