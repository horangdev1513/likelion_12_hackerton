import { atomWithQuery } from 'jotai-tanstack-query';
import { authHttp } from '../api/auth/authHttp';
import { atom } from 'jotai';

const postIdAtom = atom(1);

export const postIdAtomHandler = atom(null, (get, set, update) => {
  const currentId = get(postIdAtom);
  if (currentId !== update) {
    set(postIdAtom, update);
  }
});

export const postsAllAtom = atomWithQuery(() => ({
  queryKey: ['posts'],
  queryFn: async () => {
    const { data } = await authHttp.get('/posts');
    return data;
  },
  staleTime: 5 * 60 * 1000,
}));

export const postsNewAtom = atomWithQuery(() => ({
  queryKey: ['postsNew'],
  queryFn: async () => {
    const { data } = await authHttp.get('/posts');

    if (data.length === 0) return [];

    return data.length >= 3 ? data.slice(0, 3) : data;
  },
  staleTime: 5 * 60 * 1000,
}));

export const postsAtom = atomWithQuery(get => ({
  queryKey: ['post', get(postIdAtom)],
  queryFn: async ({ queryKey: [, id] }) => {
    const { data } = await authHttp.get(`/posts/${id}`);
    return data;
  },
  staleTime: 5 * 60 * 1000,
}));
