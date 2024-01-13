document.addEventListener('DOMContentLoaded', function () {
    const blogPostsContainer = document.getElementById('blog-posts');
  
    
    const blogPosts = [
      { title: 'Chelsea FC Transfer Update', content: 'Oshimen to Chelsea....', href: 'https://chelseanews.com', buttonText: 'Visit Chelsea News' },
      { title: 'TalkSport News', content: 'Get the latest Sports Update.', href: 'https://talksport.com/football', buttonText: 'Visit Talksport' },
      { title: 'SkySport News', content: 'Transfer Center.', href: 'https://www.skysports.com/transfer-centre', buttonText: 'Visit SkySports' },
    ];
  
    
    function renderBlogPosts() {
      blogPostsContainer.innerHTML = '';
      blogPosts.forEach(post => {
        const article = document.createElement('article');
        const title = document.createElement('h2');
        const content = document.createElement('p');
        const button = document.createElement('button');
  
        title.textContent = post.title;
        content.textContent = post.content;
        button.textContent = post.buttonText;
  
        if (post.href) {
          button.addEventListener('click', function () {
            window.location.href = post.href;
          });
        }
  
        article.appendChild(title);
        article.appendChild(content);
        article.appendChild(button);
        blogPostsContainer.appendChild(article);
      });
    }
  
    
    renderBlogPosts();
  });
  