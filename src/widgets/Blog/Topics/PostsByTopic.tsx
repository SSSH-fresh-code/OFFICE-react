import React from 'react';
import { useSearch } from '@tanstack/react-router';
import useGetPostsListQuery from '../../../data/Blog/Posts/posts.list.get';
import PostsList from '../Posts/PostsList';

interface PostsByTopicProps {
  name: string;
}

const PostsByTopic: React.FC<PostsByTopicProps> = ({ name }) => {
  const pageName = 'postsPage';

  const search = useSearch({ from: "" });
  const page = search[pageName] || 1;

  const PostsData = useGetPostsListQuery(page, name);

  return (
    <PostsList query={PostsData} pageName={pageName} />
  );
};

export default PostsByTopic;