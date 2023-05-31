import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import css from './search.module.css';

export const Search = () => {
  const searchId = shortid.generate();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  
  const filterHandler = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  }
    return (
      <label htmlFor={searchId} className={css.searchLabel}>
        Find contacts by name
        <input
          id={searchId}
          type="text"
          name="filter"
          value={filter}
          onChange={filterHandler}
        />
      </label>
    );
};

