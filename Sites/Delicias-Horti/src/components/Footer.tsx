import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 <strong>Delícias Horti</strong>. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;


