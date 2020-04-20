type post = {
  name: string;
  text: string;
};

const setPosts: post[] = [
  { name: "astrodev", text: " meu primeiro post" },
  { name: "felipe", text: "a vida é bela" },
  { name: "astrodev", text: "meu segundo post" },
  { name: "felipe", text: "a vida é linda" },
  { name: "astrodev", text: "meu terceiro post" },
];

function filterPost(allPosts: post[], auth: string): object[] {
  const postsAuth = allPosts.filter((element) => element.name === auth);
  return postsAuth;
}

console.log(filterPost(setPosts, "felipe"));

// tá aparecendo um erro que não sei como evita-lo. Mas a função funciona
