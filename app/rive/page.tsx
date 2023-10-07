import styles from './page.module.css';
import RiveClient from './rive-client';

const RivePage = () => {
  return (
    <main className={styles.main}>
      {Array.from({ length: 200 }).map((_, i) => (
        <RiveClient key={i} />
      ))}
    </main>
  );
};

export default RivePage;
