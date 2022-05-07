import React, { useEffect, useState } from 'react';
import { getButtonStateArray } from '../../../helpers/getButtonStateArray';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { filterSlice } from '../../../store/reducers/FilterSlice';
import { Button } from '../../button/Button';
import { Wrapper } from './styles';
import { ITableFutter } from './types';

export const TableFooter: React.FC<ITableFutter> = ({ maxPage }) => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector(state => state.filterReducer);
  const [buttonStateArray, setButtonStateArray] = useState<boolean[]>(
    getButtonStateArray(maxPage, 0)
  );

  // получаем кнопки для постраничной пагинации
  const pagesButton = (maxPage: number): JSX.Element[] => {
    const outputArray: JSX.Element[] = [];
    for (let i = 0; i <= maxPage; i++) {
      outputArray.push(
        <Button
          isActive={buttonStateArray[i]}
          key={i}
          onClick={() => {
            dispatch(filterSlice.actions.setPage(i));
          }}
        >
          {String(i + 1)}
        </Button>
      );
    }
    return outputArray;
  };

  useEffect(() => {
    setButtonStateArray(getButtonStateArray(maxPage, page));
  }, [maxPage, page]);

  return (
    <Wrapper>
      <Button
        disabled={page === 0}
        onClick={() => {
          dispatch(filterSlice.actions.setPage(page - 1));
        }}
      >
        Prev
      </Button>
      {pagesButton(maxPage)}
      <Button
        disabled={page === maxPage}
        onClick={() => {
          dispatch(filterSlice.actions.setPage(page + 1));
        }}
      >
        Next
      </Button>
    </Wrapper>
  );
};
