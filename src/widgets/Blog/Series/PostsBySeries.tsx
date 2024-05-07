import React from 'react';
import { useSearch } from '@tanstack/react-router';
import useGetPostsListQuery from '../../../data/Blog/Posts/posts.list.get';
import PostsList from '../Posts/PostsList';

interface PostsBySeriesProps {
  id: number;
}

const PostsBySeries: React.FC<PostsBySeriesProps> = ({ id }) => {
  const search = useSearch({ from: "" });
  const page = search["page"] || 1;

  const PostsData = useGetPostsListQuery(page, undefined, id);

  return (
    <PostsList query={PostsData} />
  );
};

export default PostsBySeries;