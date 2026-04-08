import { useEffect, useRef, useState } from 'react';
import { useGetCatsQuery } from "@/entities/cat/api/catsApi";
import styles from './CatsPage.module.scss'
import { CatCard } from "@/entities/cat/ui";

export const CatsPage = () => {
  const [page, setPage] = useState(0);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const {data, error, isLoading, isFetching} = useGetCatsQuery(page)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          setPage(prev => prev + 1);
        }
      },
      {
        root: null,
        rootMargin: "200px",
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [isFetching]);


  if (isLoading) {
    return <div className={styles.loading_message}>Загружаем котиков, подождите...</div>
  }
  if (error) {
    return <div className={styles.error_message}>Не удалось загрузить котиков. Попробуйте позже или перезагрузите страницу.</div>
  }
  return (
    <>
      <div className={styles.cardLayout}>
        {data?.map(cat => (
          <CatCard key={cat.id} cat={cat}/>
        ))}

        <div ref={loaderRef} />

      </div>
      {isFetching && <div className={styles.fetching_message}>... загружаем еще котиков ...</div>}
    </>
  )
}