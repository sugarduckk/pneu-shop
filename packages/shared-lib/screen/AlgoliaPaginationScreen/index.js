import React from 'react';
import CardContainer from '../../layout/CardContainer';
import Button from '../../button/Button';
import Space from '../../layout/Space';
import SimpleCard from '../../layout/SimpleCard';
import GridLayout from '../../layout/GridLayout';

const AlgoliaPaginationScreen = ({ Card, result, onNextClick, onPreviousClick }) => {
  const { hits, nbHits, nbPages, page } = result;
  return <>
    <CardContainer>
      <SimpleCard row={true}>
        <Space />
        {`found ${nbHits} results`}
      </SimpleCard>
    </CardContainer>
    <CardContainer>
      <GridLayout>
        {nbHits > 0 && hits.map(hit => {
          return <Card key={hit.objectID} hit={hit} />;
        })}
      </GridLayout>
    </CardContainer>
    <CardContainer>
      {nbHits > 0 && <SimpleCard row={true}>
        <Space />
        <Button onClick={onPreviousClick} disabled={page === 0}>previous</Button>
        <div>{page + 1}</div>
        <Button onClick={onNextClick} disabled={page === nbPages - 1}>next</Button>
        <Space />
      </SimpleCard>}
    </CardContainer>
  </>;
};

export default AlgoliaPaginationScreen;