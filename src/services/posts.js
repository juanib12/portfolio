// src/services/blogService.js

export const getPosts = async () => {
  return fetch("./posts.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    });
};
 
export const createPost = async (title, content, slug) => {
  // const { data, error } = await supabase.from('posts').insert([{ title, content, slug }]);
  // if (error) throw error;
  // return data;
};

export const updatePost = async (id, title, content) => {
  // const { data, error } = await supabase.from('posts').update({ title, content }).eq('id', id);
  // if (error) throw error;
  // return data;
};

export const deletePost = async (id) => {
  // const { error } = await supabase.from('posts').delete().eq('id', id);
  // if (error) throw error;
};
