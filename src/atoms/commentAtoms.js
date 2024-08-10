import { atomWithMutation, atomWithQuery, queryClientAtom } from 'jotai-tanstack-query';
import { authHttp } from '../api/auth/authHttp';
import { atom } from 'jotai';

const commentIdAtom = atom(1);

export const commentIdAtomHandler = atom(null, (get, set, update) => {
  const currentId = get(commentIdAtom);
  if (currentId !== update) {
    set(commentIdAtom, update);
  }
});

export const commentAllAtom = atomWithQuery(get => ({
  queryKey: ['comment', get(commentIdAtom)],
  queryFn: async ({ queryKey: [, id] }) => {
    const { data } = await authHttp.get(`/comments/post/${id}`);
    return data;
  },
  staleTime: 5 * 60 * 1000,
}));

export const commentMutationAtom = atomWithMutation(get => ({
  mutationFn: async newComment => {
    const { data } = await authHttp.post(`comments/${get(commentIdAtom)}`, newComment);
    return data;
  },
  onSuccess: (data, variables, context) => {
    const queryClient = get(queryClientAtom);

    queryClient.invalidateQueries(['comment', get(commentIdAtom)]);
  },
}));


