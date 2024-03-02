const allPost= async () =>{
    const response= await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data=await response.json();
    const loadPost=data.posts;
    loadPost.forEach((post)=>{
        console.log(post);
    })
    
   


}


allPost('');