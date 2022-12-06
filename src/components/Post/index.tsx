import styles from './index.module.sass'

type MediaContentType = 'VIDEO' | 'IMAGE' | 'GIF'

export default (props: {
  title: string,
  username: string,
  avatar: string,
  mediaContentURL?: string,
  mediaContentType?: MediaContentType,
  textContent: string
}) => {
  const getMediaContainer = (type?: MediaContentType) => {
    switch(type) {
      case 'GIF':
      case 'IMAGE':
        return <figure className={styles.imageContent}>
          <img src={props.mediaContentURL}/>
        </figure>
      case 'VIDEO':
        return <video controls className={styles.videoContent} src={props.mediaContentURL}>Could'nt load</video>
      default:
        return <></>
    }
  }

  return (
    <article className={styles.post}>
      <section className={styles.header}>
        <figure>
          <img src={props.avatar}/>
        </figure>
        <p>
          {props.username}
        </p>
      </section>
      <p className={styles.title}>{props.title}</p>
      <section className={styles.content}>
        <p className={styles.text}>
          {props.textContent}
        </p>
        {props.mediaContentURL ? getMediaContainer(props?.mediaContentType) : <></>}
      </section>
    </article>
  )
}