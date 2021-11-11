import React from 'react';
import { Text } from '@chakra-ui/react';
import Layout from '../components/Layout';

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => <Text>Blog is in progress</Text>;

Blog.layout = Layout;

export default Blog;
