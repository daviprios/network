import styles from './index.module.sass'

import Post from '$components/Post'

export default () => {
  return <main className={styles.feed}>
    <Post
      title='Post novo'
      textContent='Conteúdo em texto do que eu estou escrevendo no post'
      avatar='https://cdn-icons-png.flaticon.com/512/194/194938.png'
      username='username'
      mediaContentURL='https://www.dofactory.com/media/movie.mp4'
      mediaContentType='VIDEO'
    />
  </main>
}