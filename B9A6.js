const allPost= async ()=>{
    const response= await fetch ('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data=await response.json();
    const postItem = data.posts;
    // console.log(post);
    displayPost(postItem)
}

const displayPost= postItem =>{
//   console.log(post);

postItem.forEach(post=>{
    // console.log(post);

    const postContainer=document.getElementById('card-container')

    const postCard=document.createElement('div');
    postCard.classList=`rounded-xl p-5`;

    postCard.innerHTML=`
          
    <div class="bg-[#F3F3F5] flex gap-10 p-5 rounded-lg">
            <div>

              <div class="avatar online">
                <div class="w-20 h-20 rounded-full">
                  <img src="${post.image}" />
                </div>
            </div>

          </div>

          <div>
            <div class="flex gap-4 text-[#12132DCC] font-medium text-[16px] py-4">
              <p>${post.category}</p>
              <p>${post.author.name}</p>
            </div>
            <h2 class="text-[#12132D] text-[20px] font-bold py-4">${post.title}</h2>
            <p class="text-[#12132D99] text-[16px]">${post.description}</p>
            
            <hr class="border-dashed py-3">
           <div class="flex justify-between">
            <div class="flex gap-8">

              <div class="flex gap-4">
                <div><img src="./images/tabler-icon-message-2.png" alt=""></div>
              <p>${post.comment_count}</p>
              </div>

              <div class="flex gap-4">
                <div><img src="./images/tabler-icon-eye.png" alt=""></div>
                <p>${post.view_count}</p>
              </div>
              
              <div class="flex gap-4">
              <div><img src="./images/tabler-icon-clock-hour-9.png" alt=""></div>
              <p>${post.posted_time}</p>
              </div>


            </div>

            <div>
              <button><img src="./images/email 1.png" alt=""></button>
            </div>
           </div>

          </div>

        </div>
   
    
    `
    postContainer.appendChild(postCard)
})
}



allPost()

// latest post

const latestPost= async ()=>{
    const response= await fetch ('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data=await response.json();
    const latestPostItem = data;
    displayLatestPost(latestPostItem)
}


const displayLatestPost= latestPostItem =>{
  //   console.log(post);
  
  latestPostItem.forEach(post=>{
      // console.log(post);
  
      const postContainer2=document.getElementById('latest-card')
  
      const postCard2=document.createElement('div');
      postCard2.classList=`flex gap-4`;
  
      postCard2.innerHTML=`
      
      <div class="card w-full bg-base-100 shadow-xl p-5">
      <figure class="px-10 pt-10">
        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
      </figure>
       <div class="flex item-center gap-3 py-3">
        <div>
          <img src="./images/date.png" alt="">
         </div>
         <p class="text-[16px] text-[#12132D99]">29 January 2024</p>
       </div>
     
       <h2 class="text-[#12132D] text-[18px] font-extrabold py-2">What will a mars habitat force that impact in our daily life!!!</h2>
       <p class="text-[16px] text-[#12132D99] py-2">Yes, you can run unit tests and view the results directly within the app. </p>

       <div class="flex item-center">
        <div><img src="./images/flag.png" alt=""></div>
       <div>
        <p class="text-[#12132D] font-bold text-[16px]">Cameron Williamson</p>
        <p class="text-[#12132D] text-[18px] font-extrabold">Unknown</p>
       </div>
       </div>
    </div>
      `
    postContainer2.append(postCard2)
  })
}
latestPost()


