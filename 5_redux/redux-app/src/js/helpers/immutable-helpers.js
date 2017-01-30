export const arrayToObject = arr =>
  arr.reduce((previous, current) => {
    const prev = previous;

    prev[current.id] = current;
    return prev;
  }, {});

export const stringify = number => JSON.stringify(number);

export const getComments = (comments, postId) => comments.filter(item => item.get('postId') === parseInt(postId, 10));

export const getUser = (data, postId) => {
  const post = data.posts.get(postId);

  if (post) {
    return data.users.get(stringify(post.get('userId')));
  }

  return undefined;
};

const replaceNewLines = (str = '') => str.replace(/(\r\n|\n|\r)/gm, ' ');

export const searchByFilters = (posts, filters) => {
  const userId = filters.get('userId');
  const search = filters.get('search');
  const regex = new RegExp(search.trim(), 'i');
  let filteredPosts = posts;

  if (userId) {
    filteredPosts = posts.filter(item => item.get('userId') === parseInt(userId, 10));
  }

  return filteredPosts.filter(item =>
    (replaceNewLines(item.get('body')).search(regex) > -1 || replaceNewLines(item.get('title')).search(regex) > -1));
};
