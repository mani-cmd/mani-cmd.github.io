import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About me
      </h1>
      <p className="mb-4">
        {`Hi! I'm Manikandan, a passionate and driven Computer Science student
        currently pursuing my engineering. With a strong interest in cyber field and development,
        I'm always seeking opportunities to apply and enhance my skills in.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
