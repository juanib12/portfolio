// src/services/blogService.js
import { supabase } from '../supabaseClient';

export const getPosts = async () => {
  const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
};

export const createPost = async (title, content, slug) => {
  const { data, error } = await supabase.from('posts').insert([{ title, content, slug }]);
  if (error) throw error;
  return data;
};

export const updatePost = async (id, title, content) => {
  const { data, error } = await supabase.from('posts').update({ title, content }).eq('id', id);
  if (error) throw error;
  return data;
};

export const deletePost = async (id) => {
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) throw error;
};
