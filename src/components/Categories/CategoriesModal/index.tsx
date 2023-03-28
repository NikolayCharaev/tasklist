import React, { useRef, useState, useEffect } from 'react';

import styles from './index.module.scss';

import { categoriesItems } from '../data';

const CategoriesModal = () => {
  return (
    <div className={styles.Ellipsis}>
      <p>Выберите категорию дела</p>
      <div className={styles.EllipsisCategories}>
        {categoriesItems.map((elem) => {
          const ref = useRef<HTMLButtonElement>(null);
          function handleButtonClick() {
            if (ref.current) {
           ref.current.style.opacity = '1' 
            }
          }
          console.log(ref);
          return (
            <button
              ref={ref}
              className={`${styles[elem.ellipseColor]}`}
              onClick={() => {
                handleButtonClick();
                console.log(elem.categories)
              }}></button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesModal;
