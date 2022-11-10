var postAPI = "https://api.github.com/repos/OnionUI/Onion/releases";

var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = '# hello, markdown!',
    html      = converter.makeHtml(text);
    // console.log(html);
    document.getElementById('post-block').innerHTML = html;

// fetch(postAPI)
//     .then(function(response) {
//         return response.json();
//         // JSON.parse: json -> js types
//     })
//     .then(function(posts) {
//         var htmls = posts.map(function(post) {
//             return `<li>
//                 <h2>${post.tag_name}</h2>
//                 <p>${post.body}</p>
//             </li>`;
//         });

//         var html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;
//     })
//     .catch(function(err) {
//         console.log("co loi");
//     });

// console.log('hello world');