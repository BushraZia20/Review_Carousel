const data = [
    {
      image: "https://source.unsplash.com/random/200x200?sig=1",
      name: "1",
      profession: "1",
      review: "pratik",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=2",
      name: "2",
      profession: "2",
      review:
        "bushra?",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=3",
      name: "3",
      profession: "3",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam et ipsum, numquam velit perspiciatis, doloremque, suscipit modi itaque eaque libero eum quas. Facilis aliquid rerum quasi provident distinctio suscipit numquam iste eaque voluptatum molestiae? Culpa ut, perferendis saepe sapiente itaque quasi porro et placeat necessitatibus adipisci accusamus velit minus aliquid?",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=4",
      name: "4",
      profession: "4",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam et ipsum, numquam velit perspiciatis, doloremque, suscipit modi itaque eaque libero eum quas. Facilis aliquid rerum quasi provident distinctio suscipit numquam iste eaque voluptatum molestiae? Culpa ut, perferendis saepe sapiente itaque quasi porro et placeat necessitatibus adipisci accusamus velit minus aliquid?",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=5",
      name: "5",
      profession: "5",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam et ipsum, numquam velit perspiciatis, doloremque, suscipit modi itaque eaque libero eum quas. Facilis aliquid rerum quasi provident distinctio suscipit numquam iste eaque voluptatum molestiae? Culpa ut, perferendis saepe sapiente itaque quasi porro et placeat necessitatibus adipisci accusamus velit minus aliquid?",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=6",
      name: "6",
      profession: "6",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam et ipsum, numquam velit perspiciatis, doloremque, suscipit modi itaque eaque libero eum quas. Facilis aliquid rerum quasi provident distinctio suscipit numquam iste eaque voluptatum molestiae? Culpa ut, perferendis saepe sapiente itaque quasi porro et placeat necessitatibus adipisci accusamus velit minus aliquid?",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=7",
      name: "7",
      profession: "7",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam et ipsum, numquam velit perspiciatis, doloremque, suscipit modi itaque eaque libero eum quas. Facilis aliquid rerum quasi provident distinctio suscipit numquam iste eaque voluptatum molestiae? Culpa ut, perferendis saepe sapiente itaque quasi porro et placeat necessitatibus adipisci accusamus velit minus aliquid?",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=8",
      name: "8",
      profession: "8",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam et ipsum, numquam velit perspiciatis, doloremque, suscipit modi itaque eaque libero eum quas. Facilis aliquid rerum quasi provident distinctio suscipit numquam iste eaque voluptatum molestiae? Culpa ut, perferendis saepe sapiente itaque quasi porro et placeat necessitatibus adipisci accusamus velit minus aliquid?",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=9",
      name: "9",
      profession: "9",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam et ipsum, numquam velit perspiciatis, doloremque, suscipit modi itaque eaque libero eum quas. Facilis aliquid rerum quasi provident distinctio suscipit numquam iste eaque voluptatum molestiae? Culpa ut, perferendis saepe sapiente itaque quasi porro et placeat necessitatibus adipisci accusamus velit minus aliquid?",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=10",
      name: "10",
      profession: "10",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam et ipsum, numquam velit perspiciatis, doloremque, suscipit modi itaque eaque libero eum quas. Facilis aliquid rerum quasi provident distinctio suscipit numquam iste eaque voluptatum molestiae? Culpa ut, perferendis saepe sapiente itaque quasi porro et placeat necessitatibus adipisci accusamus velit minus aliquid?",
    },
  ];
  
    const imageElement = document.querySelector(".img");
    const nameElement = document.querySelector(".name");
    const professionElement = document.querySelector(".profession");
    const reviewElement = document.querySelector(".review-para");
    const rightArrow = document.getElementById("right-arrow");
    const leftArrow = document.getElementById("left-arrows");
    const surpriseMeButton = document.getElementById("surpriseMe");
  
    let currentIndex = 0;
     
    updateCarousel(currentIndex)
  
    function updateCarousel(index) {
      const item = data[index];
      imageElement.src = item.image;
      nameElement.textContent = item.name;
      professionElement.textContent = item.profession;
      reviewElement.textContent = item.review;
    }
  
    function nextItem() {
      currentIndex = (currentIndex + 1) % data.length;
      updateCarousel(currentIndex);
    }
  
    function previousItem() {
      currentIndex = (currentIndex - 1 + data.length) % data.length;
      updateCarousel(currentIndex);
    }
  
    function surpriseMe() {
      currentIndex = Math.floor(Math.random()*data.length)
      updateCarousel(currentIndex);
     
    }
  
    rightArrow.addEventListener("click", nextItem);
    leftArrow.addEventListener("click", previousItem);
    surpriseMeButton.addEventListener("click", surpriseMe);
  
  