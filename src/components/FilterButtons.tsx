import React, { FC } from 'react';
import { FilterMode } from '../types';

interface FilterButtonsProps {
  currentFilter: FilterMode;
  onFilterChange: (filter: FilterMode) => void;
}

export const FilterButtons : FC<FilterButtonsProps> = ({currentFilter, onFilterChange}) => {
    return <div className="filter-buttons">
        <button 
            className={currentFilter === 'all' ? 'active' : ''}
            onClick={() => onFilterChange('all')}
        >
            Все
        </button>
        <button 
            className={currentFilter === 'favorite' ? 'active' : ''}
            onClick={() => onFilterChange('favorite')}
        >
            Только избранные
        </button>
    </div>
}