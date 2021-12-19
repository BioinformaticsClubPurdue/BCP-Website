import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlogList from '../components/BlogList';

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => (
  <Layout>
    <SEO title="Blog" />
    <BlogList />
  </Layout>
);

export default Blog;
