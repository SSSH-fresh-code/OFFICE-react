import React from 'react';
import useGetSeriesListQuery from '../../../data/Blog/Series/series.list.get';
import SeriesList from '../Series/SeriesList';
import { useSearch } from '@tanstack/react-router';

interface SeriesListByTopicProps {
  name: string;
}

const SeriesListByTopic: React.FC<SeriesListByTopicProps> = ({ name }) => {
  const pageName = 'seriesPage';

  const search = useSearch({ from: "" });
  const page = search[pageName] || 1;

  const seriesData = useGetSeriesListQuery(page, name);

  return (
    <SeriesList query={seriesData} pageName={pageName} />
  );
};

export default SeriesListByTopic;