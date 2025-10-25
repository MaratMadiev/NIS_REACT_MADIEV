import React, { FC } from 'react';
import { ViewMode } from '../types';

interface ViewButtonsProps {
  currentViewMode: ViewMode;
  onViewModeChange: (viewMode: ViewMode) => void;
}

export const ViewButtons : FC<ViewButtonsProps> = ({currentViewMode, onViewModeChange}) => {
    return <div className="view-buttons">
        <button 
            className={currentViewMode === 'grid' ? 'active' : ''}
            onClick={() => onViewModeChange('grid')}
        >
            Сетка
        </button>
        <button 
            className={currentViewMode === 'list' ? 'active' : ''}
            onClick={() => onViewModeChange('list')}
        >
            Список
        </button>
    </div>
}