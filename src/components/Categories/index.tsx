import React from 'react';

import cat from '../images/cat.png';

import { categoriesItems } from './data';
import styles from './index.module.scss';
const Categories = () => {
  return (
    <>
      <div className={styles.categories}>
        <ul className={styles.categoriesList}>
          {categoriesItems.map((item, index) => {
            const { title, categories, id, ellipseColor } = item;
            return (
              <li className={styles.categoriesItem} key={id} onClick={() => { 
              }}>
                <span className={`${styles.categoriesEllipse} ${styles[ellipseColor]}`}></span>
                <p className={styles.categoriesItemTitle}>{title}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <img src={cat} alt="cat" className={styles.categoriesCat} />
    </>
  );
};

export default Categories;
