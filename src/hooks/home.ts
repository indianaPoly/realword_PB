import { useQuery } from '@tanstack/react-query';
import { feedApi } from '../api/articlesApi';
import tagApi from '../api/tagApi';
import { IGlobalUserData } from '../types/userApi.type';

export const useTagQuery = () => {
  return useQuery({
    queryKey: ['tags'],
    queryFn: async () => {
      try {
        const response = await tagApi.get();
        return response.data.tags;
      } catch (error) {
        throw error;
      }
    },
  });
};

export const useGlobalArticlesQuery = (offset: number) => {
  return useQuery({
    queryKey: ['globalArticles'],
    queryFn: async () => {
      try {
        const response = await feedApi.getFeed({ offset: offset });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    staleTime: 60000,
  });
};

export const useMyArticlesQuery = (user: IGlobalUserData, offset: number) => {
  return useQuery({
    queryKey: ['myArticles'],
    queryFn: async () => {
      try {
        if (user.user.username !== undefined) {
          const response = await feedApi.getFollowingFeed(offset);
          return response.data;
        }
      } catch (error) {
        throw error;
      }
    },
  });
};

export const useTagArticlesQuery = (offset: number, currentTag: string) => {
  return useQuery({
    queryKey: ['tagArticles'],
    queryFn: async () => {
      try {
        const response = await feedApi.getFeed({ offset: offset, tag: currentTag });
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    enabled: false,
  });
};
