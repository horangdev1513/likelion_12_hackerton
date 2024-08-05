import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { atomWithQuery, atomWithMutation, queryClientAtom } from 'jotai-tanstack-query';
import { authHttp } from '../api/auth/authHttp';

const storage = createJSONStorage(() => sessionStorage);
export const userStorageAtom = atomWithStorage(
  'userInfo',
  {
    nickname: null,
    today: null,
    id: null,
    postcount: null,
    commentcount: null,
  },
  storage,
);

export const readUser = atom(get => get(userStorageAtom));

export const readUserToday = atom(get => get(userStorageAtom).today);

export const readUserNickName = atom(get => get(userStorageAtom).nickname);

export const readUserId = atom(get => get(userStorageAtom).id);

export const readUserPostCount = atom(get => get(userStorageAtom).postcount);

export const readUserCommentCount = atom(get => get(userStorageAtom).commentcount);

export const writeUserToday = atom(null, (get, set, update) => {
  set(userStorageAtom, userData => ({
    ...userData,
    today: update,
  }));
});

export const writeUserPostCount = atom(null, (get, set, update) => {
  set(userStorageAtom, userData => ({
    ...userData,
    postcount: update,
  }));
});

export const writeUserCommentCount = atom(null, (get, set, update) => {
  set(userStorageAtom, userData => ({
    ...userData,
    commentcount: update,
  }));
});

export const writeUserInfo = atom(null, (get, set, update) => {
  set(userStorageAtom, userData => ({
    ...userData,
    nickname: update.nickname,
    today: update.today,
    id: update.id,
  }));
});

export const todayUserPost = atomWithQuery(get => ({
  queryKey: ['todaypost', get(readUserNickName)],
  queryFn: async ({ queryKey: [, id] }) => {
    const { data } = await authHttp.get(`/posts/user/${id}`);
    return data;
  },
  staleTime: 300 * 1000,
}));

// MyPage
export const userPostCount = atomWithQuery(get => ({
  queryKey: ['userPostCount'],
  queryFn: async () => {
    const { data } = await authHttp.get(`/members/me/posts/count`);
    return data;
  },
  staleTime: 300 * 1000,
}));

// MyPageMyPosts
export const userPosts = atomWithQuery(get => ({
  queryKey: ['userPosts'],
  queryFn: async () => {
    const { data } = await authHttp.get(`/posts/user/${get(userStorageAtom).nickname}`);
    return data;
  },
  staleTime: 300 * 1000,
}));

//MyPage
export const userCommentCount = atomWithQuery(get => ({
  queryKey: ['userCommentCount'],
  queryFn: async () => {
    const { data } = await authHttp.get(`/members/me/comments/count`);
    return data;
  },
  staleTime: 300 * 1000,
}));

export const userComments = atomWithQuery(get => ({
  queryKey: ['userComments'],
  queryFn: async () => {
    const { data } = await authHttp.get(`/comments/user/${get(userStorageAtom).nickname}`);
    return data;
  },
  staleTime: 300 * 1000,
}));

export const userCommentDelteAtom = atomWithMutation(() => ({
  mutationFn: async commentId => {
    const { data } = await authHttp.delete(`comments/${commentId}`);
    return data;
  },
  onSuccess: (data, variables, context) => {
    const queryClient = get(queryClientAtom);

    queryClient.invalidateQueries(['userComments']);
    queryClient.refetchQueries(['userComments']);
  },
}));
