import { form, link } from "./utlis/constant.js";
import { getReleaseApi, isValidGitRepo, isValidURL } from "./utlis/helper.js";

form.addEventListener('submit', async event => {
    // prevent another submit
    // console.log('hello');
    event.preventDefault();

    // Get source and clear link
    const source = link.value.trim();
    link.value = '';
    link.focus();

    // var githubLink = source.join('');
    // document.getElementById('github-repo').innerHTML = githubLink;

    // console.log('hello');
    if (isValidGitRepo(source)) {
        // alert('ok');
        var postAPI = getReleaseApi(source);
        fetch(postAPI)
            .then(function (response) {
                return response.json();
                // JSON.parse: json -> js types
            })
            .then(function (posts) {
                var htmls = posts.map(function (post) {
                    return `<section class="d-flex">
                                <div class="box">
                                    <div class="box-body">
                                        <h2>${post.tag_name}</h2>
                                        <p>${post.body}</p>
                                    </div>
                                </div>
                            </section>`;
                });

                var html = htmls.join('');
                document.getElementById('post-block').innerHTML = html;
            })
            .catch(function (err) {
                console.log("co loi");
            });
    }
    else {
        alert('wrong link');
    }
});

console.log('hello');