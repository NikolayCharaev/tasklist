import React, { useRef, useState, useEffect } from 'react';
import styles from './index.module.scss';
import { categoriesItems } from '../data';

const CategoriesModal = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [categories, setCategories] = useState(
    categoriesItems.map((item) => ({ ...item, isActive: false })),
  );

  return (
    <div className={styles.Ellipsis}>
      <p>Выберите категорию дела</p>
      <div className={styles.EllipsisCategories}>
        {categories.map((elem) => (
          
          <button
          style={{ opacity: elem.isActive ? 1 : '' }}
            key={elem.id}
            className={`${styles[elem.ellipseColor]} ${elem.isActive ? styles.active : ''}`}
            onClick={() => {
      
              setActiveCategory(elem.ellipseColor);
              setCategories(
                categories.map((item) => ({
                  ...item,
                  isActive: item.id === elem.id ? true : false,
                })),
              );
            }}></button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesModal;
