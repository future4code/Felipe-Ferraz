var setPosts = [
    { name: "astrodev", text: " meu primeiro post" },
    { name: "felipe", text: "a vida é bela" },
    { name: "astrodev", text: "meu segundo post" },
    { name: "felipe", text: "a vida é linda" },
    { name: "astrodev", text: "meu terceiro post" },
];
function filterPost(allPosts, auth) {
    var postsAuth = allPosts.filter(function (element) { return element.name === auth; });
    return postsAuth;
}
console.log(filterPost(setPosts, "felipe"));
