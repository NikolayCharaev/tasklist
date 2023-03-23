import React from 'react';

import cat from '../images/cat.png';

import styles from './index.module.scss';
const Categories = () => {
  return (
    <>
      <div className={styles.categories}>
        <ul className={styles.categoriesList}>
          <li className={styles.categoriesItem}>
            <span className={`${styles.categoriesEllipse} ${styles.work}`}></span>
            <p className={styles.categoriesItemTitle}>работа</p>
          </li>

          <li className={styles.categoriesItem}>
            <span className={`${styles.categoriesEllipse} ${styles.studies}`}></span>
            <p className={styles.categoriesItemTitle}>учеба</p>
          </li>

          <li className={styles.categoriesItem}>
            <span className={`${styles.categoriesEllipse} ${styles.shop}`}></span>
            <p className={styles.categoriesItemTitle}>покупки</p>
          </li>

          <li className={styles.categoriesItem}>
            <span className={`${styles.categoriesEllipse} ${styles.sport}`}></span>
            <p className={styles.categoriesItemTitle}>спорт</p>
          </li>
        </ul>
      </div>
      <img src={cat} alt="cat" className={styles.categoriesCat} />
    </>
  );
};

export default Categories;
